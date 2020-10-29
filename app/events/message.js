
const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const chalk = require('chalk')

module.exports = async message => {
  
  let client = message.client;
  
  const ayarlar = client.ayarlar
  
  //if (!client.users.get(client.user.id).hasPermission("SEND_MESSAGES")) return message.reply(`Yeterli izinlere sahip değilim! \n**İhtiyacım Olan Yetki:** \n\`Mesaj Gönder\``)
  
  if (!message.guild) return;
  
let prefix;
  
if (db.has(`prefix_${message.guild.id}`) === true) {
  prefix = db.fetch(`prefix_${message.guild.id}`)
}
  
if (db.has(`prefix_${message.guild.id}`) === false) {
  prefix = client.ayarlar.prefix
}
  
  var args = message.content.split(' ').slice(1)
  
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  
  /*if (client.commands.has(command) === false) {
      const embed = new Discord.RichEmbed()
					.setDescription(`Bu komut Bot Sahibi tarafından devre dışı bırakılmış!`)
					.setColor(client.ayarlar.renk)
				message.channel.send({embed})
    }*/
  
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
   } else if (client.english.has(command)) {
    cmd = client.english.get(command);
    }
  
  var dill = 'tr'
	if(db.has(`dil_${message.guild.id}`) === true) {
		var dill = "en"
	}
	const dil = client[dill]
  
  


if(db.has(`yasakK_${message.guild.id}`) === true) {
  if(db.fetch(`yasakK_${message.guild.id}`).includes(cmd.help.name)) return message.channel.send('Bu komut bu sunucuda **yasaklanmıştır!**')
  
}
  

  
  if (cmd) {
    

    
    if (db.has(`karalist_${message.author.id}`) === true) {
  
    message.channel.send("<:hata:637685816197382165> Botun komutlarını kara listede olduğunuz için kullanamazsınız.")
    
    return
  };
    
    //if (ayarlar.sahip.includes(message.author.id)) return;
    
    if (cmd.conf.enabled === false) {
      if (!ayarlar.sahip.includes(message.author.id) && !ayarlar.official_sahip.includes(message.author.id)) {
 
				message.channel.send(`<:hata:637685816197382165> Bu komut şuanda sunucularda kullanıma kapalıdır.`)
				return
      }
    }
    
    if (cmd.conf.bakim === false) {
      //if (!ayarlar.sahip.includes(message.author.id) && !ayarlar.official_sahip.includes(message.author.id)) {
        const embed = new Discord.RichEmbed()
					.setDescription(`Bu komut bakımdadır.`)
					.setColor(client.ayarlar.renk)
				message.channel.send({embed})
				/*return
      }*/
    }
    
    if (cmd.conf.permLevel === 1) {
			if (!message.member.hasPermission("MANAGE_MESSAGES")) {
				const embed = new Discord.RichEmbed()
					.setDescription(`Bu komutu kullanabilmek için Mesajları Yönet iznine sahip olmalısın!`)
          .setColor(client.ayarlar.renk)
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 2) {
			if (!message.member.hasPermission("KICK_MEMBERS")) {
				const embed = new Discord.RichEmbed()
					.setDescription(`Bu komutu kullanabilmek için Üyeleri At iznine sahip olmalısın!`)
					.setColor(client.ayarlar.renk)
				message.channel.send({embed})
				return
			}
		}
    if (cmd.conf.permLevel === 3) {
			if (!message.member.hasPermission("BAN_MEMBERS")) {
				const embed = new Discord.RichEmbed()
					.setDescription(`Bu komutu kullanabilmek için Üyeleri Yasakla iznine sahip olmalısın!`)
					.setColor(client.ayarlar.renk)
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 4) {
			if (!message.member.hasPermission("ADMINISTRATOR")) {
				const embed = new Discord.RichEmbed()
					.setDescription(`Bu komutu kullanabilmek için Yönetici iznine sahip olmalısın!`)
					.setColor(client.ayarlar.renk)
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 5) {
			if (!ayarlar.sahip.includes(message.author.id) && !ayarlar.official_sahip.includes(message.author.id)) {
				const embed = new Discord.RichEmbed()
					.setDescription(`Bu komutu sadece Bot Sahibi kullanabilir!`)
					.setColor(client.ayarlar.renk)
				message.channel.send({embed})
				return
			}
		}
    
    cmd.run(client, message, args, dil, dill);
    
  }
  
};

