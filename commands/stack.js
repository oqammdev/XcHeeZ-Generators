const { MessageEmbed, DiscordAPIError, NewsChannel } = require("discord.js")
const canvas = require("canvas");
const ms = require("ms")
const db = require("quick.db")


module.exports = {
    name: "stack",
    description: "Generate a Stack of discord Nitros.",
    aliases: [],
    usage: `${process.env.prefix}${this.name}`,
    async excute(message, args, cmd, client, Discord){
        let messages = [];
        let lastID;
        let number;
        if(!args[0]) args[0] = 10;
        if(!parseInt(args[0]) args[0] = 10;
        if(parseInt(args[0]) > 100) args[0] = 100;
        number = parseInt(args[0]);
        const channel = client.channels.resolve("812285030264602644")
                const fetchedMessages = await channel.messages.fetch({
            limit: 100,
            ...(lastID && { before: lastID }),
        });
      
      if (fetchedMessages.size === 0) {
        messages = messages.filter(msg => msg.author.bot).slice(0, number);
        return messages;
      }
        messages = messages.concat(Array.from(fetchedMessages.values()));
        lastID = fetchedMessages.lastKey();
      
      let embed = new MessageEmbed()
      .setDescription(messages.map(m => m.content).join("\n").slice(0, number)
      .setColor("BLUE")
                      message.channel.send(embed)
      
        }
}
