const { Client } = require('discord.js');
const bot = new Client();
const cfg = require('./config.json');
//Logs to console on startup and sets bot presence msg
bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag} (${bot.user.id}) on ${bot.guilds.size} servers.`);
  bot.user.setPresence({ game: { name: `on ${bot.guilds.size} servers.`, type: 0 } });
});

bot.on('message', msg => {
  //removes case-sensitivity and edits msg to give a better format in console
  if (msg.author.bot || !msg.content.startsWith(cfg.prefix)) return;
  const args = msg.content.slice(cfg.prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  //start of commands
  if (command === 'online') {
    bot.sendMessage(msg.channel, "Yes i am online");
  }
  //Voice
  if (!msg.guild) return;
  
  if (command === 'join') {
    if (msg.member.voiceChannel) {
      msg.member.voiceChannel.join()
        .then(connection => {
          msg.reply('Joined voice channel');
        })
        .catch(console.log);
    } else {
      msg.reply('You need to join a voice channel first!');
    }
  }
  //end of voice
  //end of commands
  //logs commands to console
  console.log(`Args: ${args}\nCommand: ${command}`);
});

//Bot Token (If hosting on heroku do not change)
bot.login(process.env.BOT_TOKEN);
