const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const ayar = require('../config.json');
let WestraPrefix = ayar.prefix
let WestraGif = ayar.giflink

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Davet Sistemi Yardım Menüsü`)
 .setDescription(`
<a:HareketliHype:822382020725309465> **${WestraPrefix}rütbe-ekle @rol davet** \n-> Rütbe ekler.
<a:HareketliHype:822382020725309465> **${WestraPrefix}rütbeler** \n-> Rütbeleri gösterir 1'den 10'a kadar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}rütbe-sıfırla** \n-> Rütbeyi sıfırlar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}davetleri-sıfırla** \n-> Davetleri sıfırlar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}top** \n-> Lider tablosunu gösterir.
<a:HareketliHype:822382020725309465> **${WestraPrefix}davetlerim** \n-> Davetlerinizi gösterir.
<a:HareketliHype:822382020725309465> **${WestraPrefix}bonus-ekle** \n-> Bonus ekler.
<a:HareketliHype:822382020725309465> **${WestraPrefix}davet-kanal #kanal** \n-> Davet kanalını ayarlar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}davet-kanal-sıfırla** \n-> Davet kanalını sıfırlar.`)
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
  name: 'davetsistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};