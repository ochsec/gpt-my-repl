import TurndownService from "turndown";

export default function htmlToMarkdown (html: string): string {
    const turndownService = new TurndownService();
    const markdown = turndownService.turndown(html);
    return markdown;
}
