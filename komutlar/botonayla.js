const Discord = require('discord.js');
const db = require('quick.db');


module.exports.run = async (client, message, args) => {
  let kanal = await db.fetch(`westrabasvuruyapılacakkanal_${message.guild.id}`);
  let kanal2 = await db.fetch(`westrabasvurugidecekkanal_${message.guild.id}`);
  let kanal3 = await db.fetch(`westralogkanal_${message.guild.id}`);
  let westrabasvuruyapılacakkanal = await db.fetch(`westrabasvuruyapılacakkanal_${message.guild.id}`, kanal.id);
  let westrabasvurugidecekkanal = await db.fetch(`westrabasvurugidecekkanal_${message.guild.id}`, kanal2.id);
let westralogkanal = await db.fetch(`westralogkanal_${message.guild.id}`, kanal3.id);
 let westrabotlistyetkilisi = db.fetch(`westrabotlistyetkilirol_${message.guild.id}`)
   if(!message.member.roles.cache.has(westrabotlistyetkilisi)) return message.channel.send(`:red_square: Bu komutu kullanabilmen için <@&${westrabotlistyetkilisi}> adlı role sahip olman lazım!`)
	let botisim = args[0]
  let sahip = args[1]
	let log = westralogkanal //  Bot Eklendi / Onaylandı / Rededildi Kanalı
	
	if (!botisim) return message.channel.send(`:red_square: Botun ID'sini yazmalısın.`).then(x => x.delete({timeout: 3000}))
  	if (!sahip) return message.channel.send(`:red_square: Bot sahibinin ID'sini yazmalısın.`).then(x => x.delete({timeout: 3000}))
  message.delete()
   const westrabumbeyyyy = new Discord.MessageEmbed()
    .setColor(`GREEN`)
    .setFooter(`Pearlys`)
    .setTimestamp()
    .setDescription(`:green_square: <@${sahip}> adlı kişinin <@${botisim}> adlı botu onaylandı. Onaylayan yetkili: ${message.author}`)
		client.channels.cache.get(log).send(westrabumbeyyyy);
		message.channel.send(`:green_square: Botu onayladınız.`).then(x => x.delete({timeout: 3000}))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'botonayla', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'botreddet <bot ismi> - <sebep>'
};