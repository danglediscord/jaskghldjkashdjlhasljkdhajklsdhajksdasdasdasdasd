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
  
  db.set(`üyelikk_${nesne}`, 'üyelik')
  
  message.channel.send(`:green_square: <@${nesne}> adlı kişinin gold üyeliğini başarıyla aktif ettim.`)
if (client.users.cache.get(''+nesne+'').send(`:yellow_square: \`Gold üyeliğiniz aktif edildi.\` :yellow_square:`)){
 
} else return
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['goldekle'],
  permLevel: 0
};
exports.help = {
  name: 'goldüyeekle',
  description: 'Gold üye ekler',
  usage: 'gold-üye-ekle'
};