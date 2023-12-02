import { ArticleData, extractFromHtml } from "@extractus/article-extractor";

export default async function articleFromHtml (html: string): Promise<ArticleData | null> {
    const articleHtml = await extractFromHtml(html);
    return articleHtml;
}
