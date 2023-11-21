
import { extractFromHtml } from "@extractus/article-extractor";
import TurndownService from "turndown";
import UtilsType from "./types/Utils";

const turndownService = new TurndownService();

const Utils: UtilsType = {
    help: function () {
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
    },
    setWorkDir: function (dirPath) {
        process.chdir(dirPath);
    },
    saveFile: function (filePath, data) {
        let content: string;
        if (typeof data === 'object') {
            content = JSON.stringify(data);
        } else {
            content = data;
        }
        Deno.writeFileSync(filePath, content);
    },
    loadFile: function (filePath) {
        const data = Deno.readFileSync(filePath, 'utf8');
        return data;
    },
    fetch: async function (url) {
        return new Promise((resolve, reject) => {
            https.get(url, (response) => {
                let content = '';

                response.on('data', (chunk) => {
                    content += chunk;
                });

                response.on('end', () => {
                    resolve(content);
                });
            }).on('error', (error) => {
                reject(error);
            });
        });
    },
    articleFromHtml: async function (html) {
        const articleHtml = await extractFromHtml(html);
        return articleHtml;
    },
    htmlToMarkdown: function (html) {
        const markdown = turndownService.turndown(html);
        return markdown;
    },
    makeDoc: async function (url, type = 'markdown') {
        try {
            const html = await this.fetch(url);
            const article = await this.articleFromHtml(html, url);
            const title = `<h1>${article.title}</h1>`;
            const description = `<p>${article.description}</p>`;
            const content = article.content;
            const newHtml = [title, description, content].join('');
            return this.htmlToMarkdown(newHtml);
        } catch (error) {
            throw Error(error);
        }
    },
};

export default Utils;