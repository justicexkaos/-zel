
const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const {RichEmbed} = require('discord.js');
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const chalk = require('chalk');
const fs = require('fs');
const { stripIndents } = require('common-tags');
const moment = require('moment');
let kufurEngel = JSON.parse(fs.readFileSync("./jsonlar/kufurEngelle.json", "utf8"));

const db = require('quick.db');

const Jimp = require('jimp')
const snekfetch = require('snekfetch');
const useful = require('./x.js');

let komutum = JSON.parse(fs.readFileSync("./komutlar.json", "utf8"));
/*
client.cmdd = komutum

client.on('ready', message => {
  const readyc = client.channels.get("622052139069341721");
  readyc.send(client.emojis.get("620290659588505610") + "| Shard 1 Aktif Edildi" + ayarlar.prefix)  
});
*/
//oydurum

//oydurumson



client.on("guildMemberAdd", member => {
  if (member.user.bot == true) {
  if (db.has(`oBotR_${member.guild.id}`) === false) return;
  var rol = member.guild.roles.get(db.fetch(`oBotR_${member.guild.id}`));
  if (!rol) return;
  
  member.addRole(rol)
  member.guild.channels.get(db.fetch(`oBotK_${member.guild.id}`)).send(member.tag + "adlı bota " + rol + " adlı rol başarıyla verildi!")
  }
})



client.on("guildCreate", guild => {


  guild.owner.send(":inbox_tray: **Real Fox Sunucunuza Başarıyla Eklendi.** <:moly_check:637743464381153321>\n\nBeni sunucunuza eklediğiniz için teşekkür ederim.\nBotumuzun yardım komutlarına **f?yardım** yazarak ulaşabilirsiniz.\nSunucunuzun ayarlarını daha kolay yapmak isterseniz web panelimize giriş yapabilirsiniz. \n\nWeb Panel: https://realfox.glitch.me/destek Sunucumuz: https://discord.gg/dEhcgsb")
})
client.on("guildMemberAdd", member => {
 let ch = db.fetch(`kayitC_${member.guild.id}`);
  if (ch == true){
    member.send("**Lütfen kayıt olunuz! Kayıt olmak için:** f?kayıtol İsim Yaş") 
}})


client.on("guildMemberAdd", member => {
  if (member.user.bot == true) {
  if (db.has(`otoR_${member.guild.id}`) === false) return;
  var rol = member.guild.roles.get(db.fetch(`otoR_${member.guild.id}`));
  if (!rol) return;
  
  member.addRole(rol)
         
      member.guild.channels.get(db.fetch(`otoK_${member.guild.id}`)).send(`:inbox_tray: Hoşgeldin \`${member.user.tag}\`  başarıyla otomatik rol verildi!`)
      
  

  }
})

client.on("guildMemberAdd", member => {
  
  //if (!ot[member.guild.id]) return;
  
  //var rol = member.guild.roles.get(ot[member.guild.id].otoRol);
  if (db.has(`otoR_${member.guild.id}`) === false) return;
  var rol = member.guild.roles.get(db.fetch(`otoR_${member.guild.id}`));
  if (!rol) return;
  
  member.addRole(rol)
  
})

client.on('guildMemberAdd', member => {


const totalm = db.fetch(`üyekanal_${member.guild.id}`);
const memberss = db.fetch(`kulkanal_${member.guild.id}`);
const botscont = db.fetch(`neblmkanal_${member.guild.id}`);
// GEREKLİ YERLER
const serverStats = {
  guildID: member.guild.id,
  totalUsersID: totalm,
  memberCountID: memberss,
  botCountID: botscont
};
  if (db.fetch(`supanel_${member.guild.id}`) == "aktif") {
if (member.guild.id !== serverStats.guildID) return;

client.channels.get(serverStats.totalUsersID).setName(`Toplam Kullanıcı : ${member.guild.memberCount} `);
client.channels.get(serverStats.memberCountID).setName(`Üye Sayısı : ${member.guild.members.filter(m => !m.user.bot).size}`);
client.channels.get(serverStats.botCountID).setName(`Bot Sayısı : ${member.guild.members.filter(m => m.user.bot).size}`);
  } else {
    return;
  }
});

client.on('guildMemberRemove', member => {
const totalm = db.fetch(`üyekanal_${member.guild.id}`);
const memberss = db.fetch(`kulkanal_${member.guild.id}`);
const botscont = db.fetch(`neblmkanal_${member.guild.id}`);

  const serverStats = {
  guildID: member.guild.id,
  totalUsersID: totalm,
  memberCountID: memberss,
  botCountID: botscont
};
  if (db.fetch(`supanel_${member.guild.id}`) == "aktif") {
if (member.guild.id !== serverStats.guildID) return;

client.channels.get(serverStats.totalUsersID).setName(`Toplam Kullanıcı : ${member.guild.memberCount} `);
client.channels.get(serverStats.memberCountID).setName(`Üye Sayısı : ${member.guild.members.filter(m => !m.user.bot).size}`);
client.channels.get(serverStats.botCountID).setName(`Bot Sayısı : ${member.guild.members.filter(m => m.user.bot).size}`);

  } else {
    return
  }
  
});

client.useful = useful;
require("./modüller/fonksiyonlar.js")(client);
require('./util/eventLoader')(client);
client.config = require("./config.js");

client.ayarlar = {
        "oynuyor": "f?yardım | f?ekonomi (YENİ SİSTEM!) | realfox.glitch.me",
        "official_sahip": "635893090460368906",
          "botsahip": "635893090460368906",
        "sahip": ['635893090460368906'],
        "yardimcilar": [],
        "isim": "Real Fox",
        "botD": "https://discordapp.com/oauth2/authorize?client_id=609476251727560749&scope=bot&permissions=8",
        "webS": "https://realfox.glitch.me/callback",
        "web": "https://realfox.glitch.me/callback",
   "webpanel": "https://realfox.glitch.me/panel",
        "versiyon": "1.0.0",
        "prefix": "f?",
        "renk": '#F45406',
        "version":  "1.0.0",
     "secenek": ["tr", "en"],
          
 };
const ayarlar = client.ayarlar;


client.tr = require('./tr.js');
client.en = require('./en.js');

//var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${chalk.yellow(`»`)} ${message}`);
};





                         
 
  client.ayar = db;
  


client.on("ready", async () => {
  
  client.appInfo = await client.fetchApplication();
  setInterval( async () => {
    client.appInfo = await client.fetchApplication();
  }, 60000);
    require("./modüller/panel.js")(client); 
   console.log(`${chalk.green(client.user.username)}${chalk.red(",")} ${chalk.blue(client.guilds.size)} ${chalk.yellow("Sunucu'ya")} ${chalk.red("ve")} ${chalk.blue(client.users.size.toLocaleString())} ${chalk.yellow("Kullanıcı'ya")} ${chalk.red("hizmet veriyor!")}`)
  client.user.setStatus("watching");
  client.user.setActivity(client.ayarlar.oynuyor, { type: 'WATCHING' });
  
})
  

client.on('guildMemberAdd',async member => {
  let user = client.users.get(member.id);
  let kanal = client.channels.get(db.fetch(`guvenlik${member.guild.id}`)) 
       const Canvas = require('canvas')
       const 
       canvas = Canvas.createCanvas(360,100);
       const ctx = canvas.getContext('2d');
  
  const resim1 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/597433546868654106/627428441695977497/gvnlk-spheli.png')
    const resim2 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/597433546868654106/627427731407241226/gvnlk-gvnli.png')
    const kurulus = new Date().getTime() - user.createdAt.getTime();
    const gün = moment(kurulus).format('dddd');  
    var kontrol;
      if (kurulus > 2629800000) kontrol = resim2
    if (kurulus < 2629800000) kontrol = resim1

       const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/597433546868654106/627425996454232064/gvnlk-arka.png');
       ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
   

  const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
  ctx.drawImage(kontrol,0,0,canvas.width, canvas.height)
  ctx.beginPath();
    ctx.lineWidth = 4;
  ctx.fill()
    ctx.lineWidth = 4;
  ctx.arc(180, 46, 36, 0, 2 * Math.PI);
    ctx.clip();
  ctx.drawImage(avatar, 143,10, 73, 72  );

   
       const attachment = new Discord.Attachment(canvas.toBuffer(), 'STARKs-güvenlik.png');
    kanal.send(attachment)
});

