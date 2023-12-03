import ICompletion from "../../types/ICompletion.d.ts";
import clearHistory from "./clearHistory.ts";
import complete from "./complete.ts";
import getHistory from "./getHistory.ts";
import loadHistory from "./loadHistory.ts";
import saveHistory from "./saveHistory.ts";
import tokenUsage from "./tokenUsage.ts";

const Completion: ICompletion = {
    clearHistory,
    complete,
    getHistory,
    loadHistory,
    saveHistory,
    tokenUsage,
};

export default Completion;