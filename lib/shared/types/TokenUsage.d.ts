export interface MessageItem {
    name?: string;
    role: 'system' | 'user' | 'assistant';
    content: string;
}

export interface ITokenUsageResponse {
    prompt: number;
    completion: number;
    total: number;
}