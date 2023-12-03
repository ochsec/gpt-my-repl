import State from "../../state/state.ts";

export default function validateModel(model: string) {
    return State.getModels().includes(model);
}
