import fs from "fs";
import path from "path";

const HEADSHOT_BASENAME = "jimmy-headshot";
const EXTENSIONS = ["jpg", "jpeg", "png", "webp"] as const;

const SEARCH_DIRS = [
  path.join(process.cwd(), "public/images"),
  path.join(process.cwd(), "public"),
];

export function getHeadshotPath(): string | null {
  for (const dir of SEARCH_DIRS) {
    for (const ext of EXTENSIONS) {
      const filePath = path.join(dir, `${HEADSHOT_BASENAME}.${ext}`);
      if (fs.existsSync(filePath)) {
        const prefix = dir.endsWith("images") ? "/images" : "";
        return `${prefix}/${HEADSHOT_BASENAME}.${ext}`;
      }
    }
  }
  return null;
}
