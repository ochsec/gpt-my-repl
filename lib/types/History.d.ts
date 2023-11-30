export interface IHistoryItem {
   [name: string]: string; 
}

type HistoryType = Array<IHistoryItem>;

export default HistoryType;