/*
client.on('guildMemberAdd',async member => {
  let user = client.users.get(member.id);
  let chan = client.channels.get(db.fetch(`guvenlik${member.guild.id}`)) 
       const Canvas = require('canvas')
       const canvas = Canvas.createCanvas(360,100);
       const ctx = canvas.getContext('2d');
  
  const resim1 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/591299755976425493/614151181752860672/yhosgeldirrn.png')
    const resim2 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/591299755976425493/614164419768877056/yhosgeldirrn.png')
    const kurulus = new Date().getTime() - user.createdAt.getTime();
    const gün = moment.duration(kurulus).format("D")   
    var kontrol;
      if (kurulus > 2629800000) kontrol = resim2
    if (kurulus < 2629800000) kontrol = resim1

       const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/591299755976425493/614164413318168606/Adsz.png');
       ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
   


  const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
  ctx.drawImage(kontrol,0,0,canvas.width, canvas.height)
  ctx.beginPath();
	ctx.lineWidth = 4;
  ctx.fill()
	ctx.lineWidth = 4;
  ctx.arc(180, 46, 36, 0, 2 * Math.PI);
	ctx.clip();
  ctx.drawImage(avatar, 143,10, 73, 72  );

   
       const attachment = new Discord.Attachment(canvas.toBuffer(), 'STARKs-güvenlik.png');
    chan.send(attachment)
});*/

client.on('guildMemberAdd', async member => {
 
  //	let kanal = await db.fetch(`hgKanal2_${member.guild.id}`)
   //  if (!kanal) return
  const Canvas = require('canvas')
	const canvas = Canvas.createCanvas(900, 280);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('https://pngimg.com/uploads/alien/alien_PNG103.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Add an exclamation point here and below
	ctx.font = applyText(canvas, `${member.user.tag}`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.user.tag}`, canvas.width / 3.7, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const { body: buffer } = await snekfetch.get(member.user.displayAvatarURL || member.user.defaultAvatarURL);
	const avatar = await Canvas.loadImage(buffer);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'MEETRHosgeldin.png');

	member.guild.channels.get(db.fetch(`vcc_${member.guild.id}`)).send(`Sunucuya hoşgeldin, ${member}!`, attachment);
});


client.on('guildMemberRemove', async member => {
  
	//let kanal = await db.fetch(`hgKanal2_${member.guild.id}`)
    //if (!kanal) return
    const Canvas = require('canvas')
	const canvas = Canvas.createCanvas(900, 280);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('https://pngimg.com/uploads/alien/alien_PNG103.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Add an exclamation point here and below
	ctx.font = applyText(canvas, `${member.user.tag}`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.user.tag}`, canvas.width / 3.7, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const { body: buffer } = await snekfetch.get(member.user.displayAvatarURL || member.user.defaultAvatarURL);
	const avatar = await Canvas.loadImage(buffer);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'MEETRGuleGule.png');

	member.guild.channels.get(db.fetch(`vcc_${member.guild.id}`)).send(`Güle güle, **${member.user.tag}**`, attachment);
});


const applyText = (canvas, text) => {
    const ctx = canvas.getContext('2d');

    let fontSize = 54;

    do {
  
    ctx.font = `${fontSize -= 2}px Helvetica`;
    } while (ctx.measureText(text).width > canvas.width - 111);

    return ctx.font;
};



const invites = {};


const wait = require('util').promisify(setTimeout);

client.on('ready', () => {
client.user.setStatus("dnd");
  client.user.setActivity(client.ayarlar.oynuyor, { type: 'PLAYING' });
  wait(1000);


  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  try{
  
  member.guild.fetchInvites().then(guildInvites => {
   if (member.user.bot) return
const ei = invites[member.guild.id];
  
    invites[member.guild.id] = guildInvites;
 
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);

        const inviter = client.users.get(invite.inviter.id);
   
    const kanal = db.fetch(`dKanal_${member.guild.id}`);
 const embed = new Discord.RichEmbed()
        .setColor("#01CFFE")
        .setDescription(`${member.user.tag} adlı kullanıcı <@` + `${inviter}` + `> tarafından davet edildi.`)
    kanal.send(embed);
  });
  
  
client.on('guildMemberAdd', member => {
  
  
 
  member.guild.fetchInvites().then(guildInvites => {
    
    if (db.has(`dKanal_${member.guild.id}`) === false) return
    const channel = db.fetch(`dKanal_${member.guild.id}`).replace("<#", "").replace(">", "")
    
    const ei = invites[member.guild.id];
  
    invites[member.guild.id] = guildInvites;
 
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);

    const davetçi = client.users.get(invite.inviter.id);
 
    
   
   const embed = new Discord.RichEmbed()
        .setColor("#01CFFE")
        .setDescription(`${member.user.tag} adlı kullanıcı <@` + `${davetçi.tag}` + `> tarafından davet edildi.`)
   member.guild.channels.get(channel).send(embed)
  })
});

    
  
  } catch(err) {
    return
  }
});


client.on('guildMemberRemove', member => {
   
  member.guild.fetchInvites().then(guildInvites => {
    
    if (db.has(`dKanal_${member.guild.id}`) === false) return
    const channel = db.fetch(`dKanal_${member.guild.id}`).replace("<#", "").replace(">", "")
    
    const ei = invites[member.guild.id];
  
    invites[member.guild.id] = guildInvites;
 
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);

    const davetçi = client.users.get(invite.inviter.id);
 
    
   
   const embed = new Discord.RichEmbed()
        .setColor("#01CFFE")
        .setDescription(`<@` + `${davetçi.tag}` + `> tarafından davet edilen. ${member.user.tag} sunucudan ayrıldı!`)
   member.guild.channels.get(channel).send(embed)
  })
});


//burda var
client.on("message", msg => { 
  const linkEngel = db.fetch(`linkE_${msg.guild.id}`)
  if (!msg.guild) return;
  if (!linkEngel) return;
    if (linkEngel === true) {
    var regex = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");
    if (regex.test(msg.content) == true) {
    //if (!msg.member.hasPermission("BAN_MEMBERS")) {
      msg.delete()
               var e = new Discord.RichEmbed()
        .setColor("#01CFFE")
        .setDescription(`Bu sunucuda link paylaşımı yasak!`)
        msg.channel.send(e).then(message => message.delete(5000));
    //}
}
    }
});


client.on("message", async msg => {
  
  
 

  
  const prefix = await db.fetch(`prefix_${msg.guild.id}`) || client.ayarlar.prefix;
  //const args = msg.content.slice.split(' ');
  const args = msg.content.trim().split(/ +/g);
  const fAK = await  db.fetch(`filtreAK_${msg.guild.id}`);
  let mesaj = args.slice(1).join(' ');
  const filtre = await db.fetch(`filtre_${msg.guild.id}`);
  
 
  if(fAK == 'açık') {
    
    
    
            
      const fltr = filtre
   if (fltr.some(word => msg.content.includes(word))) {
  if (!msg.member.hasPermission("BAN_MEMBERS")) {
    msg.delete()
     
   var k = new Discord.RichEmbed()
        .setColor("#01CFFE")
        .setAuthor("Filtre Sistemi")
        .setDescription(`Bu sunucuda yasaklanmış bir kelimeyi kullandınız, bu yüzden mesajınızı sildim.`)
        msg.channel.send(k).then(message => message.delete(5000));
     
  return;
  }
  } }
    
  
  
   if (!msg.guild) return;

  if (msg.author.bot) return;
  
 
  if (db.has(`capsE_${msg.guild.id}`) === true) {
    let x = /\w*[A-Z]\w*[A-Z]\w*/g;
    if (msg.content.match(x)) {
      if (msg.member.permissions.has("BAN_MEMBERS") === true) return;
      msg.delete();
      let y = await msg.reply(`Bu sunucuda büyük harf engeli açık, bu yüzden büyük harf açıkken yazı yazamazsın!`)
      y.delete(5000);
      return
    };
  };

  
  
     
  



})


client.on("messageUpdate", async (msg) => {
  
  const prefix = await db.fetch(`prefix_${msg.guild.id}`) || client.ayarlar.prefix;
  //const args = msg.content.slice.split(' ');
  const args = msg.content.trim().split(/ +/g);
  const fAK = await  db.fetch(`filtreAK_${msg.guild.id}`);
  let mesaj = args.slice(1).join(' ');
  const filtre = await db.fetch(`filtre_${msg.guild.id}`);
  
  
  if(fAK == 'açık') {
    
    
    
            
      const fltr = filtre
   if (fltr.some(word => msg.content.includes(word))) {
  if (!msg.member.hasPermission("BAN_MEMBERS")) {
    msg.delete()
     
   var k = new Discord.RichEmbed()
          .setColor("#01CFFE")
        .setAuthor("Filtre Sistemi")
        .setDescription(`Bu sunucuda yasaklanmış bir kelimeyi kullandınız, bu yüzden mesajınızı sildim.`)
        msg.channel.send(k).then(message => message.delete(5000));
     
  return;
  }
  } }
    
  
  
   if (!msg.guild) return;

  if (msg.author.bot) return;
  
  
  if (db.has(`capsE_${msg.guild.id}`) === true) {
    let x = /\w*[A-Z]\w*[A-Z]\w*/g;
    if (msg.content.match(x)) {
      if (msg.member.permissions.has("BAN_MEMBERS") === true) return;
      msg.delete();
      let y = await msg.reply(`Bu sunucuda büyük harf engeli açık, bu yüzden büyük harf açıkken yazı yazamazsın!`)
      y.delete(5000);
      return
    };
  };

  

      const linkEngel = db.fetch(`linkE_${msg.guild.id}`)
  if (!msg.guild) return;
  if (!linkEngel) return;
    if (linkEngel === true) {
    var regex = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");
    if (regex.test(msg.content) == true) {
    //if (!msg.member.hasPermission("BAN_MEMBERS")) {
      msg.delete()
               var e = new Discord.RichEmbed()
        .setColor("#01CFFE")
        .setDescription(`Bu sunucuda link paylaşımı yasak!`)
        msg.channel.send(e).then(message => message.delete(5000));
    //}
}
    }

  
});


