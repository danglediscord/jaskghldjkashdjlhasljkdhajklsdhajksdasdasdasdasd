const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const ayar = require('../config.json');
let WestraPrefix = ayar.prefix
let WestraGif = ayar.giflink

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Bot List Sistemi Yardım Menüsü`)
 .setDescription(`
<a:HareketliHype:822382020725309465> **${WestraPrefix}başvuru-gidecek-kanal-ayarla #kanal** \n-> Başvuru gidecek kanalı ayarlar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}başvuru-gidecek-kanal-sıfırla** \n-> Başvuru gidecek kanalı sıfırlar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}başvuru-yapılacak-kanal-ayarla #kanal** \n-> Başvuru yapılacak kanalı ayarlar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}başvuru-yapılacak-kanal-sıfırla** \n-> Başvuru yapılacak kanalı sıfırlar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}başvuru-log-kanal-ayarla #kanal** \n-> Başvuru log kanal ayarlar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}başvuru-log-kanal-sıfırla** \n-> Başvuru log kanal sıfırlar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}botlist-yetkili-rol-ayarla @rol** \n-> Botlist yetkili rolü ayarlar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}botlist-yetkili-rol-sıfırla** \n-> Botlist yetkili rolü sıfırlar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}botekle botid prefix dblonay** \n-> Sisteme bot ekler.
<a:HareketliHype:822382020725309465> **${WestraPrefix}botkapalı botid sahipid** \n-> Botu kapalı olduğu nedeniyle reddeder.
<a:HareketliHype:822382020725309465> **${WestraPrefix}botonayla botid sahipid** \n-> Botu onaylar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}botreddet botid sahipid sebep** \n-> Botu reddeder.

__NOT:__ Eğer bütün ayarlamaları yapmazsanız sistem çalışmaz.
`)
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
  name: 'botlistsistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};