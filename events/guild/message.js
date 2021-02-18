const { MessageEmbed } = require("discord.js");
const term = require("terminal-kit").terminal;

require("dotenv").config();



module.exports = (Discord, client, message) =>{

    
    
    

    
    
    

    if(
        !message.guild
        || message.content.indexOf(process.env.prefix) !==0
        || message.author.bot
    ) return;



    const args = message.content.slice(process.env.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) ||
    client.commands.find(a => a.aliases && a.aliases.includes(cmd));
    if(!command) return;

    try{
        command.excute(message, args, cmd, client, Discord);
    } catch(err) {
        const embed = new MessageEmbed()
        .setColor("RED")
        .setDescription("There was an Error trying to excute this command.")

        message.channel.send(embed)
        
        console.log(err)
    }
}
