import { walk } from "https://deno.land/std@0.127.0/fs/mod.ts";
import { extname } from "https://deno.land/std@0.127.0/path/mod.ts";

export default async function concatFiles(dir: string, extensions: string[]): Promise<string> {
  let contents = "";

  for await (const entry of walk(dir, { includeDirs: false, followSymlinks: false })) {
    if (extensions.includes(extname(entry.path))) {
      const fileContents = await Deno.readTextFile(entry.path);
      contents += fileContents;
    }
  }

  return contents;
}
