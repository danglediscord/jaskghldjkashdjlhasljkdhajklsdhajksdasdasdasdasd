const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const ayar = require('../config.json');
let WestraPrefix = ayar.prefix
let WestraGif = ayar.giflink

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Koruma Sistemi Yardım Menüsü`)
 .setDescription(`
<a:HareketliHype:822382020725309465> **${WestraPrefix}ban-koruma #kanal** \n-> Ban koruma sistemini açar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}ban-koruma-sıfırla** \n-> Ban koruma sistemini sıfırlar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}kanal-koruma #kanal** \n-> Kanal koruma sistemini açar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}kanal-koruma-sıfırla** \n-> Kanal koruma sistemini sıfırlar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}rol-koruma #kanal** \n-> Rol koruma sistemini açar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}rol-koruma-sıfırla** \n-> Rol koruma sistemini sıfırlar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}spam-koruma** \n-> Spam koruma sistemini açar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}spam-koruma-kapat** \n-> Spam koruma sistemini kapatır.`)
 .setFooter(`Pearlys`)
 .setTimestamp()
 .setImage(WestraGif)
 message.channel.send(WestraEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'korumasistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};