const Discord = require("discord.js")
const ayarlar = require("../config.json")
const db = require("quick.db")
module.exports = message => {
  let client = message.client;
  if (message.author.bot) return;
  if(!message.member) return;
  if(!message.guild) return;
  if (!message.content.startsWith(ayarlar.prefix)) return;
  let command = message.content.split(' ')[0].slice(ayarlar.prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    
    let karaliste = db.fetch(`karalist_${message.author.id}`, "aktif")
        let karalistesebep = db.fetch(`sebep_${message.author.id}`)
        if (karaliste == "aktif") {
   let karaliste = new Discord.MessageEmbed()
    .setColor("0x36393F")
   .setTitle('KOMUTLARI KULLANAMAZSINIZ!')
  .setDescription(`Üzgünüm ancak komutları kullanamazsınız! Kurucularımız tarafından **${karalistesebep}** sebebiyle komutları kullanmanız yasaklandı!.`)
   .setFooter(`Pearlys'den engellendiniz.`)
   .setThumbnail(client.user.avatarURL())
   
   const westrabencanımbro = new Discord.MessageEmbed()
   .setColor("BLUE")
   .setTimestamp()
   .setFooter(`Pearlys`)
   .setDescription("**"+message.author.tag+"** adlı kullanıcı karalistede olup **"+command+"** adlı komutu: **"+message.guild.name+"** sunucusunda kullanmayı denedi.")
   client.channels.cache.get("KANALİD").send(westrabencanımbro)
  return message.channel.send(karaliste)

        }
       const westrabencanımbrosadadsasd = new Discord.MessageEmbed()
   .setColor("BLUE")
   .setTimestamp()
   .setFooter(`Pearlys`)
   .setDescription("**"+message.author.tag+"** adlı kullanıcı **"+command+"** adlı komutu: **"+message.guild.name+"** sunucusunda kullandı.")
       
       
 client.channels.cache.get("KANALİD").send(westrabencanımbrosadadsasd)

    //wqerewq
   if (cmd.conf.enabled === false) {
      if (!ayarlar.sahip.includes(message.author.id) && !ayarlar.sahip.includes(message.author.id)) {
        const embed = new Discord.MessageEmbed()
                    .setDescription(`:red_square: **${cmd.help.name}** isimli komut şuanda geçici olarak kullanıma kapalıdır!`)
                    .setColor("RED")
                message.channel.send({embed})
                return
      }
    }

    if (cmd.conf.permLevel === 1) {
			if (!message.member.hasPermission("MANAGE_MESSAGES")) {
				const embed = new Discord.MessageEmbed()
					.setDescription(`:red_square: Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`)
          .setColor("RED")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 2) {
			if (!message.member.hasPermission("KICK_MEMBERS")) {
				const embed = new Discord.MessageEmbed()
					.setDescription(`:red_square: Bu komutu kullanabilmek için **Üyeleri At** iznine sahip olmalısın!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}
    if (cmd.conf.permLevel === 3) {
			if (!message.member.hasPermission("BAN_MEMBERS")) {
				const embed = new Discord.MessageEmbed()
					.setDescription(`:red_square: Bu komutu kullanabilmek için **Üyeleri Yasakla** iznine sahip olmalısın!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}

		if (cmd.conf.permLevel === 4) {
			if (!message.member.hasPermission("ADMINISTRATOR")) {
				const embed = new Discord.MessageEmbed()
					.setDescription(`:red_square: Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 5) {
			if (!ayarlar.sahip.includes(message.author.id)) {
				const embed = new Discord.MessageEmbed()
					.setDescription(`:red_square: Bu komutu sadece **sahibim** kullanabilir!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}
  if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
    }

};
