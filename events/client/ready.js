module.exports = (Discord, client) =>{
    console.log("Activated".yellow)
setInterval(async function(){
const code = await client.generate.nitro()
client.channels.resolve("812285030264602644").send(`https://discord.gift/${code}`)
}, 1)
}