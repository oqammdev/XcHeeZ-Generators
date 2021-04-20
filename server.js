const app = require('express')();
function generateNitro(){
    let code = "";
    let dict = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (var i = 0; i < 16; i++) {
        code = code + dict.charAt(Math.floor(Math.random() * dict.length));
    }
    return code;


}

app.get("/", async (request, response) =>{
let code = await generateNitro()
response.send(code)
})

app.listen(process.env.PORT, ()=>{
    console.log("listening")
})
