export default async function fetchTextData (url: string): Promise<string> {
    const textResponse = await fetch(url);
    const textData = await textResponse.text();
    return textData;
}
