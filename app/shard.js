const Discord = require('discord.js');
const ayarlar = require('./ayarlar.json');
const bot = new Discord.Client()
const express = require('express');
const app = express();
const http = require('http');
const scarew = new Discord.ShardingManager('./index.js', {// Ana dosyanızın adını yazınız.
    totalShards: 'auto',
    token: "NjM3MzAwNDA1MjY0NzExNjk0.XbMKVw.lLnWyVBBaMQ9d37nma-CQfj8cy0"// Buraya tokeninizi yazınız.
});

scarew.spawn(); 

scarew.on('launch', shard => {
  console.log(`**${shard.id}** ID shard started.`)
});


setTimeout(() => {
    scarew.broadcastEval("process.exit()");
}, 21600000);