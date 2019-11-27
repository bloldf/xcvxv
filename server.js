const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`https://carpal-marmot.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require("moment");
const zalgo = require("zalgolize");
const math = require("math-expression-evaluator");
const figlet = require("figlet");
const fs = require("fs");
const ms = require("ms");
const Canvas = require("canvas");
const jimp = require("jimp");
const prefix = "$";
var Client = client;



client.on('ready', () => {
  console.log('|===================================|');
  console.log(`|  Users Size ${client.users.size}  |`);
  console.log(`| Guilds Size ${client.guilds.size} |`);
  console.log(`|===================================|`);
  console.log(`| Created By <@488284776713945088> |`);
  console.log(`|===================================|`);
  console.log(`|        ArtBot Log By You !      |`);
  console.log(`|===================================|`);
});

client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setThumbnail(member.user.avatarURL)
.addField('**ID** :',"" +  member.user.id, true)
  .addField('**Create Account in ** :',member.user.createdAt, true)
  .addField('**You Unmber **',`**[ ${member.guild.memberCount} ]**`,true)
    .setDescription('** Welcome To USA Server **')
    .setColor('RANDOM')
    .setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
var channel =member.guild.channels.find('id', '601031014596476949')
if (!channel) return;
channel.send({embed : embed});
 
});
const welcome = JSON.parse(fs.readFileSync('./welcomer.json' , 'utf8'));
client.on('message', async message => {
    let messageArray = message.content.split(" ");
   if(message.content.startsWith(prefix + "setLeave")) {
             
    let filter = m => m.author.id === message.author.id;
    let thisMessage;
    let thisFalse;
 
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('You don\'t have permission').then(msg => {
       msg.delete(4500);
       message.delete(4500);
    });
   
    message.channel.send(':pencil: **| من فضلك اكتب الرساله الان... :pencil2: **').then(msg => {
 
        message.channel.awaitMessages(filter, {
          max: 1,
          time: 90000,
          errors: ['time']
        })
        .then(collected => {
            collected.first().delete();
            thisMessage = collected.first().content;
            let boi;
            msg.edit(':scroll: **| اكتب اسم الروم الان... :pencil2: **').then(msg => {
     
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
                })
                .then(collected => {
                    collected.first().delete();
                    boi = collected.first().content;
                    msg.edit('✅ **| تم الاعداد بنجاح...  **').then(msg => {
       
                      message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 90000,
                        errors: ['time']
                      })
                      let embed = new Discord.RichEmbed()
                      .setTitle('**Done The Leave Msg Code Has Been Setup**')
                      .addField('Message:', `${thisMessage}`)
                      .addField('Channel:', `${boi}`)
                      .setThumbnail(message.author.avatarURL)
                      .setFooter(`${client.user.username}`)
                     message.channel.sendEmbed(embed)
    welcome[message.guild.id] = {
leavechannel: boi,
leavemsg: thisMessage,
onoff: 'On',
leave: 'On'
    }
    fs.writeFile("./welcomer.json", JSON.stringify(welcome), (err) => {
    if (err) console.error(err)
  })
   }
            )
        })
    })
})
    })
}})
client.on('message', message => {
           if (!message.channel.guild) return;
 
    let room = message.content.split(" ").slice(1);
    let findroom = message.guild.channels.find('name', `${room}`)
    if(message.content.startsWith(prefix + "setWelcomer")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
if(!room) return message.channel.send('Please Type The Channel Name')
if(!findroom) return message.channel.send('Cant Find This Channel')
let embed = new Discord.RichEmbed()
.setTitle('**Done The Welcome Code Has Been Setup**')
.addField('Channel:', `${room}`)
.addField('Requested By:', `${message.author}`)
.setThumbnail(message.author.avatarURL)
.setFooter(`${client.user.username}`)
message.channel.sendEmbed(embed)
welcome[message.guild.id] = {
channel: room,
onoff: 'On',
by: 'On',
dm: 'Off',
leave: 'Off'
}
fs.writeFile("./welcomer.json", JSON.stringify(welcome), (err) => {
if (err) console.error(err)
})
    }})
   
 
            client.on('message', message => {
 
    if(message.content.startsWith(prefix + "toggleLeave")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
        if(!welcome[message.guild.id]) welcome[message.guild.id] = {
            onoff: 'Off',
          leave: 'Off'
        }
          if(welcome[message.guild.id].leave === 'Off') return [message.channel.send(`**The Leave Msg Is __𝐎𝐍__ !**`), welcome[message.guild.id].leave = 'On']
          if(welcome[message.guild.id].leave === 'On') return [message.channel.send(`**The Leave Msg Is __𝐎𝐅𝐅__ !**`), welcome[message.guild.id].leave = 'Off']
          fs.writeFile("./welcome.json", JSON.stringify(welcome), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            })
          }
         
        })
client.on('message', message => {
 
    if(message.content.startsWith(prefix + "toggleWelcome")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
        if(!welcome[message.guild.id]) welcome[message.guild.id] = {
          onoff: 'Off'
        }
          if(welcome[message.guild.id].onff === 'Off') return [message.channel.send(`**The Welcome Is __𝐎𝐍__ !**`), welcome[message.guild.id].onoff = 'On']
          if(welcome[message.guild.id].onoff === 'On') return [message.channel.send(`**The Welcome Is __𝐎𝐅𝐅__ !**`), welcome[message.guild.id].onoff = 'Off']
          fs.writeFile("./welcome.json", JSON.stringify(welcome), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            })
          }
         
        })
       
 
       
        client.on('message', message => {
 
    if(message.content.startsWith(prefix + "toggleDmwelcome")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
        if(!welcome[message.guild.id]) welcome[message.guild.id] = {
          dm: 'Off'
        }
          if(welcome[message.guild.id].dm === 'Off') return [message.channel.send(`**The Welcome Dm Is __𝐎𝐍__ !**`), welcome[message.guild.id].dm = 'On']
          if(welcome[message.guild.id].dm === 'On') return [message.channel.send(`**The Welcome Dm Is __𝐎𝐅𝐅__ !**`), welcome[message.guild.id].dm = 'Off']
          fs.writeFile("./welcome.json", JSON.stringify(welcome), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            })
          }
         
        })
 
        client.on('message', message => {
 
            if(message.content.startsWith(prefix + "toggleInvitedby")) {
                if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
                if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
                if(!welcome[message.guild.id]) welcome[message.guild.id] = {
                  by: 'Off'
                }
                  if(welcome[message.guild.id].by === 'Off') return [message.channel.send(`**The Invited By Is __𝐎𝐍__ !**`), welcome[message.guild.id].by = 'On']
                  if(welcome[message.guild.id].by === 'On') return [message.channel.send(`**The Invited By Is __𝐎𝐅𝐅__ !**`), welcome[message.guild.id].by = 'Off']
                  fs.writeFile("./welcome.json", JSON.stringify(welcome), (err) => {
                    if (err) console.error(err)
                    .catch(err => {
                      console.error(err);
                  });
                    })
                  }
                 
                })
      client.on("guildMemberRemove", member => {
            if(!welcome[member.guild.id]) welcome[member.guild.id] = {
          onoff: 'Off',
          leave: 'Off'
        }
       
        if(welcome[member.guild.id].onoff === 'Off') return;
                if(welcome[member.guild.id].leave === 'Off') return;
    let welcomer = member.guild.channels.find('name', `${welcome[member.guild.id].leavechannel}`)
    if(!welcomer) return;
     welcomer.send(`${member} ${welcome[member.guild.id].leavemsg}`);
      })          
 
client.on("guildMemberAdd", member => {
            if(!welcome[member.guild.id]) welcome[member.guild.id] = {
          onoff: 'Off'
        }
        if(welcome[member.guild.id].onoff === 'Off') return;
    let welcomer = member.guild.channels.find('name', `${welcome[member.guild.id].channel}`)
    let memberavatar = member.user.avatarURL
      if (!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let heroo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField('the join in : ',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:heroo});
     fs.writeFile("./welcome.json", JSON.stringify(welcome), (err) => {
        if (err) console.error(err)
        .catch(err => {
          console.error(err);
      });
        })
      }})
 
 
 
client.on('guildMemberAdd',async member => {
            if(!welcome[member.guild.id]) welcome[member.guild.id] = {
          onoff: 'Off'
        }
    if(welcome[member.guild.id].onoff === 'Off') return;
    const Canvas = require('canvas');
    const jimp = require('jimp');
    const w = ['./welcome_4.png'];
          let Image = Canvas.Image,
              canvas = new Canvas(800, 300),
              ctx = canvas.getContext('2d');
          ctx.patternQuality = 'bilinear';
          ctx.filter = 'bilinear';
          ctx.antialias = 'subpixel';
          ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
          ctx.shadowOffsetY = 2;
          ctx.shadowBlur = 2;
          ctx.stroke();
          ctx.beginPath();
   
          fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
              if (err) return console.log(err);
              let BG = Canvas.Image;
              let ground = new Image;
              ground.src = Background;
              ctx.drawImage(ground, 0, 0, 800, 300);
   
  })
   
                  let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
                  jimp.read(url, (err, ava) => {
                      if (err) return console.log(err);
                      ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                   if (err) return console.log(err);
   
            ctx.font = '36px Arial';
            ctx.fontSize = '72px';
            ctx.fillStyle = "#ffffff";
            ctx.textAlign = "center";
            ctx.fillText(member.user.username, 545, 177);
           
            ctx.font = '16px Arial Bold';
            ctx.fontSize = '72px';
            ctx.fillStyle = "#ffffff";
            ctx.textAlign = "center";
            ctx.fillText(`Your The Member ${member.guild.memberCount}`, 580, 200);
           
            let Avatar = Canvas.Image;
            let ava = new Avatar;
            ava.src = buf;
            ctx.beginPath();
            ctx.arc(169.5, 148, 126.9, -100, Math.PI * 2, true);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(ava, 36, 21, 260, 260);
             
            let c = member.guild.channels.find('name', `${welcome[member.guild.id].channel}`)
            if(!c) return;
            c.sendFile(canvas.toBuffer());
            fs.writeFile("./welcome.json", JSON.stringify(welcome), (err) => {
                if (err) console.error(err)
                .catch(err => {
                  console.error(err);
              });
                })
   
  });
  });
  });
 
  const invites = {};
 
const wait = require('util').promisify(setTimeout);
 
client.on('ready', () => {
  wait(1000);
 
  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});
 
client.on('guildMemberAdd', member => {
                    if(!welcome[member.guild.id]) welcome[member.guild.id] = {
                  by: 'Off'
                }
    if(welcome[member.guild.id].by === 'Off') return;
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const logChannel = member.guild.channels.find(channel => channel.name === `${welcome[member.guild.id].channel}`);
    if(!logChannel) return;
      setTimeout(() => {
    logChannel.send(`
