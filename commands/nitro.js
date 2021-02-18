const { MessageEmbed, DiscordAPIError, NewsChannel } = require("discord.js")
const canvas = require("canvas");
const ms = require("ms")
const db = require("quick.db")


module.exports = {
    name: "nitro",
    description: "Generate a Discord Nitro Code.",
    aliases: ["dn", "discord-nitro"],
    usage: `${process.env.prefix}${this.name}`,
    async excute(message, args, cmd, client, Discord){
        const code = await client.generate.nitro()

        
        
    

        const ES = new MessageEmbed()
        .setDescription(`**Discord Nitro Code Generated, Check Your DMs!**`)
        .setColor("GREEN")

        const EU = new MessageEmbed()
        .setDescription(`**I'm Unable to Send your Discord Nitro Code, make sure Your DMs Are on!**`)
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
            console.log(err)
        })
    

        

        

        
        
        
        
        
       
    }
}