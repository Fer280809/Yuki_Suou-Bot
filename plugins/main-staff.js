let handler = async (m, { conn, command, usedPrefix }) => {
let img = './src/catalogo.jpg'
let staff = `

*๛* *Creadores:*

♛ *꧁𝕱𝖊𝖗𝖓𝖆𝖓𝖉𝖔꧂*
> 🜸 Rol » *Creador*
> ✧ GitHub » https://github.com/Fer280809
> *☬ wa.me/52418145006*



♛ *꧁edward꧂*
> 🜸 Rol » *Creador*
> ✧ GitHub » https://github.com/edward-1738
> *☬ wa.me/18096083286

`
await conn.sendFile(m.chat, img, 'yuki.jpg', staff.trim(), fkontak)
}
  
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler
