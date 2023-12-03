import State from "../../state/state.ts";

export default function validateModel(model: string): boolean {
    return State.getModels().includes(model);
}
