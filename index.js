const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");


    client.on("message", async message => {  
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;
        if (!message.content.startsWith(config.prefix)) return;
        let args = message.content.split(" ").slice(1);
        let command = message.content.split(" ")[0];
        command = command.slice(config.prefix.length);
        try {
          let commandFile = require(`./commands/${command}.js`);
          delete require.cache[require.resolve(`./commands/${command}.js`)];
          return commandFile.run(client, message, args);
        } catch (err) {
          console.error("Erro:" + err);
        }
      
      });

client.on("ready", async message => {
  
  console.log(`
  
  ______________
< COW DESCRUCT V4 STARTED  >
 --------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
`)
})

client.login(process.env.TOKEN);