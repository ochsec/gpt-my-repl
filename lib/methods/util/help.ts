export default function help(): void {
    console.log(`Available methods:\n`);
    console.log(`await Chat.complete(<prompt: string | messages: JSON[]>): send prompt/messages for completion.`);
    console.log(`Chat.setModel(<modelname: string>): Set the model for prompt completions.`);
    console.log(`Chat.setTemp(<temperature: float>): Set the temperature of the model.`);
    console.log(`Chat.setMemory(<steps: integer>): Set the number of reverse chronological messages to load into the prompt.`);
    console.log(`Chat.getLast(): Print the last prompt completion.`);
    console.log(`Chat.getHistory(): Print the completion history as an array.`);
    console.log(`Chat.saveHistory(<filePath: string>): Save the chat history to a file in JSON format.`);
    console.log(`Chat.loadHistory(<filePath: string>): Load history from a JSON file`);
    console.log(`Chat.clearHistory(): Clears the history messages.`);
    console.log(`Chat.tokenUsage(<messages: object[]): Calculates tokens used in the provided message history array.`);
    console.log(`Chat.setWorkDir(<dirPath: string>): Specify a relative or absolute path to set as the current directory.`);
    console.log(`Chat.saveFile(<dirPath: string>, <data: string | array | object>): Save a text string or JSON into a file.`);
    console.log(`Chat.loadFile<<dirPath: string>): Load a utf8 string (text or JSON) from a file.`);
    console.log(`await Chat.fetch(<url: string>): Fetch a web page's html.`);
    console.log(`await Chat.extractFromHtml(<url: string>): Uses the npm package @extractus/article-extractor to extract text content including quote & code blocks from a web page and creates stripped-down article html`);
    console.log(`await Chat.makeDoc(<url: string>, <type: string> = 'markdown): Fetches the contents of a web page, extracts article (text content) and converts content to the specified type (i.e. markdown, text). Returns article in final format.`);
    console.log(`await Chat.concatFiles(<dir: string>, <extensions: Array<string>): Asynchronously reads and concatenates the contents of all files with specified extensions in a given directory and its subdirectories into a single string.`)
}
