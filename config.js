const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID || 'SUPUN-MD=CMlDgYhS#mAgQ331f3uscwoM7B_AMoV3ExK1Bi9zi37shbBrv6FM', //add your session id
MONGODB: process.env.MONGODB || "mongodb+srv://kavindachamith13:20060705@cluster0.gcank.mongodb.net", //add your mongodb url
 URL : process.env.BOT_MENU_LINKS || 'https://i.ibb.co/bHXBV08/9242c844b83f7bf9.jpg',
MAX_SIZE: 500
};

