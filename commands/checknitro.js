const { MessageEmbed, DiscordAPIError, Message } = require("discord.js")
const canvas = require("canvas");
const request = require("request")
var proxyURL = "";
var working = [];
const ms = require("ms")
var toMatch;


module.exports = {
    name: "checknitro",
    description: "Check a Discord Nitro Code.",
    aliases: ["cdn", "check-discord-nitro"],
    usage: `${process.env.prefix}${this.name}`,
    async excute(message, args, cmd, client, Discord){
        const code = args[0]
        

        if(!code) return message.channel.send("You need to specify a Nitro Code.")
        checkNitroCode(code, message)
        async function checkNitroCode(code = "", message = new Message()){
            const embed = new MessageEmbed()
            .setAuthor("Checking Nitro Code...")
            .setColor("YELLOW")

            let msg = await message.channel.send(embed)

            setTimeout(function(){
            
            var proxiedRequest = request.defaults({
                'proxy': proxyURL
            });
            proxiedRequest.timeout = 1500;
            proxiedRequest.get(`https://discordapp.com/api/v6/entitlements/gift-codes/${code}?with_application=false&with_subscription_plan=true`, (error, resp, body) => {
                if (error) {
                    const embedE = new MessageEmbed()
                    .setAuthor("Invaild proxy switching now...")
                    .setColor("RED")
                    msg.edit(embedE)
                    
                    return;
                }
                try {
                    if (body.code == 200) {
                        const embedS = new MessageEmbed()
                        .setAuthor("This Code Should Work unless an error is posted below!")
                        .setColor("GREEN")

                        msg.edit(embedS)
                        console.log(JSON.stringify(body, null, 4));
                        working.push(`https://discord.gift/${code}`);
                        fs.writeFileSync(__dirname + '/codes.json', JSON.stringify(working, null, 4));
                        if (toMatch === 0) {
                            process.exit();
                        } else {
                            //console.log("test")
                        }
        
                    } else {
                        const embedEE = new MessageEmbed()
                        .setAuthor("This Code is an invaild Code!")
                        .setColor("RED")
                        msg.edit(embedEE)
                    }
                } catch (error) {
                    
                    const embedEEE = new MessageEmbed()
                    .setAuthor("There is an Error!")
                    .setColor("RED")
                    msg.edit(embedEEE)
                    return;
                }
            });
        }, ms("5s"))
        
        }
    
    }
}