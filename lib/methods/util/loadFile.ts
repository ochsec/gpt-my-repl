export default function loadFile (filePath: string): string {
    const decoder = new TextDecoder("utf-8");
    const data = Deno.readFileSync(filePath);
    return decoder.decode(data);
}
