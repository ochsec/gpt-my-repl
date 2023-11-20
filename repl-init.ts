import { load } from "https://deno.land/std@0.206.0/dotenv/mod.ts";
import { Configuration, OpenAIApi } from "openai";
// import { Chat } from "./lib/chat";
await load({export: true});

const configuration = new Configuration({
    apiKey: Deno.env.get("OPENAI_API_KEY"),
    organization: Deno.env.get("ORGANIZATION"),
});
const openai = new OpenAIApi(configuration);

console.dir(openai);