client.on("message", async message => {
  
  if (!message.guild) return;
  
    if(db.has(`sayac_${message.guild.id}`) === true) {
        if(db.fetch(`sayac_${message.guild.id}`) <= message.guild.members.size) {
            const embed = new Discord.RichEmbed()
            .setTitle(`Tebrikler ${message.guild.name}!`)
            .setDescription(`Başarıyla \`${db.fetch(`sayac_${message.guild.id}`)}\` kullanıcıya ulaştık! Sayaç sıfırlandı!`)
            .setColor("#01CFFE")
            message.channel.send({embed})
            message.guild.owner.send({embed})
            db.delete(`sayac_${message.guild.id}`)
        }
    }
})
/*
client.on("message", msg => {
   var adsc =  db.fetch(`adsc_${msg.author.id}_${msg.guild.id}`);

  if (adsc ? adsc : 3) {
    msg.author.send("test")
      
  } else {
    msg.author.send("sa")
  }
}
)*/
/*
const request = require("request");

function checkWords(msg) {
  request(
    encodeURI("https://renoxapi.glitch.me/enge/kufurr"),
    (err, res, body) => {
      const jsons = JSON.parse(body);
      const contains =
      jsons.filter(word => {
          const wordExp = new RegExp("(\\b)+(" + word + ")+(\\b)", "gui");
          return (wordExp.test(msg.content));
        }).length > 0 || false;
      if (contains) {
        var userID = msg.author.id;

            db.add(`swearCount_${userID}`, 1);
            db.add(`serverSwear_${userID}_${msg.guild.id}`, 1);
        

        msg.delete();
        
          msg.channel.send(embed1);
                return 

      }  
    }
  );
}*/

client.on("message",async message=>{
db.fetch(`kufur-engel_${message.guild.id}`).then(i=>{
  if(i === "acik"){
      const kufur = ["ordu spor", "ordu spor çocuğu", "ordu spor cocu", "orduspor", "orduspor çocuğu", "orduspor cocu", "pezo", "pezevenk", "amk", "mk", "sik", "SİK", "amk", "aq", "orospu", "oruspu", "oç", "sikerim", "yarrak", "piç", "amq", "sik", "amcık", "çocu", "sex", "seks", "amına", "orospu çocuğu", "sg", "siktir git"];
  if (kufur.some(word => message.content.toLowerCase().includes(word)) ) {
    if (!message.member.hasPermission("BAN_MEMBERS")) {
      message.delete();
      const embed = new Discord.RichEmbed()
      .setTitle('<a:dur:606048229951275019> **Moly küfürü engelledi**')
      .setDescription(message.author+' Küfür etmemelisin.')   
      .setColor('#01CFFE')
      .setFooter('','')
      //Coding by Steve Jobs#0266  #fffa00
      message.channel.send(embed).then(n=> n.delete(9000))
    }
  }
  }
})
  
});
  client.on('messageUpdate', async (oldMessage, newMessage) => {  
  db.fetch(`kufur-engel_${oldMessage.guild.id}`).then(i=>{
  if(i === "acik"){
      const kufur = ["ordu spor", "ordu spor çocuğu", "ordu spor cocu", "orduspor", "orduspor çocuğu", "orduspor cocu", "pezo", "pezevenk", "amk", "mk", "sik", "SİK", "amk", "aq", "orospu", "oruspu", "oç", "sikerim", "yarrak", "piç", "amq", "sik", "amcık", "çocu", "sex", "seks", "amına", "orospu çocuğu", "sg", "siktir git"];
  if (kufur.some(word => newMessage.content.toLowerCase().includes(word)) ) {
    if (!oldMessage.member.hasPermission("BAN_MEMBERS")) {
      oldMessage.delete();
      const embed = new Discord.RichEmbed()
      .setTitle('<a:dur:606048229951275019> **Moly küfürü engelledi**')
      .setDescription(oldMessage.author+' Mesajını editlemen işe yaramaz.')
      .setColor('#01CFFE')
      .setFooter('','')
      //Coding by Steve Jobs#0266
      oldMessage.channel.send(embed).then(n=> n.delete(9000))
 }
  }
  }
  })
  });  


