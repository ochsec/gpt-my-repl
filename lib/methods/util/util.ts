import IUtil from "../../types/IUtil.d.ts";
import articleFromHtml from "./articleFromHtml.ts"
import fetchTextData from "./fetchTextData.ts";
import help from "./help.ts";
import htmlToMarkdown from "./htmlToMarkdown.ts";
import loadFile from "./loadFile.ts";
import makeDoc from "./makeDoc.ts";
import saveFile from "./saveFile.ts";
import setWorkDir from "./setWorkDir.ts";

const Util: IUtil = {
    articleFromHtml,
    fetchTextData,
    help,
    htmlToMarkdown,
    loadFile,
    makeDoc,
    saveFile,
    setWorkDir,
};

export default Util;