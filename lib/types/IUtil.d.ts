import { ArticleData } from "@extractus/article-extractor";

interface IUtil {
    help(): void;
    setWorkDir(dirPath: string): void;
    saveFile(filePath: string, data: object | string): void;
    loadFile(filePath: string): string;
    fetchTextData (url: string): Promise<string>
    articleFromHtml(html: string): Promise<ArticleData | null>;
    htmlToMarkdown(html: string): string;
    makeDoc(url: string): Promise<string | null>;
}

export default IUtil;