import { load } from "https://deno.land/std@0.206.0/dotenv/mod.ts";
import { Configuration, OpenAIApi } from "openai";
import Chat from "./lib/Chat.ts";
import State from "./lib/state/state.ts";
await load({export: true});

const configuration = new Configuration({
    apiKey: Deno.env.get("OPENAI_API_KEY"),
    organization: Deno.env.get("ORGANIZATION"),
});
const openai = new OpenAIApi(configuration);

State.setOpenAIApi(openai);
await Chat.getModels();
Chat.setDefaultConfig();

console.log('Enter Chat.help() for available Chat methods.');