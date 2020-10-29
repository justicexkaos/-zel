const Discord = require("discord.js")
const db = require("quick.db");
const Canvas = require('canvas')
    , Image = Canvas.Image
    , Font = Canvas.Font
    , path = require('path');
const snekfetch = require('snekfetch');
const request = require('node-superfetch');

module.exports = async member => {  
   var randomMsg = [
                    "Sunucudan ayrıldı."
                    ];
    var randomMsg_integer = randomMsg[Math.floor((Math.random() * randomMsg.length))]
  
  let paket = await db.fetch(`pakets_${member.id}`)
  let memberChannel = await db.fetch(`gcc_${member.guild.id}`)
  let msj = await db.fetch(`cikisM_${member.guild.id}`)
  if (!msj) msj = `{uye}, ${randomMsg_integer}`
  
  
  const canvas = Canvas.createCanvas(1920, 1080);
	const ctx = canvas.getContext('2d');
  
  const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/636581615300116506/638125444415356958/moly-exit.png');
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  
  ctx.fillStyle = `#ffffff`;
  ctx.font = `72px "Lato"`;
  ctx.textAlign = "center";
  ctx.fillText(`${member.user.username.toUpperCase()}`, 940,980);

  let avatarURL = member.user.avatarURL || member.user.defaultAvatarURL
  const { body } = await request.get(avatarURL);
  const avatar = await Canvas.loadImage(body);
  
  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fill()
  ctx.lineWidth = 4;
	ctx.arc(950,530,220, 0, 2 * Math.PI);
  ctx.clip();
  ctx.drawImage(avatar, 730, 310, 440, 440);
  const attachment = new Discord.Attachment(canvas.toBuffer(), 'carwonexit.png');
  member.guild.channels.get(memberChannel).send(attachment)
  member.guild.channels.get(memberChannel).send(msj.replace('{uye}', member).replace('{sunucu}', member.guild.name));
  if (member.user.bot) return member.guild.channels.get(memberChannel).send(`🤖 Bu bir bot, ${member.user.tag}`)
  
}