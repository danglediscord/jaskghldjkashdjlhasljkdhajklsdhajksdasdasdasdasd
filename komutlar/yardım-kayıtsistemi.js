const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const ayar = require('../config.json');
let WestraPrefix = ayar.prefix
let WestraGif = ayar.giflink

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Kayıt Sistemi Yardım Menüsü`)
 .setDescription(`<a:HareketliHype:822382020725309465> **${WestraPrefix}alınacak-rol @rol** \n-> Kayıt edilen kişiden alınacak rolü ayarlar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}alınacak-rol sıfırla** \n-> Kayıt edilen kişiden alınacak rolü sıfırlar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}kayıt-kanal #kanal** \n-> Kayıtın yapılacağı kanalı belirlersiniz.
<a:HareketliHype:822382020725309465> **${WestraPrefix}kayıt-kanal sıfırla** \n-> Kayıtın yapılacağı kanalı sıfırlarsınız.
<a:HareketliHype:822382020725309465> **${WestraPrefix}kayıt-hg #kanal** \n-> Kayıt hoş geldin kanalını ayarlarsınız.
<a:HareketliHype:822382020725309465> **${WestraPrefix}kayıt-hg sıfırla** \n-> Kayıt hoş geldin kanalını sıfırlarsınız.
<a:HareketliHype:822382020725309465> **${WestraPrefix}kayıt-yetkili @rol** \n-> Kayıt edebilecek yetkiyi ayarlar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}kayıt-yetkili sıfırla** \n-> Kayıt edebilecek yetkiyi sıfırlar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}erkek-rol @rol** \n-> Kayıt edilince verilecek erkek rolü ayarlar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}erkek-rol sıfırla** \n-> Kayıt edilince verilecek erkek rolünü sıfırlar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}kız-rol @rol** \n-> Kayıt edilince verilecek kız rolü ayarlar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}kız-rol sıfırla** \n-> Kayıt edilince verilecek kız rolünü sıfırlar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}erkek @kullanıcı isim yaş** \n-> Erkekleri kayıt etmeye yarar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}kız @kullanıcı isim yaş** \n-> Kızları kayıt etmeye yarar.
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
  name: 'kayıtsistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};