client.on("message", async message => {
  if(message.author.bot) return;
  
    if (db.has(`saas_${message.guild.id}`) === true) {
  if (message.content == "sa") {
    
        message.channel.send("Aleyküm selam, sunucumuza hoşgeldiniz!")
    
}
    }

  var seç = await db.fetch(`küfürE_${message.guild.id}`);
  
  //if(seç) checkWords(message);
  //else return;
});


  
client.on("guildMemberRemove", async member => {
    if (db.has(`sayac_${member.guild.id}`) === false) return
    if (db.has(`sKanal_${member.guild.id}`) === false) return
    const channel = db.fetch(`sKanal_${member.guild.id}`)
      member.guild.channels.get(channel).send(`╔▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n║► :outbox_tray: **${member.user.tag}** Adlı Kullanıcı Ayrıldı!\n║► \`${db.fetch(`sayac_${member.guild.id}`)}\` Kişi Olmamıza \`${db.fetch(`sayac_${member.guild.id}`) - member.guild.members.size}\` Kişi Kaldı\n║► Artık \`${member.guild.memberCount}\` Kişiyiz <:hata:637685816197382165>\n╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)
         
  
})


client.on("guildMemberAdd", async member => {
    if (db.has(`sayac_${member.guild.id}`) === false) return
    if (db.has(`sKanal_${member.guild.id}`) === false) return
    const channel = db.fetch(`sKanal_${member.guild.id}`)
      member.guild.channels.get(channel).send(`╔▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n║► :inbox_tray: **${member.user.tag}** Adlı Kullanıcı Katıldı!\n║► \`${db.fetch(`sayac_${member.guild.id}`)}\` Kişi Olmamıza \`${db.fetch(`sayac_${member.guild.id}`) - member.guild.members.size}\` Kişi Kaldı\n║► Seninle Beraber \`${member.guild.memberCount}\` Kişiyiz <:moly_check:637743464381153321>\n╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)
         
  
})

//╔▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n║► :inbox_tray: **${member.user.tag}** Adlı Kullanıcı Katıldı!\n║► \`${db.fetch(`sayac_${member.guild.id}`)}\` Kişi Olmamıza \`${db.fetch(`sayac_${member.guild.id}`) - member.guild.members.size}\` Kişi Kaldı\n║► Seninle Beraber \`${member.guild.memberCount}\` Kişiyiz <:moly_check:637743464381153321>\n╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

//let ot = JSON.parse(fs.readFileSync("./jsonlar/otoR.json", "utf8"));


client.on("guildMemberAdd", async member => {
  
  if (!member.guild) return;
  
  let prefix = await db.fetch(`prefix_${member.guild.id}`) || client.ayarlar.prefix;
  
  if(db.has(`gc_${member.guild.id}`) === false) return;
  
  const hgK = await db.fetch(`gc_${member.guild.id}`)
  if (!hgK) return;
  
  const giris = db.fetch(`girisM_${member.guild.id}`)

                         member.guild.channels.get(hgK).send(db.has(`girisM_${member.guild.id}`) ? giris.replace('{kullanıcı}', `<@${member.user.id}>`).replace("{user}", `<@${member.user.id}>`).replace("{sunucu}", `**${member.guild.name}**`).replace("{kişisayısı}", `**${member.guild.members.size}**`) : `<@${member.user.id}> Katıldı! **${client.ayarlar.webpanel}** adresinden veya (\`giriş-mesaj-ayarla\` komutu ile mesajı değiştirilebilir.)`)
          
   
});



client.on("guildMemberRemove", async member => {
  
  if (!member.guild) return;
  
  let prefix = await db.fetch(`prefix_${member.guild.id}`) || client.ayarlar.prefix;
  
  if(db.has(`gc_${member.guild.id}`) === false) return;
  
   const hgK = await db.fetch(`gc_${member.guild.id}`)
  if (!hgK) return;
  
  const cikis = db.fetch(`cikisM_${member.guild.id}`)
  
                        member.guild.channels.get(hgK).send(db.has(`cikisM_${member.guild.id}`) ? cikis.replace('{kullanıcı}', `**${member.user.username}**`).replace("{user}", `**${member.user.username}**`).replace("{sunucu}", `**${member.guild.name}**`).replace("{kişisayısı}", `**${member.guild.members.size}**`) : `**${member.user.username}** Ayrıldı! **${client.ayarlar.webpanel}** adresinden veya (\`çıkış-mesaj-ayarla\` komutu ile mesaj değiştirilebilir.)`)
            

});


client.on("message", async message => {
  
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
  
   const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
    const p = String(message.content.match(prefixMention));
  
  if (message.author.bot) return;
  if (!message.content.startsWith(p)) return;
  const args = message.content.slice(p.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
   } else
    if (client.english.has(command)) {
    cmd = client.english.get(command);
    }
  
  var dill = 'tr'
    if(db.has(`dil_${message.guild.id}`) === true) {
        var dill = 'en'
    }
    const dil = client[dill]
  


  
  if (cmd) {
    
    if (db.has(`karalist_${message.author.id}`) === true) {
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription("<a:hayir:613715530494246912> Sen botun karalistesindesin")
    message.channel.send({embed: embed})
    message.react("😡")
    return
  };
    
    //if (ayarlar.sahip.includes(message.author.id)) return;
    
    if (cmd.conf.enabled === false) {
      if (!ayarlar.sahip.includes(message.author.id) && !ayarlar.official_sahip.includes(message.author.id)) {
        const embed = new Discord.RichEmbed()
					.setDescription(`Bu komut şuanda sunucularda kullanıma kapalıdır! (Yapım aşamasındadır)`)
					.setColor("RANDOM")
				message.channel.send({embed})
				return
      }
    }
    
    if (cmd.conf.bakim === false) {
      //if (!ayarlar.sahip.includes(message.author.id) && !ayarlar.official_sahip.includes(message.author.id)) {
        const embed = new Discord.RichEmbed()
					.setDescription(`Bu komut bakımdadır.`)
					.setColor("RANDOM")
				message.channel.send({embed})
				/*return
      }*/
    }
    





    
    cmd.run(client, message, args, dil, dill);
    
  }
  
});




/*
client.on('message', async msg => {
  
  if (!msg.guild) return;
  
  let prefix = await db.fetch(`prefix_${msg.guild.id}`) || client.ayarlar.prefix;
  
  if(!msg.guild.channels.get(db.fetch(`destekK_${msg.guild.id}`))) return
  var s = 'tr'
  var r = 'Destek Ekibi'
  var k = 'destek-kanalı'
  const dil = s
  
  let rol = '';
  let kanal = '';
  
  if (db.has(`destekK_${msg.guild.id}`) === true) {
 kanal = msg.guild.channels.get(db.fetch(`destekK_${msg.guild.id}`)).name
  }
  
  if (db.has(`destekK_${msg.guild.id}`) === false) {
  kanal = k
  }
  
  if (db.has(`destekR_${msg.guild.id}`) === true) {
  rol = msg.guild.roles.get(db.fetch(`destekR_${msg.guild.id}`))
  }
  
  if (db.has(`destekR_${msg.guild.id}`) === false) {
  rol = r
  }
  
  const reason = msg.content.split(" ").slice(1).join(" ");
  if (msg.channel.name== kanal) {
     if (msg.author.bot) return;
    if (!msg.guild.roles.exists("name", rol)) return msg.reply(client[dil].desteksistem.rolyok.replace("{rol}", r)).then(m2 => {
            m2.delete(5000)});
    if (msg.guild.channels.find(c => c.name === `${client[dil].desteksistem.talep}-${msg.author.discriminator}`)) {
      
      msg.author.send(client[dil].desteksistem.aciktalepozel.replace("{kisi}", msg.author.tag).replace("{kanal}", `${msg.guild.channels.get(msg.guild.channels.find(c => c.name === `${client[dil].desteksistem.talep}-${msg.author.discriminator}`).id)}`))
      msg.guild.channels.find(c => c.name === `${client[dil].desteksistem.talep}-${msg.author.discriminator}`).send(client[dil].desteksistem.aciktalep.replace("{kisi}", msg.author.tag).replace("{sebep}", msg.content))
      
      msg.delete()
      return
    }

    if(msg.guild.channels.find(c => c.name === client[dil].desteksistem.kategori)) {
      msg.guild.createChannel(`${client[dil].desteksistem.talep}-${msg.author.discriminator}`, "text").then(c => {
      const category = msg.guild.channels.find(c => c.name === client[dil].desteksistem.kategori)
      c.setParent(category.id)
      let role = msg.guild.roles.find(r => r.name === rol.name);
      let role2 = msg.guild.roles.find(r => r.name === "@everyone");
      c.overwritePermissions(role, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      c.overwritePermissions(msg.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });

      const embed = new Discord.RichEmbed()
      .setColor(client.ayarlar.renk)
      .setAuthor(`${client.user.username} | Destek Sistemi`, client.user.avatarURL)
      .setTitle(`_Merhaba ${msg.author.username}!_`)
      .addField(`» Destek Talebi Hakkında Bilgilendirme «`, `Yetkililerimiz en yakın zamanda burada sorunun ile ilgilenecektir! \nDestek talebini kapatmak için \`${prefix}kapat\` yazabilir, \nSunucudaki tüm Destek Taleplerini kapatmak için ise \`${prefix}talepleri-kapat\` yazabilirsin!`)
      .addField(`» Destek Talebi Sebebi «`, `${msg.content}`, true)
      .addField(`» Destek Talebini Açan Kullanıcı «`, `<@${msg.author.id}>`, true)
      .setFooter(`${msg.guild.name} adlı sunucu ${client.user.username} Destek Sistemi'ni kullanıyor teşekkürler!`, msg.guild.iconURL)
      c.send({ embed: embed });
      c.send(`** @here | 📞Destek Talebi! ** \n**${msg.author.tag}** adlı kullanıcı \`${msg.content}\` sebebi ile Destek Talebi açtı!`)
      msg.delete()
      }).catch(console.error);
    }
  }

  if (msg.channel.name== kanal) {
    if(!msg.guild.channels.find(c => c.name === client[dil].desteksistem.kategori)) {
      msg.guild.createChannel(client[dil].desteksistem.kategori, 'category').then(category => {
      category.setPosition(1)
      let every = msg.guild.roles.find(c => c.name === "@everyone");
      category.overwritePermissions(every, {
        VIEW_CHANNEL: false,
        SEND_MESSAGES: false,
        READ_MESSAGE_HISTORY: false
      })
      msg.guild.createChannel(`${client[dil].desteksistem.talep}-${msg.author.discriminator}`, "text").then(c => {
      c.setParent(category.id)
      let role = msg.guild.roles.find(c => c.name === rol.name);
      let role2 = msg.guild.roles.find(c => c.name === "@everyone");
      c.overwritePermissions(role, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      c.overwritePermissions(msg.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });

      const embed = new Discord.RichEmbed()
      .setColor(client.ayarlar.renk)
      .setAuthor(`${client.user.username} | Destek Sistemi`, client.user.avatarURL)
      .setTitle(`_Merhaba ${msg.author.username}!_`)
     .addField(`» Destek Talebi Hakkında Bilgilendirme «`, `Yetkililerimiz en yakın zamanda burada sorunun ile ilgilenecektir! \nDestek talebini kapatmak için \`${prefix}kapat\` yazabilir, \nSunucudaki tüm Destek Taleplerini kapatmak için ise \`${prefix}talepleri-kapat\` yazabilirsin!`)
      .addField(`» Destek Talebi Sebebi «`, `${msg.content}`, true)
      .addField(`» Destek Talebini Açan Kullanıcı «`, `<@${msg.author.id}>`, true)
      .setFooter(`${msg.guild.name} adlı sunucu ${client.user.username} Destek Sistemi'ni kullanıyor teşekkürler!`, msg.guild.iconURL)
      c.send({ embed: embed });
      c.send(`** @here | 📞Destek Talebi! ** \n**${msg.author.tag}** adlı kullanıcı \`${msg.content}\` sebebi ile Destek Talebi açtı!`)
      msg.delete()
      }).catch(console.error);
    })
  }
}
})

client.on('message', async message => {
    if(!message.guild.channels.get(db.fetch(`destekK_${message.guild.id}`))) return

  if (!message.guild) return;
  
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
  
  var s = 'tr'
  var r = 'Destek Ekibi'
    if(db.has(`dil_${message.guild.id}`) === true) {
        var s = 'en'
        var r = 'Support Team'
    }
  const dil = s
  
if (message.content.toLowerCase().startsWith(prefix + `kapat`)) {
  if (!message.channel.name.startsWith(`${client[dil].desteksistem.talep}-`)) return message.channel.send(`Bu komut sadece Destek Talebi kanallarında kullanılabilir.`);

  const embed = new Discord.RichEmbed()
  .setColor(client.ayarlar.renk)
  .setAuthor(`Destek Talebi Kapatma İşlemi!`)
  .setDescription(`Destek talebini kapatma işlemini onaylamak için, \n10 saniye içinde \`evet\` yazınız.`)
  .setFooter(`${client.user.username} | Destek Sistemi`, client.user.avatarURL)
  message.channel.send({embed})
  .then((m) => {
    message.channel.awaitMessages(response => response.content === 'evet', {
      max: 1,
      time: 10000,
      errors: ['time'],
    })
    .then((collected) => {
        message.channel.delete();
      })
      .catch(() => {
        m.edit('Destek talebi kapatma isteği zaman aşımına uğradı.').then(m2 => {
            m2.delete()
        }, 3000);
      });
  });
  }
  

  
  //if (!message.guild) return;
  
 // let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
  

  // const dil = s
  
  
  
});
*/
//log sistemi

//let logA = JSON.parse(fs.readFileSync("./jsonlar/log.json", "utf8"));

client.on("guildMemberAdd", member => {
  
  //if (member.author.bot) return;
  
 // if (!logA[member.guild.id]) return;
  
  var user = member.user;
  var tarih = ''
			if(moment(user.createdAt).format('MM') === '01') {
				var tarih = `${moment(user.createdAt).format('DD')} Ocak ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '02') {
				var tarih = `${moment(user.createdAt).format('DD')} Şubat ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '03') {
				var tarih = `${moment(user.createdAt).format('DD')} Mart ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '04') {
				var tarih = `${moment(user.createdAt).format('DD')} Nisan ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '05') {
				var tarih = `${moment(user.createdAt).format('DD')} Mayıs ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '06') {
				var tarih = `${moment(user.createdAt).format('DD')} Haziran ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '07') {
				var tarih = `${moment(user.createdAt).format('DD')} Temmuz ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '08') {
				var tarih = `${moment(user.createdAt).format('DD')} Ağustos ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '09') {
				var tarih = `${moment(user.createdAt).format('DD')} Eylül ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '10') {
				var tarih = `${moment(user.createdAt).format('DD')} Ekim ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '11') {
				var tarih = `${moment(user.createdAt).format('DD')} Kasım ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '12') {
				var tarih = `${moment(user.createdAt).format('DD')} Aralık ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
  
  var tarih2 = ''
			if(moment(user.joinedAt).format('MM') === '01') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Ocak ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '02') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Şubat ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '03') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Mart ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '04') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Nisan ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '05') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Mayıs ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '06') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Haziran ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '07') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Temmuz ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '08') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Ağustos ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '09') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Eylül ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '10') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Ekim ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '11') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Kasım ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '12') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Aralık ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
  
  //var kanal = member.guild.channels.get(logA[member.guild.id].log);
  
  if (db.has(`log_${member.guild.id}`) === false) return;
  
  var kanal = member.guild.channels.get(db.fetch(`log_${member.guild.id}`))
  if (!kanal) return;
  
  const embed = new Discord.RichEmbed()
  .setColor("#01CFFE")
  .setAuthor(`Sunucuya Bir Kullanıcı Katıldı!`, member.user.avatarURL)
  .addField("Kullanıcı Tag", member.user.tag, true)
  .addField("ID", member.user.id, true)
  .addField("Discord Kayıt Tarihi", tarih, true)
  .addField("Sunucuya Katıldığı Tarih", tarih2, true)
  .setThumbnail(member.user.avatarURL)
  kanal.send(embed);
  
});

