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
  await conn.sendMessage(m.chat, { react: { text: '🎬', key: m.key } })
  const Elsony = 'https://file.rafalnht.com/0f25bc0ee7b9c9b198074b61a75c7378.photo.jpg'
  const mentionId = m.key.participant || m.key.remoteJid;
 
conn.relayMessage(m.chat, { viewOnceMessage: { message: { interactiveMessage: { header: { title: `gataVidMenu`}, body: { text: `*• ──╾⊱﹝⚜️﹞⊰╼── •*
*مــرحــبــا بــك/ي* @${mentionId.split('@')[0]}
*• ──╾⊱﹝⚜️﹞⊰╼── •*
هنا تسطيع مشاهده الافلام عبر بوت زينون

> اختر من القائمه الفيلم الذي تريده

> الافلام المتاحه 👇
*• ──╾⊱﹝⚜️﹞⊰╼── •*
*~⌬ تــ✍︎ــوقــيــع ↡~*🖋️
*⌞⚜️┊polite ス M.Z┊⚜️⌝*
*• ──╾⊱﹝⚜️﹞⊰╼── •*
> Copyright © 2024 Elsony`,subtitle: "Elsony",},header: { hasMediaAttachment: true,...(await prepareWAMessageMedia({ image : { url: Elsony } }, { upload: conn.waUploadToServer }, {quoted: m}))},
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: false,
                    },nativeFlowMessage: { buttons: [


                            {
                                name: 'single_select',
                                buttonParamsJson: JSON.stringify({
                                    title: '⌈🛡╎الــقــوائـــم╎🛡⌋',
                                    sections: [
                                        {
                                            title: 'مــرحـ🛡ـبــا بــك فـي قسم افلام زينون بـ🤖ـوت',
                                            highlight_label: 'استمتع براحتك يابرو 🤖',
                                            rows: [  

                                                {
                                                    header: '🎬 فيلم السرب 🎬',
                                                    title: 'اثاره وتشويه عسكري',
                                                    description: 'فيلم حربي يتناول وقائع حقيقية وعمل الجهات الأمنية المصرية ضد المنظمات والكيانات الإرهابية، ومنها واقعة ذبح 21 مصريا في ليبيا وقيام الجيش بعمليات للتصدي لتلك الجماعات الإرهابية.',
                                                    id: '.السرب'
                                                },
                                                                                                {
                                                    header: '🎬 فيلم المرحوم 🎬',
                                                    title: 'رعب',
                                                    description: 'یصور متاعب عائلة بعد الوفاة المفاجىء لوالدهم، حيث يسكن أعضاء هذه العائلة في ضواحي المدينة في حالة مادية ضعيفة إذ يعتاش جميع هم على بيع الخضروات.. والآن وبعد وفاة الوالد تقبل عليهم مصائب أخرى..',
                                                    id: '.المرحوم'
                                                },
                                                                                                {
                                                    header: '🎬 فيلم ولاد رزق 🎬',
                                                    title: 'فيلم دراما',
                                                    description: ' في هذا الجزء، وبعد مرور سنوات وانفصال الأخوة في طرقهم الحياتية المختلفة. لكن في يوم من الأيام، يعود شبح من الماضي ليلقي بظلاله على ولاد رزق، مما يجبرهم على العودة إلى حياة الجريمة والسرقة مرة أخرى حتى ينجوا بأنفسهم، في عملية مصيرية هي الأكبر والأخطر والأهم في تاريخ ولاد رزق.',
                                                    id: '.ولاد رزق'
                                                },
                                                {
                                                {
                                                    header: '🎬 فيلم الممر 🎬',
                                                    title: 'اثاره وتشويق عسكري',
                                                    description: '',
                                                    id: '.الممر'
                                               }
                                            ]
                                        }
                                    ]
                                }),
                  messageParamsJson: ''
                },
                {
               name: "cta_url",
               buttonParamsJson: '{"display_text":"⌈📲╎لطلب فيلم معين تريد اضافته ف البوت╎📲⌋","url":"https://chat.whatsapp.com/HlPlpCCbFq3DZg2qFO4odi","merchant_url":"https://chat.whatsapp.com/HlPlpCCbFq3DZg2qFO4odi"}'
                            }
                        ]
                    }
                }
            }
        }
    }, {});
}

handler.help = ['الافلام'];
handler.tags = ['main'];
handler.command = ['الافلام']

export default handler;
