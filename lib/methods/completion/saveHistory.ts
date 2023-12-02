import State from "../../state/state.ts";
import saveFile from "../utils/saveFile.ts";

export default function saveHistory(filePath: string): void {
    const data = State.getHistory();
    saveFile(filePath, data);
}
