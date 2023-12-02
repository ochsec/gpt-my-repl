export default function setWorkDir (dirPath: string): void {
    Deno.chdir(dirPath);
}