client.on("guildMemberRemove", member => {
  
  //if (member.author.bot) return;
  
 // if (!logA[member.guild.id]) return;
  
  var user = member.user;
  var tarih = ''
			if(moment(user.createdAt).format('MM') === '01') {
				var tarih = `${moment(user.createdAt).format('DD')} Ocak ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '02') {
				var tarih = `${moment(user.createdAt).format('DD')} Şubat ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '03') {
				var tarih = `${moment(user.createdAt).format('DD')} Mart ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '04') {
				var tarih = `${moment(user.createdAt).format('DD')} Nisan ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '05') {
				var tarih = `${moment(user.createdAt).format('DD')} Mayıs ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '06') {
				var tarih = `${moment(user.createdAt).format('DD')} Haziran ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '07') {
				var tarih = `${moment(user.createdAt).format('DD')} Temmuz ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '08') {
				var tarih = `${moment(user.createdAt).format('DD')} Ağustos ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '09') {
				var tarih = `${moment(user.createdAt).format('DD')} Eylül ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '10') {
				var tarih = `${moment(user.createdAt).format('DD')} Ekim ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '11') {
				var tarih = `${moment(user.createdAt).format('DD')} Kasım ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '12') {
				var tarih = `${moment(user.createdAt).format('DD')} Aralık ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
  
  var tarih2 = ''
			if(moment(user.joinedAt).format('MM') === '01') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Ocak ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '02') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Şubat ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '03') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Mart ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '04') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Nisan ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '05') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Mayıs ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '06') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Haziran ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '07') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Temmuz ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '08') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Ağustos ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '09') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Eylül ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '10') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Ekim ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '11') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Kasım ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '12') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Aralık ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
  
  //var kanal = member.guild.channels.get(logA[member.guild.id].log);
  
  if (db.has(`log_${member.guild.id}`) === false) return;
  
  var kanal = member.guild.channels.get(db.fetch(`log_${member.guild.id}`))
  if (!kanal) return;
  
  const embed = new Discord.RichEmbed()
  .setColor("#01CFFE")
  .setAuthor(`Sunucudan Bir Kullanıcı Ayrıldı!`, member.user.avatarURL)
  .addField("Kullanıcı Tag", member.user.tag, true)
  .addField("ID", member.user.id, true)
  .addField("Discord Kayıt Tarihi", tarih, true)
  .addField("Sunucuya Katıldığı Tarih", tarih2, true)
  .setThumbnail(member.user.avatarURL)
  kanal.send(embed);
  
});

client.on("messageDelete", message => {
  
  if (message.author.bot) return;
  
    

db.set(`atan_${message.channel.id}`, `${message.author.tag}`)
db.set(`mesaj_${message.channel.id}`, message.content)
  
  //if (!logA[message.guild.id]) return;
  
  var user = message.author;
  
  //var kanal = message.guild.channels.get(logA[message.guild.id].log);
  
  if (db.has(`log_${message.guild.id}`) === false) return;
  
  var kanal = message.guild.channels.get(db.fetch(`log_${message.guild.id}`))
  if (!kanal) return;
  
  const embed = new Discord.RichEmbed()
  .setColor("#01CFFE")
  .setAuthor(`Bir Mesaj Silindi!`, message.author.avatarURL)
  .addField("Kullanıcı Tag", message.author.tag, true)
  .addField("ID", message.author.id, true)
  .addField("Silinen Mesaj", "```" + message.content + "```")
  .setThumbnail(message.author.avatarURL)
  kanal.send(embed);
  
});

client.on("messageUpdate", async (oldMsg, newMsg) => {
  
  if (oldMsg.author.bot) return;
  
 // if (!logA[oldMsg.guild.id]) return;
  
  var user = oldMsg.author;
  
  //var kanal = oldMsg.guild.channels.get(logA[oldMsg.guild.id].log);
  
  if (db.has(`log_${oldMsg.guild.id}`) === false) return;
  
  var kanal = oldMsg.guild.channels.get(db.fetch(`log_${oldMsg.guild.id}`))
  if (!kanal) return;
  
  const embed = new Discord.RichEmbed()
  .setColor("#01CFFE")
  .setAuthor(`Bir Mesaj Düzenlendi!`, oldMsg.author.avatarURL)
  .addField("Kullanıcı Tag", oldMsg.author.tag, true)
  .addField("ID", oldMsg.author.id, true)
  .addField("Eski Mesaj", "```" + oldMsg.content + "```")
  .addField("Yeni Mesaj", "```" + newMsg.content + "```")
  .setThumbnail(oldMsg.author.avatarURL)
  kanal.send(embed);
  
});

client.on("roleCreate", role => {
  
 // if (!logA[role.guild.id]) return;
  
  if (db.has(`log_${role.guild.id}`) === false) return;
  
  var kanal = role.guild.channels.get(db.fetch(`log_${role.guild.id}`))
  if (!kanal) return;
  
  const embed = new Discord.RichEmbed()
  .setColor("#01CFFE")
  .setAuthor(`Bir Rol Oluşturuldu!`, role.guild.iconURL)
  .addField("Rol", `\`${role.name}\``, true)
  .addField("Rol Rengi Kodu", `${role.hexColor}`, true)
  kanal.send(embed);
  
});