welcome to ${guild.name}
you friend: <@${inviter.id}>
Ser: ${member}
`);{}
  },2000)
  fs.writeFile("./welcome.json", JSON.stringify(welcome), (err) => {
    if (err) console.error(err)
    .catch(err => {
      console.error(err);
  });
    });
  });
});
 
client.on("guildMemberAdd", member => {
                    if(!welcome[member.guild.id]) welcome[member.guild.id] = {
                  dm: 'Off'
                }
        if(welcome[member.guild.id].dm === 'Off') return;
  member.createDM().then(function (channel) {
  return channel.send(`Welcome
Name : ${member}  
Unmber : ${member.guild.memberCount}
You Views Inviter You In Room : <#564518323677823034> `)
}).catch(console.error)
fs.writeFile("./welcome.json", JSON.stringify(welcome), (err) => {
    if (err) console.error(err)
    .catch(err => {
      console.error(err);
  });
    })
})
client.on('message',  async  message  =>  {
      let  user  =  message.mentions.users.first();
      let  reason  =  message.content.split(' ').slice(2).join(' ');
    if(message.content.startsWith(prefix  +  'warn'))  {
      message.delete();
      if(!message.member.hasPermission('MUTE_MEMBERS')) return;
      if(!user)  return  message.channel.send("**-Mention an Member**")
      if(!reason)  return  message.channel.send("**-Type Reason**")
      let  reportembed  =  new  Discord.RichEmbed()
      .setTitle(`**New  Warned User !**`)
    .addField("**-Warned  User:**",  `[${user}] ID [${user.id}]`)
    .addField('**-Warned  By:**',`[${message.author.tag}] ID [${message.author.id}]`)  
    .addField('**-Reason:**',  `[${reason}]`,  true)
    .addField("**-Warned  in:**",`[${message.channel.name}]`)
    .addField("**-Time & Date:**",`[${message.createdAt}]`)
    .setFooter("Infinty")
  .setColor("#f3ae10")
    let incidentchannel = message.guild.channels.find(`name`, "log_warn");
    if(!incidentchannel) return message.channel.send("**Can't find Warns Channel! To Make Type \`setwarns\`To Make**");
    incidentchannel.send(reportembed);
    message.channel.send(`** ${user} has been warned !:warning:**`).then(msg  =>  msg.delete(3000));
    user.send(`** You are has been warned in ${message.guild.name} reason: ${reason} :warning:**`)
    }
    })
