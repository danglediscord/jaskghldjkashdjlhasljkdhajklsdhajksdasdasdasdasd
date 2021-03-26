const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
exports.run = (client, message) => {
  const WestraEmbed = new WestraDiscord.MessageEmbed();
  WestraEmbed.setColor(0x36393F)
  WestraEmbed.setDescription(`:green_square: Pearlys'i davet etmek için [buraya](SSS) tıkla!`)
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
  name: 'davet',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};