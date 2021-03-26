const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const ayar = require('../config.json');
let WestraPrefix = ayar.prefix
let WestraGif = ayar.giflink

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Kullanıcı Yardım Menüsü`)
 .setDescription(`
<a:HareketliHype:822382020725309465> **${WestraPrefix}davet** \n-> Botu davet edersiniz.
<a:HareketliHype:822382020725309465> **${WestraPrefix}shardbilgi** \n-> Botun shard bilgilerini gösterir.
<a:HareketliHype:822382020725309465> **${WestraPrefix}pp** \n-> Etiketlediğiniz kişinin avatarını gösterir.
<a:HareketliHype:822382020725309465> **${WestraPrefix}randompp** \n-> Botun ekli olduğu sunuculardaki her hangi birinin avatarını atar.
<a:HareketliHype:822382020725309465> **${WestraPrefix}öneri** \n-> Bota öneri belirtirsiniz.
<a:HareketliHype:822382020725309465> **${WestraPrefix}istatistik** \n-> Botun istatistiğini gösterir.
<a:HareketliHype:822382020725309465> **${WestraPrefix}sonmesaj** \n-> Yazdığınız son mesajı gösterir.
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
  name: 'kullanıcı',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};