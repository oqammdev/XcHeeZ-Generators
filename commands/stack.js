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
        let allMsgs = await client.channels.cache.get("812285030264602644").messages.fetch()
        if(!args[0]) args[0] = 10;
        if(args[0] > 100) args[0] = 100;
        if(args[0] < 1) args[0] = 1
        let number = parseInt(args[0])

        const ES = new MessageEmbed()
        .setDescription(`**Discord Nitro codes generated, check your DMs!**`)
        .setColor("GREEN")

        const EU = new MessageEmbed()
        .setDescription(`**I'm unable to send your Discord Nitro code, make sure your DMs are on!**`)
        .setColor("RED")
        const msg = await message.channel.send("**Generating Code...**")

        
        const embed = new MessageEmbed()
        .setTitle("Here are Your Codes")
        .setDescription(allMsgs.slice(0, number).map(m => m.content).join("/n"))
        .setColor("YELLOW")

        
        message.author.send(args[0] === "[e=false]" ? allMsgs.map(m => m.content).join("/n").slice(0, number):embed).then((x)=>{

            msg.edit("", ES)
        }).catch((err) =>{
            msg.edit("", EU)
        })


        

    }
}
