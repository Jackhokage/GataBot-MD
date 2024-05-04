import fetch from 'node-fetch'
import axios from 'axios'
import translate from '@vitalets/google-translate-api'
import {Configuration, OpenAIApi} from 'openai'

const configuration = new Configuration({organization: global.openai_org_id, apiKey: global.openai_key})
const openaiii = new OpenAIApi(configuration)

var handler = async (m, {conn, text, usedPrefix, command}) => {
if (!text) return conn.sendMessage(from, { text: `*INGRESE EL TEXTO DE LOS QUE QUIERE BUSCAR?*` }, { quoted: msg })
try {
await conn.sendPresenceUpdate('composing', m.chat)
let syst = `Eres InfinityBot-MD, un gran modelo de lenguaje entrenado por OpenAI. Siga cuidadosamente las instrucciones del usuario. Responde usando Markdown.`
let gpt = await fetch(global.API('fgmods', '/api/info/openai', { prompt: syst, text }, 'apikey'));
let res = await gpt.json()
await m.reply(res.result)
} catch {
try {
let gpt = await fetch(`https://delirius-api-oficial.vercel.app/api/chatgpt?q=${text}`);
let res = await gpt.json()
await m.reply(res.data)
} catch (e) {
console.log(e)}}}
}}}

}
handler.help = ['openia', 'chatgpt', 'ia']
handler.tags = ['ai']
handler.command = /^(openai|chatgpt|ia)$/i

export default handler

