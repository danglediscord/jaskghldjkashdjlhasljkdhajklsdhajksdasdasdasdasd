const Discord = require('discord.js');
const   client = new Discord.Client();
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
const db = require('quick.db');
const ayar = require('../config.json');
let WestraGif = ayar.giflink

exports.run = async (client, message) => {
  let linkler = await db.fetch(`linkler`)
    const duration = moment.duration(client.uptime).format(" D [Gün], H [Saat], m [Dakika], s [Saniye]");
    const istatistikozel = new Discord.MessageEmbed()
    .setColor(0x36393F)
 .setTitle("Pearlys İstatistik")
  .addField("• Ekibimiz •", "<@"+ ayar.sahip +">", true)
  .addField("• Sürümler •", `Discord.JS: **${Discord.version}**\n Node.JS: **${process.version}**\n Discord.JS-commando: **v0.11.0-dev**`, true)
  .addField("• Vds Bilgileri •", `Ram: **8 GB**\n İşletim Sistemi: **${os.platform()}**\n İşlemci: **${os.cpus().map(i => `${i.model}`)[0]}**\n Bit: **${os.arch()}**`)
  .addField("• Kullanıcı Sayısı •", `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,true)//${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
  .addField("• Sunucu Sayısı •", `${client.guilds.cache.size}`,true) 
  .addField("• Kanal Sayısı •", `${client.channels.cache.size.toLocaleString()}`, true)
  .addField("• Shard •", `${message.guild.shardID+1}/${client.shard.count}`,true)//Bu sunucunun shardı: ${client.shard.id} | Shard sayısı: ${client.shard.count}
  .addField("• Ping •", `${client.ws.ping}`)
  .addField("• Kullanılan Ram Miktarı •", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(9)}`)
  .addField("• Uptime Süresi •", `${duration}`)
  .addField("• Komut Sayısı •", `${client.commands.size}`)
 .setImage(WestraGif)
     .setFooter(`Pearlys`)
 .setTimestamp()
    message.channel.send(istatistikozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik', 'i', 'istatistikler', 'botbilgi', 'bilgi', 'hakkında', 'bot hakkında', 'bothakkında'],
      kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};

