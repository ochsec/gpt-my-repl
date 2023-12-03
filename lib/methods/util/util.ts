import articleFromHtml from "./articleFromHtml.ts"
import fetchTextData from "./fetchTextData.ts";
import help from "./help.ts";
import htmlToMarkdown from "./htmlToMarkdown.ts";
import loadFile from "./loadFile.ts";
import makeDoc from "./makeDoc.ts";
import saveFile from "./saveFile.ts";
import setWorkDir from "./setWorkDir.ts";

export default class Utils {
    static articleFromHtml = articleFromHtml;
    static fetchTextData = fetchTextData;
    static help = help;
    static htmlToMarkdown = htmlToMarkdown;
    static loadFile = loadFile;
    static makeDoc = makeDoc;
    static saveFile = saveFile;
    static setWorkDir = setWorkDir;
}