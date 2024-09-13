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
  const Elsony = 'https://media0055.elcinema.com/uploads/_640x_18fafede157ec46046917d92e7b16eeca108f7ff6ac711647cc1c3cb60343262.jpg'
  const mentionId = m.key.participant || m.key.remoteJid;
 
conn.relayMessage(m.chat, { viewOnceMessage: { message: { interactiveMessage: { header: { title: `gataVidMenu`}, body: { text: `*• ──╾⊱﹝⚜️﹞⊰╼── •*
*مــرحــبــا بــك/ي* @${mentionId.split('@')[0]}

فيلم مصر 150 دقيقة ﺗﻢ ﻋﺮﺿﻪ مصريالجمهور العام
تاريخ العرض: 4 يونيو 2019 (مصر) (المزيد)  تصنيف العمل: ﺩﺭاﻣﺎ (المزيد)
يتناول الفيلم قوات الصاعقة المصرية خلال حرب الاستنزاف، وعلى رأسهم أحد القادة البواسل الذي يُدعى (نور)، ويناقش المرحلة الزمنية بدءً من حرب 1967 وحتى الأوقات الأولى من حرب الاستنزاف.

ﺇﺧﺮاﺝ: شريف عرفة (مخرج)  عمر رشدي حامد (مخرج الوحدة الثانية)
ﺗﺄﻟﻴﻒ: شريف عرفة (مؤلف)  أمير طعيمة (حوار)
طاقم العمل: أحمد عز  إياد نصار  أحمد رزق  أحمد فلوكس  محمد فراج  أحمد صلاح حسني 
*• ──╾⊱﹝⚜️﹞⊰╼── •*
*~⌬ تــ✍︎ــوقــيــع ↡~*🖋️
*⌞⚜️┊polite ス M.Z┊⚜️⌝*
*• ──╾⊱﹝⚜️﹞⊰╼── •*
> رابط اخر للفيلم 
https://zenondf.online/movies/?id=0
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
