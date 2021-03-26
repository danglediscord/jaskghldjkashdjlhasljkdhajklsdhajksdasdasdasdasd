const Discord = require("discord.js")
const {MessageEmbed} = Discord
exports.run = async (client,message,args) =>{
  let yazı = args[0]
  if(!yazı) return message.channel.send(":red_square: Logo oluşturmak için bir yazı girmelisin.")
  let api = `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=graffiti-logo&text=${yazı}`
  const embed = new MessageEmbed()
  .setColor("BLUE")
  .setImage(api)
  message.channel.send(embed)
}
exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: [],
        permLevel: 0,
    kategori: "logo",
   
      };
      
    exports.help = {
        name: 'graffiti',
        description: '',
        usage: '',
   
    };