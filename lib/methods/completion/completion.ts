import clearHistory from "./clearHistory.ts";
import complete from "./complete.ts";
import getHistory from "./getHistory.ts";
import loadHistory from "./loadHistory.ts";
import saveHistory from "./saveHistory.ts";
import tokenUsage from "./tokenUsage.ts";

export default class Completion {
    static clearHistory = clearHistory;
    static complete = complete;
    static getHistory = getHistory;
    static loadHistory = loadHistory;
    static saveHistory = saveHistory;
    static tokenUsage = tokenUsage;
}
