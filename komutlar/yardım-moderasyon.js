const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const ayar = require('../config.json');
let WestraPrefix = ayar.prefix
let WestraGif = ayar.giflink

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Moderasyon Yardım Menüsü`)
 .setDescription(`
<a:HareketliHype:822382020725309465> **${WestraPrefix}mod-log #kanal** \n-> Mod-log ayarlar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}mod-log sıfırla** \n-> Mod-log sıfırlar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}bansay** \n-> Sunucuda kaç banlanan üye olduğunu gösterir.
<a:HareketliHype:822382020725309465> **${WestraPrefix}ban @kullanıcı** \n-> Etiketlediğiniz kullanıcıyı banlar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}küfürengel** \n-> Küfür engel açar/kapatır.
<a:HareketliHype:822382020725309465> **${WestraPrefix}küfürlog #kanal** \n-> Küfür-log ayarlar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}reklamengel** \n-> Reklam engel açar/kapatır.
<a:HareketliHype:822382020725309465> **${WestraPrefix}reklamlog #kanal** \n-> Reklam-log ayarlar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}sa-as aç** \n-> SA-AS sistemini açar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}sa-as kapat** \n-> SA-AS sistemini kapatır.
<a:HareketliHype:822382020725309465> **${WestraPrefix}sil** \n-> Yazdığınız miktar kadar mesaj siler.
<a:HareketliHype:822382020725309465> **${WestraPrefix}say** \n-> Sunucu bilgilerini gösterir.
<a:HareketliHype:822382020725309465> **${WestraPrefix}oylama** \n-> Oylama yapar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}otorol-ayarla @rol #kanal** \n-> Otorol ayarlar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}otorol-sıfırla** \n-> Otorol sıfırlar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}otorol-mesaj-ayarla** \n-> Otorol mesajı ayarlar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}otorol-mesaj-sıfırla** \n-> Otorol mesajı sıfırlar.
`)
 .setFooter(`Pearlys`)
 .setTimestamp()
 .setImage(WestraGif)
 message.channel.send(WestraEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mod'],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'moderasyon',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};