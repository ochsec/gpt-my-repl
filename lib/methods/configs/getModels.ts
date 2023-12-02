import State from "../../state/state.ts";

export default async function getModels() {
    const response = await openai.listEngines();
    this._models = response.data.data.map(m => m.id);
},