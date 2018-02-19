const { Client } = require('discord.js');
const bot = new Client();
const cfg = require('./config.json');
//Logs to console on startup and sets bot presence msg
bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag} (${bot.user.id}) on ${bot.guilds.size} servers.`);
  bot.user.setPresence({ game: { name: `on ${bot.guilds.size} servers.`, type: 0 } });
});
// client.on('',''=>{});
bot.on('guildDelete', guild => {
  guild.defaultChannel.sendMessage(`I have left ${guild.name} at ${new Date()}`);
});

bot.on('guildCreate', guild => {
  guild.defaultChannel.sendMessage(`I have joined ${guild.name}`);
});

bot.on('message', msg => {
  if (msg.author.bot || !msg.content.startsWith(cfg.prefix)) return;
  const args = msg.content.slice(cfg.prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  
  if (command === 'ruonline?') {
    msg.channel.send('Pinging...').then(m => {
      m.edit(`Yes \`${Date.now() - msg.createdTimestamp} ms\``);
    });
  }
  console.log(`Args: ${args}\nCommand: ${command}`);
});
//Bot Token (If hosting on heroku do not change)
bot.login(process.env.BOT_TOKEN);
