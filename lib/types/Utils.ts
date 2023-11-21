import { ArticleData } from "@extractus/article-extractor";

type UtilsType = {
    help(): void;
    setWorkDir(dirPath: string): void;
    saveFile(filePath: string, data: any): void;
    loadFile(filePath: string): any;
    fetch(url: string): Promise<any>;
    articleFromHtml(html: string): Promise<ArticleData | null>;
    htmlToMarkdown(html: string): string;
    makeDoc(url: string, type: string): Promise<string>;
};

export default UtilsType;