client.on('messageDelete', message => {
  if(message.channel.type === 'dm') return;
  if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
  if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
  var logChannel = message.guild.channels.find(c => c.name === 'log');
  if(!logChannel) return;
  message.guild.fetchAuditLogs().then(logs => {
    var by = logs.entries.first().executor.id;
    let msg = `\`\`\`${message}\`\`\``
    if(msg == '```') return;
  let messageDelete = new Discord.RichEmbed()
  .setColor('#36393e')
  .setDescription(`**:wastebasket: Message Deleted, sent by <@${message.author.id}> In : <#${message.channel.id}>**\n${msg}`)
  .setTimestamp()
  logChannel.send(messageDelete);
  })
});
client.on('messageUpdate', (oldMessage, newMessage) => {
  if(!oldMessage.channel.type === 'dm') return;
  if(oldMessage.author.bot) return;
  if(!oldMessage.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
  if(!oldMessage.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
  var logChannel = oldMessage.guild.channels.find(c => c.name === 'log');
  if(!logChannel) return;
  let omsg = `\`\`\`${oldMessage}\`\`\``
  let nmsg = `\`\`\`${newMessage}\`\`\``
  if(omsg == nmsg) return
  let messageUpdate = new Discord.RichEmbed()
  .setColor('#36393e')
  .addField(`**OLD**`,`${omsg}`)
  .addField(`**NEW**`,`${nmsg}`)
  .setDescription(`**:warning: Message edited,** sent by <@${oldMessage.author.id}> In : <#${oldMessage.channel.id}>`)
  .setTimestamp()
  logChannel.send(messageUpdate);
});
client.on('roleCreate', role => {
  if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
  if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
  var log = role.guild.channels.find(c => c.name === 'log');
  if(!log) return;
  role.guild.fetchAuditLogs().then(logs => {
      var userID = logs.entries.first().executor.id;
      let roleCreate = new Discord.RichEmbed()
      .setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588033107635208193/563111847692337174.png`)
      .setDescription(`**:fleur_de_lis: New Role has been created,\nRole : \`${role.name}\` :id: ${role.id}\nby : <@${userID}>**`)
      .setColor('#36393e')
      .setTimestamp()
      log.send(roleCreate);
  })
});
client.on('roleDelete', role => {
  if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
  if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
  var log = role.guild.channels.find(c => c.name === 'log');
  if(!log) return;
  role.guild.fetchAuditLogs().then(logs => {
      var userID = logs.entries.first().executor.id;
      let roleDelete = new Discord.RichEmbed()
      .setDescription(`**:fleur_de_lis: Role has been deleted,\nRole : \`${role.name}\` :id: ${role.id}\nby : <@${userID}>**`)
      .setColor('#36393e')
      .setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588033109178712074/563111850162520077.png`)
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL)
      log.send(roleDelete);
  })
});

client.login('NjQ0OTczNTczMzMyNTMzMjc2.XdAIsg.L3J1cobCbyGEfTHQrVHo24m62oI');

