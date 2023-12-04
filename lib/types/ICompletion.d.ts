import History, { IMessageItem } from "./History.d.ts";
import { MessageItem, ITokenUsageResponse } from "./TokenUsage.d.ts";

interface ICompletion {
    clearHistory(): void;
    complete(input: string | History): Promise<string | undefined>;
    getHistory(): History;
    getLast(): IMessageItem
    loadHistory(filePath: string): void;
    saveHistory(filePath: string): void;
    tokenUsage(messages: MessageItem[]): ITokenUsageResponse;
}

export default ICompletion;
