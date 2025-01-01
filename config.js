const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VVW5OiOBj9L3mVHrkoXqq6alFQEBFp8YJb8xAgYOQSJPECXf73LbS7eh52Znt5SoXk5OSc8315BznBFJmoAsN3UJT4AhlqhqwqEBiC0TmKUAk4EEIGwRBQW19rsaNrZYa3zu7CRtd+y5lTRypIZz2nu+PcPiWdkkreK7hzoDj7KQ7+AAgXi/khqSY2Sfu34A05k67Aip7u+fn8KiBI1Vp1rY0aO84ruDeIEJc4j7XigDJUwtRE1RLi8nv05aV/ybL0qKpbftRe4gLOPGMcGsZAVa19rhhGXVxvycaTjO/RD8rVkTdmdLrzR5GhejQU112125sEizrbkHk9dqfQl6+yRJ70KY5zFBohyhlm1bd179tyxrw0DwLBUwO+EOVwsi8saSEZtrwLqh4Wj4fWenbcxt8jnlit0d5Ge6YPFJ9P0IlmjqiKXelETeesm7DrumbgHXmh/yvxZfmZleT/6J5YreuUibtpAkkan5FPjKm3P7Tkefss1kXkzbxZfpnmB63/PfqovznG3VMbK0HmvcXr5FhE1ejoZptbalcyjcbVJpBX246efNGH7Fz+iWV907f8xRzk0f4osL0bMWl7Dub6lYQnhPnwrVVvHQ/vbidVa8uzlmUiUi9nORP1NmkpZiSFLnH3pSqfiDdA0G0P5iPl9XGjBFVGCIbCnQMlijFlJWSY5I+5jsABGF5WKCgRe8gLWqlPvfKymgne7ri3o7dbfcvaZAuPF7++LrZwdD3dvC1/yrRXwIGiJAGiFIU6poyUlYUohTGiYPj3Tw7k6MaexjXHSQIHIlxSts7PRUpg+Onq508YBOScs1WVB+NmgEow5L+mEWM4j2mj4zmHZXDAFzQ+QEbBMIIpRXcOhOiCA9TgASt/MaXgsnDiKVrYfSs/8SxWGsoHkj+X9CNREuS++BL6kfTSEWT0Avlu+CL5vUEIJVmAAgIcwB810+z5rYUb5OzLIqg1uZpe5+N+PUsLf53blfcM1lN7VKIQDFl5RhzwYZCcC5ckKP8Drja1Wb9LVOK2Mto2u6JKXJNWvI6TX3CfnoLh+1efGpOwwTOXM7frmR7gQPaIIG5uLkqdvtDp8YIgy8JQkP+iP66NkrAofuSIAQ7ksFkOrJQ2p3xY0OwPEYM4pWAIxnYtXk2qa6bOC3M6nSparIwfGn9a9pn9Z7Z8q5ycyerCokJvGUbSoqN1kFw9K7Ive0OgbTgqxsY1x4f167+ANE2b1LKxtW1PzW77kzlZj8LbWckOSrtrHdtWzK+UQY8ojrzYe6O9SHI3tb2LrW5qtTiT6c7xriXreq2SZgS2jJWvjBOlKZTP6Px62EwarDQxcY6SxxBkbLM5LMuVXU4mfQfiXrJdFNqtntSrWmvrM7LcVOI26fg9nS5EzYhCF66PeD7d6pO8s7wYt5kfeGPnWZWPrpB+dGP8qJf3j6BFGD2a24cD/23VV+j5O/cLyEe//E2wRtvavPknrezt5Lc2Hs+WpbLRZ9ZU1etSXC38pRhDB1uzDtmA+/0nB4oUsoiUWfMaZz4EHEghZcpX0bo4Q5TBrABDoSd1e1K33+1wIKuUolgxyD5rHSjNtzxp4P4PVaia7wcIAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Draken",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " 2348147011661",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'Bot11',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'no',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'no',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

