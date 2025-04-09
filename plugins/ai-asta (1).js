import fetch from 'node-fetch'
var handler = async (m, { text,  usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, `${emoji} Ingrese su mensaje que le quiera desir a Asta.`, m)
try {
await m.react(rwait)
conn.sendPresenceUpdate('composing', m.chat)
var apii = await fetch(`https://apis-starlights-team.koyeb.app/starlight/gemini?text=${text}`)
var res = await apii.json()
await m.reply(res.result)
} catch {
await m.react('❌')
await conn.reply(m.chat, `${msm} Asta no puede responder a esa pregunta.`, m)
}}
handler.command = ['asta']
handler.help = ['Asta']
handler.tags = ['fun']
handler.register = true
handler.group = true

export default handler
