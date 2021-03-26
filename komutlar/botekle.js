const Discord = require('discord.js');
const db = require('quick.db');


module.exports.run = async (client, message, args) => {
  let kanal = await db.fetch(`westrabasvuruyapılacakkanal_${message.guild.id}`);
  let kanal2 = await db.fetch(`westrabasvurugidecekkanal_${message.guild.id}`);
  let kanal3 = await db.fetch(`westralogkanal_${message.guild.id}`);
  let westrabasvuruyapılacakkanal = await db.fetch(`westrabasvuruyapılacakkanal_${message.guild.id}`, kanal.id);
  let westrabasvurugidecekkanal = await db.fetch(`westrabasvurugidecekkanal_${message.guild.id}`, kanal2.id);
let westralogkanal = await db.fetch(`westralogkanal_${message.guild.id}`, kanal3.id);

	let botid = args[0]
	let prefix = args[1]
  let onaylımı = args[2]
  let basvuru = westrabasvurugidecekkanal
	let kanald = westrabasvuruyapılacakkanal 
  let log = westralogkanal 
	
  if (message.channel.id !== kanald) return message.channel.send(`:red_square: Bu komutu sadece <#${kanald}> kanalında kullanabilirsin.`).then(x => x.delete({timeout: 3000}))
	if (message.channel.id == kanald) {
  if (!botid) return message.channel.send(`:red_square: Botunun ID'sini yazmalısın.`).then(x => x.delete({timeout: 3000}))
  if (!prefix) return message.channel.send(`:red_square: Botunun prefixini yazmalısın.`).then(x => x.delete({timeout: 3000}))
  if (!onaylımı) return message.channel.send(`:red_square: Botunun DBL onaylı olup olmadığını yazmalısın.`).then(x => x.delete({timeout: 3000}))
  message.delete()
  const embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setDescription(`[Ekle](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0)`, true)
  .setTitle("Bot Ekletme")
  .addField("Bot Sahibi:", message.author.tag)
  .addField("Bot ID:", botid)
  .addField("Bot Prefix:", prefix)
  .addField("Bot Onaylı mı?", onaylımı)
  client.channels.cache.get(basvuru).send(embed)
    const westrabumbeyyyy = new Discord.MessageEmbed()
    .setColor(`BLUE`)
    .setFooter(`Pearlys`)
    .setTimestamp()
    .setDescription(`:black_large_square: ${message.author} adlı kullanıcının <@${botid}> adlı botu sıraya eklendi. Botu onaylanmayı bekliyor.`)
  client.channels.cache.get(log).send(westrabumbeyyyy)
  message.channel.send(`:green_square: Bot ekleme isteğiniz alındı.`).then(x => x.delete({timeout: 3000}))
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'botekle', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'botreddet <bot ismi> - <sebep>'
};