client.on("roleDelete", role => {
  
 // if (!logA[role.guild.id]) return;
  
  if (db.has(`log_${role.guild.id}`) === false) return;
  
 var kanal = role.guild.channels.get(db.fetch(`log_${role.guild.id}`))
  if (!kanal) return;
  
  const embed = new Discord.RichEmbed()
  .setColor("#01CFFE")
  .setAuthor(`Bir Rol Kaldırıldı!`, role.guild.iconURL)
  .addField("Rol", `\`${role.name}\``, true)
  .addField("Rol Rengi Kodu", `${role.hexColor}`, true)
  kanal.send(embed);
  
});

client.on("roleUpdate", role => {
  
 // if (!logA[role.guild.id]) return;
  
  if (db.has(`log_${role.guild.id}`) === false) return;
  
  var kanal = role.guild.channels.get(db.fetch(`log_${role.guild.id}`))
  if (!kanal) return;
  
  const embed = new Discord.RichEmbed()
  .setColor("#01CFFE")
  .setAuthor(`Bir Rol Güncellendi!`, role.guild.iconURL)
  .addField("Rol", `\`${role.name}\``, true)
  .addField("Rol Rengi Kodu", `${role.hexColor}`, true)
  kanal.send(embed);
  
});

client.on('voiceStateUpdate', (oldMember, newMember) => {
  
 // if (!logA[oldMember.guild.id]) return;
  
  if (db.has(`log_${oldMember.guild.id}`) === false) return;
  
  var kanal = oldMember.guild.channels.get(db.fetch(`log_${oldMember.guild.id}`))
  if (!kanal) return;
  
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel

  if(oldUserChannel === undefined && newUserChannel !== undefined) {

    const embed = new Discord.RichEmbed()
    .setColor("#01CFFE")
    .setDescription(`${newMember.user.tag} adlı kullanıcı \`${newUserChannel.name}\` isimli sesli kanala giriş yaptı!`)
    kanal.send(embed);
    
  } else if(newUserChannel === undefined){

    const embed = new Discord.RichEmbed()
    .setColor("#01CFFE")
    .setDescription(`${newMember.user.tag} adlı kullanıcı bir sesli kanaldan çıkış yaptı!`)
    kanal.send(embed);
    
    
  }
});


// PROFİL SİSTEMİ BROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO BAŞLAR BU ARADA --------------------------------------------



// PROFİL SİSTEMİ BROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO BİTER BU ARADA ---------------------------------------------

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${chalk.red(files.length)} ${chalk.green("komut yüklenecek.")}`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`${chalk.green("Yüklenen komut:")} ${chalk.blue(props.help.name)}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.english = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  //log(`${chalk.red(files.length)} ${chalk.green("komut yüklenecek.")}`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    //log(`${chalk.green("Yüklenen komut:")} ${chalk.blue(props.help.name)}.`);
    client.english.set(props.help.enname, props)
  });
});

 client.ayar = db;
   




/*


require("./modüller/fonksiyonlar.js")(client);
client.config = require("./config.js");

client.on("ready", async () => {
  
  client.appInfo = await client.fetchApplication();
  setInterval( async () => {
    client.appInfo = await client.fetchApplication();
  }, 60000);
  
  require("./modüller/panel.js")(client); 
  
  console.log(`${chalk.green(client.user.username)}${chalk.red(",")} ${chalk.blue(client.guilds.size)} ${chalk.yellow("Sunucu'ya")} ${chalk.red("ve")} ${chalk.blue(client.users.size.toLocaleString())} ${chalk.yellow("Kullanıcı'ya")} ${chalk.red("hizmet veriyor!")}`)
  client.user.setStatus("dnd");
  client.user.setActivity(client.ayarlar.oynuyor, { type: 'PLAYING' });
  
})
*/
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};



client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
     
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};





 

  client.on("message", async msg => {
  
  const request = require('node-superfetch');
  const db = require('quick.db');
  
    
    

    
  if (msg.channel.type === "dm") return;
  if(msg.author.bot) return;  
  
  if (msg.content.length > 7) {
    
    db.add(`puancik_${msg.author.id + msg.guild.id}`, 1)
};

  if (db.fetch(`puancik_${msg.author.id + msg.guild.id}`) > 250) {
    
    db.add(`seviye_${msg.author.id + msg.guild.id}`, 1)
    
    msg.channel.send(`Tebrik ederim <@${msg.author.id}>! Seviye atladın ve **${db.fetch(`seviye_${msg.author.id + msg.guild.id}`)}** seviye oldun!`)
    
    db.delete(`puancik_${msg.author.id + msg.guild.id}`)
    
  };
});
/*
const DBL = require("dblapi.js");
const dbl = new DBL(client.ayarlar.dbltoken, client);


client.on('ready', () => {
   setInterval(() => {
        dbl.postStats(client.guilds.size);
  }, 1800);
   });

  dbl.getStats("516600125649453066").then(stats => {
    console.log('DBL ye gerekli verileri girdim.') // {"server_count":2,"shards":[]}
 });
*/


client.on('message', async msg => {
  
  if (!msg.guild) return;
  
  let prefix = await db.fetch(`prefix_${msg.guild.id}`) || "m!";
  
  var s = 'tr'
  var r = 'Destek Ekibi'
  var k = 'destek-kanalı'
    if(db.has(`dil_${msg.guild.id}`) === true) {
        var s = 'en'
        var r = 'Support Team'
        var k = 'support-channel'
    }
  const dil = s
  
  let rol = '';
  let kanal = '';
  
  if (db.has(`destekK_${msg.guild.id}`) === true) {
 kanal = msg.guild.channels.get(db.fetch(`destekK_${msg.guild.id}`)).name
  }
  
  if (db.has(`destekK_${msg.guild.id}`) === false) {
  kanal = k
  }
  
  if (db.has(`destekR_${msg.guild.id}`) === true) {
  rol = msg.guild.roles.get(db.fetch(`destekR_${msg.guild.id}`))
  }
  
  if (db.has(`destekR_${msg.guild.id}`) === false) {
  rol = r
  }
  
  const reason = msg.content.split(" ").slice(1).join(" ");
  if (msg.channel.name== kanal) {
     if (msg.author.bot) return;
    /*if (!msg.guild.roles.exists("name", rol)) return msg.reply(client[dil].desteksistem.rolyok.replace("{rol}", r)).then(m2 => {
            m2.delete(5000)});*/
    if (msg.guild.channels.find(c => c.name === `${client[dil].desteksistem.talep}-${msg.author.discriminator}`)) {
      
      msg.author.send(client[dil].desteksistem.aciktalepozel.replace("{kisi}", msg.author.tag).replace("{kanal}", `${msg.guild.channels.get(msg.guild.channels.find(c => c.name === `${client[dil].desteksistem.talep}-${msg.author.discriminator}`).id)}`))
      msg.guild.channels.find(c => c.name === `${client[dil].desteksistem.talep}-${msg.author.discriminator}`).send(client[dil].desteksistem.aciktalep.replace("{kisi}", msg.author.tag).replace("{sebep}", msg.content))
      
      msg.delete()
      return
    }
    if(msg.guild.channels.find(c => c.name === client[dil].desteksistem.kategori)) {
      msg.guild.createChannel(`${client[dil].desteksistem.talep}-${msg.author.discriminator}`, "text").then(c => {
      const category = msg.guild.channels.find(c => c.name === client[dil].desteksistem.kategori)
      c.setParent(category.id)
      let role = msg.guild.roles.find(r => r.name === rol.name);
      let role2 = msg.guild.roles.find(r => r.name === "@everyone");
      c.overwritePermissions(role, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      c.overwritePermissions(msg.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });

      const embed = new Discord.RichEmbed()
     .setColor('#01CFFE')
      .setAuthor(`${client.user.username} | Destek Sistemi`, client.user.avatarURL)
      .setTitle(`_Merhaba ${msg.author.username}!_`)
      .addField(`» Destek Talebi Hakkında Bilgilendirme «`, `Yetkililerimiz en yakın zamanda burada sorunun ile ilgilenecektir! \nDestek talebini kapatmak için \`${prefix}kapat\` yazabilir, \nSunucudaki tüm Destek Taleplerini kapatmak için ise \`${prefix}talepleri-kapat\` yazabilirsin!`)
      .addField(`» Destek Talebi Sebebi «`, `${msg.content}`, true)
      .addField(`» Destek Talebini Açan Kullanıcı «`, `<@${msg.author.id}>`, true)
      .setFooter(`${msg.guild.name} adlı sunucu ${client.user.username} Destek Sistemi'ni kullanıyor teşekkürler!`, msg.guild.iconURL)
      c.send({ embed: embed });
      c.send(`** @here | 📞Destek Talebi! ** \n**${msg.author.tag}** adlı kullanıcı \`${msg.content}\` sebebi ile Destek Talebi açtı!`)
      msg.delete()
      }).catch(console.error);
    }
  }

  if (msg.channel.name== kanal) {
    if(!msg.guild.channels.find(c => c.name === client[dil].desteksistem.kategori)) {
      msg.guild.createChannel(client[dil].desteksistem.kategori, 'category').then(category => {
      category.setPosition(1)
      let every = msg.guild.roles.find(c => c.name === "@everyone");
      category.overwritePermissions(every, {
        VIEW_CHANNEL: false,
        SEND_MESSAGES: false,
        READ_MESSAGE_HISTORY: false
      })
      msg.guild.createChannel(`${client[dil].desteksistem.talep}-${msg.author.discriminator}`, "text").then(c => {
      c.setParent(category.id)
      let role = msg.guild.roles.find(c => c.name === rol.name);
      let role2 = msg.guild.roles.find(c => c.name === "@everyone");
      c.overwritePermissions(role, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      c.overwritePermissions(msg.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });

      const embed = new Discord.RichEmbed()
    .setColor('#01CFFE')
      .setAuthor(`${client.user.username} | Destek Sistemi`, client.user.avatarURL)
      .setTitle(`_Merhaba ${msg.author.username}!_`)
     .addField(`» Destek Talebi Hakkında Bilgilendirme «`, `Yetkililerimiz en yakın zamanda burada sorunun ile ilgilenecektir! \nDestek talebini kapatmak için \`${prefix}kapat\` yazabilir, \nSunucudaki tüm Destek Taleplerini kapatmak için ise \`${prefix}talepleri-kapat\` yazabilirsin!`)
      .addField(`» Destek Talebi Sebebi «`, `${msg.content}`, true)
      .addField(`» Destek Talebini Açan Kullanıcı «`, `<@${msg.author.id}>`, true)
      .setFooter(`${msg.guild.name} adlı sunucu ${client.user.username} Destek Sistemi'ni kullanıyor teşekkürler!`, msg.guild.iconURL)
      c.send({ embed: embed });
      c.send(`** @here | 📞Destek Talebi! ** \n**${msg.author.tag}** adlı kullanıcı \`${msg.content}\` sebebi ile Destek Talebi açtı!`)
      msg.delete()
      }).catch(console.error);
    })
  }
}
})

