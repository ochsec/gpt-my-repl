import { ArticleData } from "@extractus/article-extractor";

type UtilsType = {
    help(): void;
    setWorkDir(dirPath: string): void;
    saveFile(filePath: string, data: object | string): void;
    loadFile(filePath: string): string;
    fetch(url: string): Promise<string>;
    articleFromHtml(html: string): Promise<ArticleData | null>;
    htmlToMarkdown(html: string): string;
    makeDoc(url: string): Promise<string | null>;
};

export default UtilsType;