"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { serviceOptions } from "@/lib/constants";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { service: serviceOptions[0] },
  });

  async function onSubmit(data: ContactFormData) {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      toast.success("Message sent!", {
        description: result.emailed
          ? "Thank you for reaching out. I'll get back to you soon."
          : "Received (dev mode). Configure RESEND_API_KEY on Vercel for live email.",
      });
      reset();
    } catch (err) {
      toast.error("Something went wrong", {
        description: err instanceof Error ? err.message : "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 text-white">
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
        <div>
          <input
            id="name"
            placeholder="Your name"
            className="w-full border-b border-white/30 bg-transparent pb-3 text-lg placeholder:text-white/40 focus:border-white"
            {...register("name")}
          />
          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
        </div>
        <div>
          <input
            id="email"
            type="email"
            placeholder="Email address"
            className="w-full border-b border-white/30 bg-transparent pb-3 text-lg placeholder:text-white/40 focus:border-white"
            {...register("email")}
          />
          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <select
          id="service"
          className="w-full border-b border-white/30 bg-transparent pb-3 text-lg text-white/80 focus:border-white"
          {...register("service")}
        >
          {serviceOptions.map((s) => (
            <option key={s} value={s} className="bg-black text-white">
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <textarea
          id="message"
          placeholder="What are you building?"
          rows={4}
          className="w-full border-b border-white/30 bg-transparent pb-3 text-lg placeholder:text-white/40 focus:border-white"
          {...register("message")}
        />
        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="minimal-cta w-full rounded-full py-4 text-sm uppercase tracking-[2.5px] disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send note"}
      </button>
    </form>
  );
}
