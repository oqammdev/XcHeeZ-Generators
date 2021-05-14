const { MessageEmbed, DiscordAPIError, NewsChannel } = require("discord.js")
const canvas = require("canvas");
const ms = require("ms")
const db = require("quick.db")


module.exports = {
    name: "stack",
    description: "Generate a Stack of Discord Nitro Codes.",
    aliases: [],
    usage: `${process.env.prefix}${this.name}`,
    async excute(message, args, cmd, client, Discord){
        const dfa = require("discord-fetch-all")
        let allMsgs = await dfa.messages(client.channels.resolve("812285030264602644"))
        if(!args[0]) args[0] = 10;
        if(args[0] > 100) args[0] = 100;
        if(args[0] < 1) args[0] = 1
        let number = parseInt(args[0])

        const ES = new MessageEmbed()
        .setDescription(`**Discord Nitro Codes Generated, Check Your DMs!**`)
        .setColor("GREEN")

        const EU = new MessageEmbed()
        .setDescription(`**I'm Unable to Send your Discord Nitro Code, make sure Your DMs Are on!**`)
        .setColor("RED")
        const msg = await message.channel.send("**Generating Code...**")

        
        const embed = new MessageEmbed()
        .setTitle("Here are Your Codes")
        .setDescription(allMsgs.map(m => m.content).join("/n").slice(0, number))
        .setColor("YELLOW")

        
        message.author.send(args[0] === "[e=false]" ? allMsgs.map(m => m.content).join("/n").slice(0, number):embed).then((x)=>{

            msg.edit("", ES)
        }).catch((err) =>{
            msg.edit("", EU)
            console.log(err)
        })


        

    }
}