import State from "../../state/state.ts";
import loadFile from "../utils/loadFile.ts";

export default function loadHistory(filePath: string): void {
    const data = loadFile(filePath);
    State.setHistory(JSON.parse(data));
}
