"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "repo", reaction: "😌", nomFichier: __filename }, async (dest, zk, commandeOptions) => {


const githubRepo = 'https://api.github.com/repos/franceking1/Flash-Md';
const img = 'https://telegra.ph/file/f1f2303ff4e39b0a3b6b3.jpg';


    const response = await fetch(githubRepo); 
        const data = await response.json(); 

        if (data) {
            const repoInfo = {
                stars: data.stargazers_count,
                forks: data.forks_count,
                lastUpdate: data.updated_at,
                owner: data.owner.login
            };
const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
            const lastUpdateDate = new Date(repoInfo.lastUpdate).toLocaleDateString('en-GB');

const gitdata = `This is * 🌟𝐅𝐀𝐑𝐎𝐎𝐐-𝐌𝐀𝐆𝐒𝐈🌟* 🐐🔵
*Repository:* ${data.html_url}
✨ *STARS:* ${repoInfo.stars}
🧧 *FORKS:* ${repoInfo.forks}
📅 *RELEASED ON:* ${releaseDate}
🕐 *LAST UPDATED:* ${lastUpdateDate}
👨‍💻 *OWNER:* * 🌟𝐅𝐀𝐑𝐎𝐎𝐐-𝐌𝐀𝐆𝐒𝐈🌟*`;


await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });

} else {
console.log("Could not fetch data")

}


});

   /* let z = 'Hello This is  * 🌟𝐅𝐀𝐑𝐎𝐎𝐐-𝐌𝐀𝐆𝐒𝐈🌟* \n\n ' + "The Following is * 🌟𝐅𝐀𝐑𝐎𝐎𝐐-𝐌𝐀𝐆𝐒𝐈🌟 Repo.*";
    let d = ' https://github.com/farooqo43/ 🌟𝐅𝐀𝐑𝐎𝐎𝐐-𝐌𝐀𝐆𝐒𝐈🌟';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/a718e44767287446aec52.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");*/