client.on('message', async message => {
  
  if (!message.guild) return;
  
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || "m!";
  
  var s = 'tr'
  var r = 'Destek Ekibi'
    if(db.has(`dil_${message.guild.id}`) === true) {
        var s = 'en'
        var r = 'Support Team'
    }
  const dil = s
  
if (message.content.toLowerCase().startsWith(prefix + `kapat`)) {
  if (!message.channel.name.startsWith(`${client[dil].desteksistem.talep}-`)) return message.channel.send(`Bu komut sadece Destek Talebi kanallarında kullanılabilir.`);

  const embed = new Discord.RichEmbed()
 .setColor('#01CFFE')
  .setAuthor(`Destek Talebi Kapatma İşlemi!`)
  .setDescription(`Destek talebini kapatma işlemini onaylamak için, \n10 saniye içinde \`evet\` yazınız.`)
  .setFooter(`${client.user.username} | Destek Sistemi`, client.user.avatarURL)
  message.channel.send({embed})
  .then((m) => {
    message.channel.awaitMessages(response => response.content === 'evet', {
      max: 1,
      time: 10000,
      errors: ['time'],
    })
    .then((collected) => {
        message.channel.delete();
      })
      .catch(() => {
        m.edit('Destek talebi kapatma isteği zaman aşımına uğradı.').then(m2 => {
            m2.delete()
        }, 3000);
      });
  });
  }
  
});

client.on("message", async message => {
  
  if (!message.guild) return;
  
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || "m!";
  
  var s = 'tr'
  var r = 'Destek Ekibi'
    if(db.has(`dil_${message.guild.id}`) === true) {
        var s = 'en'
        var r = 'Support Team'
    }
  const dil = s
  
  if (message.content.toLowerCase().startsWith(`${prefix}talepleri-kapat`)) {
  
  if (!message.guild.channels.get(db.fetch(`destekK_${message.guild.id}`))) return;
  if (!message.guild.roles.get(db.fetch(`destekR_${message.guild.id}`))) return;
  
  if (db.has(`destekK_${message.guild.id}`) === true) {
  var kanal = message.guild.channels.get(db.fetch(`destekK_${message.guild.id}`)).name
  var rol = message.guild.roles.get(db.fetch(`destekR_${message.guild.id}`))
  }
  
  if (db.has(`destekK_${message.guild.id}`) === false) {
  var kanal = client[dil].desteksistem.kanal
  var rol = client[dil].desteksistem.rol
  }
    
  if (!message.channel.name.startsWith(`${client[dil].desteksistem.talep}-`)) return message.channel.send(`Bu komut sadece Destek Talebi kanallarında kullanılabilir.`);
    
  if(message.member.roles.has(rol.toString().replace("<@&", "").toString().replace(">", "")) === false) return message.reply(`Bu komutu sadece ${rol} rolüne sahip kullanıcılar kullanabilir!`);

  const embed = new Discord.RichEmbed()
 .setColor('#01CFFE')
  .setAuthor(`Tüm Destek Talepleri Kapatma İşlemi!`)
  .setDescription(`Tüm Destek taleplerini kapatma işlemini onaylamak için, \n10 saniye içinde \`evet\` yazınız.`)
  .setFooter(`${client.user.username} | Destek Sistemi`, client.user.avatarURL)
  message.channel.send({embed})
  .then((m) => {
    message.channel.awaitMessages(response => response.content === 'evet', {
      max: 1,
      time: 10000,
      errors: ['time'],
    })
    .then((collected) => {
   try {
    message.guild.channels.filter(c => c.name.startsWith('yardım-')).forEach(async (kanal, id) => {
     kanal.delete()
  });
  } catch(e){
      //console.log(e.stack);
  }
    })
      .catch(() => {
        m.edit('Tüm Destek taleblerini kapatma isteği zaman aşımına uğradı.').then(m2 => {
            m2.delete()
        }, 3000);
      });
  });
  }
  
});

client.on('message', message => {
var antiraid = db.fetch(`sunucular.${message.guild.id}.spamkoruma`)
if(!antiraid) return;
if(message.author.bot) return;
message.guild.fetchMember(message.author).then(member => {
if(member.hasPermission('BAN_MEMBERS')) return;
var b = []
var aut = []
setTimeout(() => {
message.channel.fetchMessages({ limit: 10 }).then(m => {
m.forEach(a => {
if(m.filter(v => v.content === a.content).size > m.size / 2) {
message.guild.fetchMember(m.author).then(member2 => {
if(member2.hasPermission('BAN_MEMBERS')) return;
b.push(a)
aut.push(a.author)
})}})
if(!b.includes(":warning: | Saldırgan botlar susturulacak.")) { işlem() }
else {}
  
function işlem() {

if(b.length > 5) {
  message.channel.send(':warning: | Saldırı yapan botlar susturulacak.')
  aut.forEach(a => {
    message.channel.overwritePermissions(a, {
      "SEND_MESSAGES": false
    })
  })
  message.channel.send('<a:sea:607177436139880470> Saldırı yapan botlar başarıyla **susturuldu**.')
} else return;
}
})})})})


client.on("message", msg => {
  if (!msg.guild) return;
  if (!kufurEngel[msg.guild.id]) return;
  if (kufurEngel[msg.guild.id].küfürEngel === 'kapali') return;
    if (kufurEngel[msg.guild.id].küfürEngel=== 'acik') {
      const kufur = ["mk", "göt", "amk","amq", "aq", "orospu", "oruspu", "oç", "sikerim", "yarrak", "piç", "amq", "sik", "amcık", "çocu", "sex", "seks", "amına", "orospu çocuğu", "sg", "siktir git"];
  if (kufur.some(word => msg.content.toLowerCase().includes(word)) ) {
    if (!msg.member.hasPermission("ADMINISTRATOR")) {
      msg.delete()
       msg.reply("Küfür filtresi, aktif!").then(message => message.delete(3000));
    }
}
    }
});
  


client.on("message", msg => { 
   const linkEngel = db.has(`linkE_${msg.guild.id}`)
  if (!msg.guild) return;
  if (!linkEngel) return;
    if (linkEngel === true) {
    var regex = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");
    if (regex.test(msg.content) == true) {
    if (!msg.member.hasPermission("BAN_MEMBERS")) {
      msg.delete()
               var e = new Discord.RichEmbed()
        .setColor("#01CFFE")
        .setDescription(`<:hata:637685816197382165> Bu sunucuda link paylaşımı yasak!`)
        msg.channel.send(e).then(message => message.delete(5000));
    }
}
    }
});




