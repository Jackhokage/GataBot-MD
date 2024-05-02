import moment from 'moment-timezone'
  
export async function before(m) {

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return
  
let user = global.db.data.users[m.sender]

if (new Date() - user.pc < 86400000) return
await conn.reply(m.chat, `🙌🏻 Hola ${nombre}!!
 *${saludo}*

🗓️ Fecha: ${fecha}
⏱️ Hora: ${tiempo}

⚠️ *Nota:* no envíe spam al bot
🔖 Escriba *.menu* para mostrar el menú 
  
🖋️ ¿Quieres apoyar este proyecto para que siga actualizándose? escribeme +51928438472*`, m, fake, )


user.pc = new Date * 1
}
