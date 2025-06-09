

const fetch = require('node-fetch');
const config = require('../settings');    
const { malvin } = require('../malvin');

malvin({
    pattern: "repo",
    alias: ["sc", "script"],
    desc: "Fetch information about a GitHub repository.",
    react: "🧬",
    category: "info",
    filename: __filename,
},
async (conn, mek, m, { from, reply }) => {
    const githubRepoURL = 'https://github.com/MALVIN-XD';

    try {
        // Extract username and repo name from the URL
        const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);

        // Fetch repository details using GitHub API
        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
        
        if (!response.ok) {
            throw new Error(`GitHub API request failed with status ${response.status}`);
        }

        const repoData = await response.json();

        // Format the repository information
        const formattedInfo = `
    🚀 ᴍᴀʟᴠɪɴ xᴅ ʀᴇᴘᴏ ɪɴғᴏ 🚀

╭──────────────━⊷
┇🤖 *ɴᴀᴍᴇ:* ${repoData.name}
┇⭐ *ᴛᴏᴛᴀʟ sᴛᴀʀs:* ${repoData.stargazers_count}
┇👥️ *ғᴏʀᴋs:* ${repoData.forks_count}
┇👀 *ᴡᴀᴛᴄʜᴇʀs:* ${repoData.watchers_count}
┇👤 *ᴏᴡɴᴇʀ:* ᴍᴀʟᴠɪɴ ᴋɪɴɢ
┇🪀 *ᴅᴇsᴄʀɪᴘᴛɪᴏɴ:* ${repoData.description || 'No description available'}
╰──────────────━⊷
> 🌟 Star & 🍴 Fork the repo for more updates!

┋ ʀᴇᴘᴏ ʟɪɴᴋ: ${repoData.html_url}
╰──────────────━⊷
`;

        // Send an image with the formatted info as a caption and context info
        await conn.sendMessage(from, {
            image: { url: `https://files.catbox.moe/qumhu4.jpg` },
            caption: formattedInfo,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363400240662312@newsletter',
                    newsletterName: 'ᴍᴀʟᴠɪɴ xᴅ ʀᴇᴘᴏ',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });
        
//send audio        
await conn.sendMessage(from, {
            audio: fs.readFileSync('./autos/hello.m4a'),
                    mimetype: 'audio/mp4',
                    ptt: true,
                }, { quoted: mek });
    } catch (error) {
        console.error("❌ Error in repo command:", error);
        reply("⚠️ Sorry, something went wrong while fetching the repository information. Please try again later.");
    }
});
