const Discord = require('discord.js');
const ayar = require('./config.json');
const bot = new Discord.Client()
const westra = new Discord.ShardingManager('./crypto.js', {
    totalShards: 0,
    token: ayar.token
});

westra.spawn(); 

westra.on('launch', shard => {
  console.log(`**${shard.id}** ID'li shard başlatıldı.`)
});

setTimeout(() => {
    westra.broadcastEval("process.exit()");
}, 21600000);