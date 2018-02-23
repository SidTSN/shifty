//Constants and variables.
const { Client } = require('discord.js');
const bot = new Client();
const cfg = require('./config.json')

//Log to console on boot and sets bot presence.
bot.on('ready', () => 
{
  console.log(`Logged in as ${bot.user.tag} (${bot.user.id}) on ${bot.guilds.size} servers.`);
  bot.user.setPresence({ game: { name: `on ${bot.guilds.size} servers.`, type: 0 } });
});

//Commands.
bot.on('guildCreate', member => 
{
  const channel = member.guild.channels.find('name', 'arrivals-and-departures');
  if (!channel) return;
  channel.send(`${member} is here to give gifts and eat cookies and he is all out of cookies`);
});

bot.on('guildDelete', member => 
{
  const channel = member.guild.channels.find('name', 'arrivals-and-departures');
  if (!channel) return;
  channel.send(`${member} has left the server.`);
});

bot.on('guildMemberAdd', member => 
{
  const channel = member.guild.channels.find('name', 'arrivals-and-departures');
  if (!channel) return;
  channel.send(`${member} is here to give gifts and eat cookies and they are all out of cookies`);
});

bot.on('guildMemberRemove', member => 
{
  const channel = member.guild.channels.find('name', 'arrivals-and-departures');
  if (!channel) return;
  channel.send(`${member} has left the server.`);
});

bot.on('message', msg => 
{
  if (msg.author.bot || !msg.content.startsWith(cfg.prefix)) return;
  const args = msg.content.slice(cfg.prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  
  if (command === 'ruonline?') 
  {
    msg.channel.send('Pinging...').then(m => {
      m.edit(`Yes \`${Date.now() - msg.createdTimestamp} ms\``);
    });
  }
  console.log(`Args: ${args}\nCommand: ${command}`);
});

//Bot Token.
bot.login(process.env.BOT_TOKEN);
