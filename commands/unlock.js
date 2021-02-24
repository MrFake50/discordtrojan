const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
  message.delete();
  const key = "458104"
  if(!key === "458104") {
    return message.reply("A Chave que voce digitou esta invalida!")
  }
message.channel.overwritePermissions([{
     id: message.guild.id,
     allow: ['SEND_MESSAGES'],
     }]);
     return message.author.send("Chat Desbloqueado!")
    }