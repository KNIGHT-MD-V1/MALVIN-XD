const { malvin, commands } = require('../malvin');

malvin({
    pattern: "owner",
    alias: ["developer", "dev"],
    desc: "Displays the developer info",
    category: "owner",
    react: "👨‍💻",
    filename: __filename
}, async (conn, mek, m, {
    from, reply, pushname
}) => {
    try {
        const name = pushname || "there";

        const text = `
╭─⌈ *𝗠𝗔𝗟𝗩𝗜𝗡-𝗫𝗗 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥* ⌋──
│
│ 👋 Hello *${name}*,
│
│ 🤖 I’m *𝙈𝘼𝙇𝙑𝙄𝙉-𝙓𝘿 own*, a multi-functional
│    WhatsApp Bot built to assist you!
│
│ 👨‍💻 *OWNER DETAILS:*
│ ───────────────
│ 🧠 *Name* : Malvin King
│ 🕯️ *Age* : +18
│ ☎️ *Contact* : wa.me/+94771825193
│ ▶️ *YouTube* : Malvin King Tech
│    https://youtube.com/
│
│ ⚡ Powered by *Malvin King*
│
╰───────────────
        `.trim();

        await conn.sendMessage(
            from,
            {
                image: { url: 'https://files.catbox.moe/vfv7n6.jpg' },
                caption: text,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363400240662312@newsletter',
                        newsletterName: '🪀『 𝙼𝙰𝙇𝚅𝙸𝙽-𝚇𝙳 』🪀',
                        serverMessageId: 143
                    },
                    externalAdReply: {
                        title: "Malvin-XD Bot",
                        body: "Created with love by Malvin King",
                        thumbnailUrl: 'https://files.catbox.moe/vfv7n6.jpg',
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        showAdAttribution: true,
                        mediaUrl: "https://youtube.com/@malvintech2",
                        sourceUrl: "https://youtube.com/@malvintech2"
                    }
                }
            },
            { quoted: mek }
        );
    } catch (e) {
        console.error("Error in .dev command:", e);
        reply(`❌ Error: ${e.message}`);
    }
});
