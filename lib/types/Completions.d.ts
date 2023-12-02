import History, { IMessageItem } from "./History.d.ts";

type CompletionsType = {
    _history: History;
    getHistory(): History;
    getLast(): IMessageItem;
    saveHistory(filepath: string): void;
    loadHistory(filePath: string): void;
    clearHistory(): void;
    complete(input: string | History): string;
    
}

export default CompletionsType;