const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

let kanal = db.fetch(`kayıtkanal_${message.guild.id}`)
let alınacakrol = db.fetch(`alınacakrol_${message.guild.id}`)
let erkekrol = db.fetch(`erkekrol_${message.guild.id}`)
let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`)

 
if(!message.member.roles.cache.has(kayıtçı)) return message.channel.send(`:red_square: Bu komudu kullanabilmen için <@&${kayıtçı}> adlı role sahip olman lazım!`)
if(message.channel.id !== kanal) return message.channel.send(`:red_square: Bu komudu sadece <#${kanal}> adlı kanalda kullanabilirsin!`)
if (!erkekrol) return message.channel.send(`:red_square: Sunucuda erkek rolü ayarlanmadığı için komut kullanılamaz!`)


let member = message.mentions.members.first();
if (!member) return message.channel.send(`:red_square: Erkek olarak kayıt edeceğin kullanıcıyı belirtmelisin!`)
let isim = args[1]
if (!isim) return message.channel.send(`:red_square: İsmini belirtmelisin!`)
let yaş = args[2]
if (!yaş) return message.channel.send(`:red_square: Yaşını belirtmelisin!`)
member.setNickname(`${isim} | ${yaş}`)
member.roles.remove(alınacakrol)
member.roles.add(erkekrol)

const başarılı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Erkek Kayıt`)
.setColor(0x36393F)
.setDescription(`:green_square: Erkek olarak kayıt edilen kullanıcı: ${member} \n Erkek olarak kayıt eden yetkili: <@!${message.author.id}>`)
.addField(`Kullanıcının ismi:`, `${isim}`, true)
.addField(`Kullanıcının yaşı:`, `${yaş}`, true)
.setThumbnail(member.avatarURL)
.setFooter(`Pearlys`)
message.channel.send(başarılı)
db.add(`kayıtsayı_${message.author.id}`, 1)
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['e'],
  permlevel: 0
}
exports.help = {
  name: 'erkek',
  description: 'erkek olarak kayıt eder',
  usage: '!erkek @kullanıcı isim yaş'
}