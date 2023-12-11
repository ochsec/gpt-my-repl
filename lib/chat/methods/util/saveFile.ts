export default function saveFile (filePath: string, data: object | string): void {
    let content: string;
    if (typeof data === 'object') {
        content = JSON.stringify(data);
    } else {
        content = data;
    }
    Deno.writeTextFileSync(filePath, content);
}
