"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "tempmail", reaction: "😌", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '*𝗙𝗔𝗥𝗢𝗢𝗤-𝗠𝗔𝗚𝗦𝗜* Temporary emails,Powered by *𝗙𝗔𝗥𝗢𝗢𝗤-𝗠𝗔𝗚𝗦𝗜* \n\n ' + "Click the link below to create unlimited TEMPORARY Emails. Powered by *🌠𝗙𝗔𝗥𝗢𝗢𝗤-𝗠𝗔𝗚𝗦𝗜🔥.*";
    let d = ' https://tempmailpro.app';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/a718e44767287446aec52.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *𝗙𝗔𝗥𝗢𝗢𝗤-𝗠𝗔𝗚𝗦𝗜* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *𝗙𝗔𝗥𝗢𝗢𝗤-𝗠𝗔𝗚𝗦𝗜*'
      let varmess=z+d
      var img='https://telegra.ph/file/a718e44767287446aec52.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
