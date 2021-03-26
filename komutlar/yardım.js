const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')

const ayar = require('../config.json');
let WestraGif = ayar.giflink

exports.run = (client, message, args, member) => {
  
const yardım = new Discord.MessageEmbed()
  .setAuthor(`Pearlys Yardım Menüsü`, client.user.avatarURL())
  .setColor("0x36393F")
  .setThumbnail(client.user.avatarURL())
  .setDescription(`• Hey! <@${message.author.id}> beni kullandığın için teşekkür ederim!\n •  Prefixim: **p!**\n • Dilim: **TR** :flag_tr:\n • Üyelik durumu: ${db.has(`üyelikk_${message.author.id}`, "üyelik") ? `**Gold üye!**` : `**Normal üye!**`}`)
  .addField(" • Kategoriler:", `> • [p!kullanıcı](DESTEK): **Kullanıcı yardım menüsünü gösterir.**\n > • [p!moderasyon](DESTEK): **Moderasyon yardım menüsünü gösterir.**\n > • [p!davetsistemi](DESTEK): ** Davet sistemi yardım menüsünü gösterir.**\n > • [p!kayıtsistemi](DESTEK): ** Kayıt sistemi yardım menüsünü gösterir.**\n > • [p!korumasistemi](DESTEK): ** Koruma sistemi yardım menüsünü gösterir.**\n > • [p!logosistemi](DESTEK): ** Logo sistemi yardım menüsünü gösterir.**\n > • [p!botlistsistemi](DESTEK): ** Bot list sistemi yardım menüsünü gösterir.**\n > • [p!çekilişsistemi](DESTEK): ** Çekiliş sistemi yardım menüsünü gösterir.**`)
  .addField(" • Güncelleme Notları:", "YOK")
  //.addField("• Sponsor:", `• Bize sponsor olan **Önem Bilişim**'e teşekkür ederiz! [Sunucu](https://discord.gg/FNnUg6z) • [Site](https://www.onembilisim.com/)`)
  .addField(" • Linkler:", "• [Davet Et](BOTİD) • [Destek Sunucusu](DESTEK) • [Web Site](WEBSİTE) •")
  .setImage(WestraGif)
.setFooter("Pearlys", message.author.avatarURL())
.setTimestamp()
  message.channel.send(yardım)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["y", "help", "h"],
    permLevel: 0
}

exports.help = {
    name: "yardım",
    description: "westra",
    usage: "westra"
}