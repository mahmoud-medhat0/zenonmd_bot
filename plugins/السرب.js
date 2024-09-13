function clockString(ms) {
    let h = Math.floor(ms / 3600000);
    let m = Math.floor(ms % 3600000 / 60000);
    let s = Math.floor(ms % 60000 / 1000);
    return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
}

import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = pkg;

const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
    let d = new Date(new Date + 3600000);
    let locale = 'ar';
    let week = d.toLocaleDateString(locale, { weekday: 'long' });
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender)
    let { money, joincount } = global.db.data.users[m.sender];
    let { exp, limit, level, role } = global.db.data.users[m.sender];
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;
    let more = String.fromCharCode(8206);
    let readMore = more.repeat(850);
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
  await conn.sendMessage(m.chat, { react: { text: '📂', key: m.key } })
  const Elsony = 'https://media0055.elcinema.com/uploads/_640x_a8b9597a423aba97ef2f9b7af93cff16b11853192a5d9d9e6c75b683edac65fc.jpg'
  const mentionId = m.key.participant || m.key.remoteJid;
 
conn.relayMessage(m.chat, { viewOnceMessage: { message: { interactiveMessage: { header: { title: `gataVidMenu`}, body: { text: `*• ──╾⊱﹝⚜️﹞⊰╼── •*
*مــرحــبــا بــك/ي* @${mentionId.split('@')[0]}

فيلم مصر 104 دقيقة ﺗﻢ ﻋﺮﺿﻪ مصريالجمهور العام
تاريخ العرض: 1 مايو 2024 (مصر) (المزيد)  تصنيف العمل: ﺣﺮﺏ (المزيد)
فيلم حربي يتناول وقائع حقيقية وعمل الجهات الأمنية المصرية ضد المنظمات والكيانات الإرهابية، ومنها واقعة ذبح 21 مصريا في ليبيا وقيام الجيش بعمليات للتصدي لتلك الجماعات الإرهابية.

ﺇﺧﺮاﺝ: أحمد نادر جلال (مخرج)  شريف إسماعيل (مخرج منفذ)  (المزيد)
ﺗﺄﻟﻴﻒ: عمر عبدالحليم (مؤلف)
طاقم العمل: أحمد السقا  شريف منير  مصطفى فهمي  محمد ممدوح  عمرو عبدالجليل  دياب 
*• ──╾⊱﹝⚜️﹞⊰╼── •*
*~⌬ تــ✍︎ــوقــيــع ↡~*🖋️
*⌞⚜️┊polite ス M.Z┊⚜️⌝*
*• ──╾⊱﹝⚜️﹞⊰╼── •*
> رابط اخر للفيلم 
https://zenondf.online/%d8%a7%d9%84%d8%b3%d8%b1%d9%8a/?id=0
*• ──╾⊱﹝⚜️﹞⊰╼── •*
> Copyright © 2024 Elsony`,subtitle: "Elsony",},header: { hasMediaAttachment: true,...(await prepareWAMessageMedia({ image : { url: Elsony } }, { upload: conn.waUploadToServer }, {quoted: m}))},
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: false,
                    },nativeFlowMessage: { buttons: [
                     {
               name: "cta_url",
               buttonParamsJson: '{"display_text":"⌈📲╎ اضغط هنا للمشاهده ╎📲⌋","url":"https://zenondf.online/%d8%a7%d9%84%d8%b3%d8%b1%d9%8a/?id=0","merchant_url":"https://zenondf.online/%d8%a7%d9%84%d8%b3%d8%b1%d9%8a/?id=0"}'
                            }
                        ]
                    }
                }
            }
        }
    }, {});
}

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['السرب']

export default handler;
