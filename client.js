
require("dotenv").config()
const Discord = require("discord.js")
const term = require("terminal-kit").terminal;
require("colors")
function generateNitro(){
    let code = "";
    let dict = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (var i = 0; i < 16; i++) {
        code = code + dict.charAt(Math.floor(Math.random() * dict.length));
    }
    return code;


}



let client = new Discord.Client({ partials: ["MESSAGE"]})
client.generate = {
    nitro: generateNitro
}
client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.prefix = client.env.prefix;





['commands', 'events'].forEach(handler=>{
    require(`./handlers/${handler}`)(client, Discord)
});

client.login(process.env.token)



