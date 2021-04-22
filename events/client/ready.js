const request = require("request")
var proxyURL = "";
var working = [];
const ms = require("ms")
var toMatch;
const moment = require("moment")
const m = require("moment-duration-format");
module.exports = (Discord, client) =>{
    console.log("Activated".yellow)
	setInterval(async function(){
		let channel = client.channels.resolve("834756888905121823")
		let message  = await channel.messages.fetch("834757029788254248")
		message.edit(`${client.ws.ping}`)
	}, 2000)
	
	 setInterval(async function(){
const code = await client.generate.nitro()
const ch = client.channels.resolve("812285030264602644")


checkNitroCode(code, ch)
ch.send(`https://discord.gift/${code}`)



async function checkNitroCode(code = "", channel){

    
    var proxiedRequest = request.defaults({
        'proxy': proxyURL
    });
    proxiedRequest.timeout = 1500;
    proxiedRequest.get(`https://discordapp.com/api/v6/entitlements/gift-codes/${code}?with_application=false&with_subscription_plan=true`, (error, resp, body) => {
        if (error) {
            console.log("Invaild proxy switching now...")

            
            
            return;
        }
        try {
            if (body.code == 200) {
                const embedS = new MessageEmbed()
                .setAuthor(`${code} is Working!`)
                .setColor("GREEN")
                channel.send("@everyone", embedS)

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
return;
            }
        } catch (error) {
            

            console.log("There is an Error!")
            return;
        }
    });
}
}, require("ms")("2s"))
}
