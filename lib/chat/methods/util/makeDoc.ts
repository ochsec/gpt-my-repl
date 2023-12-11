import articleFromHtml from "./articleFromHtml.ts";
import fetchTextData from "./fetchTextData.ts";
import htmlToMarkdown from "./htmlToMarkdown.ts";

export default async function makeDoc (url: string): Promise<string | null> {
    try {
        const html = await fetchTextData(url);
        const article = await articleFromHtml(html);
        if (!article) return null;

        const title = `<h1>${article.title}</h1>`;
        const description = `<p>${article.description}</p>`;
        const content = article.content;
        const newHtml = [title, description, content].join('');
        return htmlToMarkdown(newHtml);
    } catch (error) {
        throw Error(error);
    }
}
