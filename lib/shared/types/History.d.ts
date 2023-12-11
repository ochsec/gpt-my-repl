type HistoryType = Array<IMessageItem>;

export interface IMessageItem {
   name?: string;
   role: 'system' | 'user' | 'assistant';
   content: string | undefined;
}

export default HistoryType;