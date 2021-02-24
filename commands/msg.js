const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
  const msg = new Discord.MessageEmbed()
  .setTitle("Os Piratas De Fake")
  .setThumbnail("https://cdn.discordapp.com/icons/813631628605521943/55dcb30c0b42e0d2e37a637aceb77d57.webp")
  .setDescription("Bot Developer: Fake#1737")
  .addField("to unlock the server, talk to the bot manufacturer Fake#1737 \n Traduçao: para desbloquear o servidor, fale com o fabricante do bot Fake#1737")
  .setColor("BLACK")
  message.channel.send(msg)
  }