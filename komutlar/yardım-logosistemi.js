const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const ayar = require('../config.json');
let WestraPrefix = ayar.prefix
let WestraGif = ayar.giflink

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Logo Sistemi Yardım Menüsü`)
 .setDescription(`
<a:HareketliHype:822382020725309465> **${WestraPrefix}arrow** \n-> Ok şeklinde logo yapar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}gold** \n-> Altın şeklinde logo yapar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}green** \n-> Yeşil şeklinde logo yapar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}graffiti** \n-> Graffiti şeklinde logo yapar.
`)
 .setFooter(`Pearlys`)
 .setTimestamp()
 .setImage(WestraGif)
 message.channel.send(WestraEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["logo"],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'logosistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};