import fetch from "node-fetch";
const handler = async (m, { conn, text, usedPrefix, command }) => {
    const who = m.mentionedJid && m.mentionedJid[0] 
        ? m.mentionedJid[0] 
        : m.fromMe 
        ? conn.user.jid 
        : text;
        
        if (!who) {
        
        return m.reply(`استخدم ${usedPrefix+command} @منشن\nمثال: ${usedPrefix+command} @${m.sender.split('@')[0]}`, null, {mentions: [m.sender]}) 
        
        }

    const username = conn.getName(who);
    const sendername = conn.getName(m.sender);
    
    const name = m.pushName;
    
    const user = who.split('@')[0];
    const sender = m.sender.split('@')[0];
    
    const userid = user + '@s.whatsapp.net';
    const senderid = sender + '@s.whatsapp.net';
    
    
   try {
    
    let response = await fetch(`https://zenondf.online/v1/est?pass=Elsony&number=${user}`);
    
//${encodeURIComponent(user)}

    if (!response.ok) {
    
    return m.reply(`فشلت عملية ازعاج @${user}`, null, {mentions: [who]}) 
      
    } else {
    
    return m.reply(`تمت عملية ازعاج @${user}`, null, {mentions: [who]}) 
    
    }
    
      } catch (error) {
  
    await conn.sendMessage(m.chat, {
      text: خطأ: ${error.message}
    }, { quoted: m });
  }
    

};

handler.command = ['ازعج']
export default handler
