import History, { IHistoryItem } from "./History.d.ts";

type CompletionsType = {
    _history: History;
    getHistory(): History;
    getLast(): IHistoryItem;
    saveHistory(filepath: string): void;
    loadHistory(filePath: string): void;
    clearHistory(): void;
    complete(input: string | History): string;
    
}

export default CompletionsType;