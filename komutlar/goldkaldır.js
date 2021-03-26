const db = require('quick.db')
const fs = require('fs')
const Discord = require('discord.js')
const ayar = require('../config.json')

const client = new Discord.Client();
exports.run = async (client, message, args) => {
  if(message.author.id !== ayar.sahip) if(message.author.id !== ayar.sahip) return message.channel.send("Bu Komutu Kullanamazsın!");
  
  let user = client.users.cache.get(args.slice(0).join(' '));
  let nesne = args[0]
  if (!nesne) return message.channel.send('id belirt moruq')
  
  db.delete(`üyelikk_${nesne}`, 'üyelik')
  
  message.channel.send(`:red_square: <@${nesne}> adlı kişinin gold üyeliğini başarıyla kaldırdım.`)
if (client.users.cache.get(''+nesne+'').send(`:red_square: \`Gold üyeliğiniz kaldırıldı.\` :red_square:`)){
 
} else return
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['goldkaldır', 'gold-kaldır'],
  permLevel: 0
};
exports.help = {
  name: 'goldüyekaldır',
  description: 'Gold üye ekler',
  usage: 'gold-üye-ekle'
};