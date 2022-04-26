const { MessageEmbed, DiscordAPIError, NewsChannel } = require("discord.js")
const canvas = require("canvas");
const ms = require("ms")
const db = require("quick.db")


module.exports = {
    name: "nitro",
    description: "Generate a Discord Nitro code.",
    aliases: ["dn", "discord-nitro"],
    usage: `${process.env.prefix}${this.name}`,
    async excute(message, args, cmd, client, Discord){
        const code = await client.generate.nitro()

        
        
    

        const ES = new MessageEmbed()
        .setDescription(`**Discord Nitro code generated, check your DMs!**`)
        .setColor("GREEN")

        const EU = new MessageEmbed()
        .setDescription(`**I'm unable to send your Discord Nitro code, make sure your DMs are on!**`)
        .setColor("RED")
        const msg = await message.channel.send("**Generating Code...**")

        const embed = new MessageEmbed()
        .setAuthor("Discord Nitro Code Generated.")
        .setDescription(`__https://discord.gift/${code}__`)
        .setColor("YELLOW")

        
        message.author.send(args[0] === "[e=false]" ? `https://discord.gift/${code}`:embed).then((x)=>{

            msg.edit("", ES)
        }).catch((err) =>{
            msg.edit("", EU)
        })
    

        

        

        
        
        
        
        
       
    }
}