const sure = 3 //Komut bekleme süresi
const beklememesaji = `<:hata:637685816197382165> Bu komutu kullanabilmek için \`${sure}\` saniye kadar beklemelisiniz.` //Komut bekleme mesajı
const sahipbeklemesi = true //Sahip bekleme ayarı (false=kapalı, true=açık)
let yazma = new Set();

module.exports = message => {
  
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(ayarlar.prefix)) return;
  let command = message.content.split(' ')[0].slice(ayarlar.prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
    if (yazma.has(message.author.id)) {
      return message.channel.send(beklememesaji);
    }
  } else if (client.aliases.has(command)) {
    if (yazma.has(message.author.id)) {
      return message.channel.send(beklememesaji);
    }
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    if(sahipbeklemesi === false) {
      yazma.add(message.author.id);
    } if(sahipbeklemesi === true) {
      if(message.author.id === ayarlar.sahip) {
        cmd.run(client, message, params, perms);
        return true;
      }
    }
    setTimeout(() => {
      if(yazma.has(message.author.id)) {
        yazma.delete(message.author.id);
      }
    }, sure * 1000);
    cmd.run(client, message, params, perms);
  }

};



client.on("message", async message => {
    let uyarisayisi = await db.fetch(`reklamuyari_${message.author.id}`);
    let reklamkick = await db.fetch(`reklamkick_${message.guild.id}`)
    let kullanici = message.member;
    if (reklamkick == 'kapali') return;
    if (reklamkick == 'acik') {
        const reklam = [".ml", "discord.gg", "invite", "discordapp", "discordgg", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az","glitch.me","glitch.com"];
        if (reklam.some(word => message.content.toLowerCase().includes(word))) {
            if (!message.member.hasPermission("ADMINISTRATOR")) {
                message.delete();
                db.add(`reklamuyari_${message.author.id}`, 1) //uyarı puanı ekleme
                if (uyarisayisi === null) {
                    let uyari = new Discord.RichEmbed()
                        .setColor("#01CFFE")
                        .setFooter('Reklam Kick Sistemi', client.user.avatarURL)
                    .setTitle('Moly - Anti Reklam')
                        .setDescription(`<@${message.author.id}> reklam kick sistemine yakalandın. Reklam yapmaya devam edersen sunucudan atılacaksın. (1/3)`)
                        .setTimestamp()
                    message.channel.send(uyari)                
}
                if (uyarisayisi === 1) {
                    let uyari = new Discord.RichEmbed()
                        .setColor("#01CFFE")
                        .setFooter('Reklam kick sistemi', client.user.avatarURL)
                    .setTitle('Moly - Anti Reklam')
                        .setDescription(`<@${message.author.id}> reklam kick sistemine yakalandın. Reklam yapmaya devam edersen sunucudan atılacaksın. (2/3)`)
                        .setTimestamp()
                    message.channel.send(uyari)
                }
                if (uyarisayisi === 2) {
                    message.delete();
                    await kullanici.kick({
                        reason: `Reklam kick sistemi`,
                    })
                    let uyari = 
                    message.channel.send(`<:moly_check:637743464381153321> <@${message.author.id}> adlı üye 3 adet reklam uyarısı aldığı için sunucudan atıldı.`)
                }
                if (uyarisayisi === 3) {
                    message.delete();
                    await kullanici.ban({
                        reason: `Reklam ban sistemi`,
                    })
                    db.delete(`reklamuyari_${message.author.id}`)
                    let uyari =
                    message.channel.send(`<:moly_check:637743464381153321> ${message.author.username} sunucudan atıldıktan sonra tekrar devam ettiği için sunucudan yasaklandı.`)
                }
            }
        }
    }
});

client.on("message", async message => {
  const ms = require('parse-ms');
  if(message.author.bot) return;
  if(!message.guild) return;
  if(message.content.includes(`m!afk`)) return;
  
  if(await db.fetch(`afk_${message.author.id}`)) {
        let süre = await db.fetch(`afk_süre_${message.author.id}`);
    let timeObj = ms(Date.now() - süre);
    db.delete(`afk_${message.author.id}`);
    db.delete(`afk_süre_${message.author.id}`);
    message.channel.send("<:moly_check:637743464381153321>  Başarıyla AFK modundan çıktın."+" ``"+timeObj.hours+` saat `+timeObj.minutes +` dakika `+timeObj.seconds +`saniye `+"`` "+"süre boyunca AFK'ydın.");
  }
  
  var USER = message.mentions.users.first();
  if(!USER) return;
  var REASON = await db.fetch(`afk_${USER.id}`);
  
  if(REASON) {
    let süre = await db.fetch(`afk_süre_${USER.id}`);
    let timeObj = ms(Date.now() - süre);

        message.reply("<:moly_check:637743464381153321>  ``"+USER.username+"``"+" adlı kullanıcı "+"``"+REASON+"``"+" sebebiyle " +"``"+timeObj.hours+` saat `+timeObj.minutes +` dakika` +timeObj.seconds + `saniye`+"``"+ "'dır AFK.")
  }
});


client.ekoayarlar = {
  parabirimi: "TL",
  botunuzunprefixi: "f?",
  botunuzunidsi: "637300405264711694",
  botismi: "Real Fox",
  renk: client.ayarlar.renk, //İNGİLİZCE TERCİH ETTİĞİNİZ RENGİ YAZINIZ! EĞER BÖYLE BIRAKIRSANIZ RASTGELE ATAR!
  isimsiz: "Bilinmiyor", //İSİMSİZ KİŞİLERİN HANGİ İSİM İLE GÖZÜKECEĞİNİ BELİRLEYEBİLİRSİNİZ!
  rastgelepara: false, //EĞER BUNU TRUE YAPARSANIZ RASTGELE PARA VERME ÖZELLİĞİ AKTİF OLUR VE GÜNLÜK PARALARI RASTGELE VERİR!
  minpara: 10, //EĞER RASTGELE PARA DURUMUNU AKTİF ETTİYSENİZ BURADAN RASTGELE PARA PARAMETRESİNİNİN MİNUMUM PARASINI BELİRTİNİZ!
  maxpara: 200, //EĞER RASTGELE PARA DURUMUNU AKTİF ETTİYSENİZ BURADAN RASTGELE PARA PARAMETRESİNİNİN MAXİMUM PARASINI BELİRTİNİZ!
  günlükpara: 60, //EĞER RASTGELE PARAYI TRUE YAPTIYSANIZ BURAYI ELLEMENİZE GEREK YOK!
  dbloy: false, //EĞER BOTUNUZ DBL (DİSCORD BOT LİST) DE KAYITLIYSA GÜNLÜK ÖDÜL ALMAK İÇİN OY İSTER FALSE KAPALI, TRUE AKTİF DEMEK!
  dblkey: "KEY", //EĞER DBLOY U AKTİF ETMEDİYSENİZ BURAYA KEY EKLEMENİZE GEREK YOK EĞER AKTİF ETTİYSENİZ DBL SİTESİNDEN BULABİLİRSİNİZ!
  dblmsj: "Bu komutu kullanabilmek için bota oy vermelisiniz. Oy vermek için !oyver", //EĞER DBLOY U AKTİF ETMEDİYSENİZ BURAYA MESAJ YAZMANIZA GEREK YOK! EĞER AKTİF ETTİYSENİZ BOTA OY VERMEK İÇİN HANGİ MESAJI YAZACAĞINI AYARLAYABİLİRSİNİZ.
  başlangıçparası: 50, //EĞER RASTGELE PARAYI TRUE YAPTIYSANIZ BURAYI ELLEMENİZE GEREK YOK!
  admin: ["598227510010052608"]
}

client.on("message", async msg => {
const request = require('node-superfetch');
const db = require('quick.db');
const ms = require('parse-ms')
let timeout = 600000
let dakdest = await db.fetch(`goldzzz_${msg.author.id}`);
let i = db.fetch(`gold_${msg.author.id}`)
          if (i == 'gold') {
    if (dakdest !== null && timeout - (Date.now() - dakdest) > 0) {
        let time = ms(timeout - (Date.now() - dakdest));
    } else {
  if(msg.author.bot) return;   
  if (msg.content.length > 1) {
db.set(`goldzzz_${msg.author.id}`, Date.now());
   msg.channel.send('<a:golduyes:620284808077246533> | **Bir gold üye buraya ışınlandı!**')
  }
};
          }
   else if (i == undefined) {           
          }
          if (!i) return;
        
});

client.login("NjA5NDc2MjUxNzI3NTYwNzQ5.XcWeNQ.j-r6mxirxbwYzZPLMwSuSXPVsPM");
