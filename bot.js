const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const newUsers = [];

client.on('ready', () => {
    console.log('I am ready!');
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  newUsers.set(member.id, member.user);

  if (newUsers.size > 1) {
    const defaultChannel = guild.channels.find(c=> c.permissionsFor(guild.me).has("SEND_MESSAGES"));
    const userlist = newUsers.map(u => u.toString()).join(" ");
    defaultChannel.send("Ladies and gentlemen please welcome\n" + userlist);
    newUsers.clear();
  }
});

client.on("guildMemberRemove", (member) => {
  if(newUsers.has(member.id)) newUsers.delete(member.id);
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  if (newUsers[guild.id].has(member.id)) newUsers.delete(member.id);
});

client.on('message', message => {
    let args = message.content.split(' ').slice(1);
    var result = args.join(' ');

	if (message.content === 'What is your prefix?') {
	        message.channel.sendMessage(config.prefix);
	}
	
	if (!message.content.startsWith(config.prefix)) return;
	if (message.author.bot) return;

	if (message.content.startsWith(config.prefix + 'R U Online')) {
		message.channel.sendMessage(`Yes, I am online! \`${Date.now() - message.createdTimestamp} ms\``);
	} else

	if (message.content.startsWith(config.prefix + 'Send')) {
		client.channels.get('402386313548136448').sendMessage('Testing message sending to another channel.');
	} else

	if (message.content.startsWith(config.prefix + 'SetGame')) {
		if (!result) result = null;
		client.user.setPresence({ game: { name: result, type: 0 } });
	} else
		
	if (message.content.startsWith(config.prefix + 'SetStatus')) {
		client.user.setStatus(result);
	}
		
	if (message.content.startsWith(config.prefix + 'Help')) {
		message.reply('What is your prefix? = Prefix Check \n R U Online = status check \n SetGame = set playing msg \n Set Status = set status msg \n COMMNANDS ARE CASE SENSITIVE')	
	}
});

// IF YOU CHANGE THIS THEN THE BOT WONT WORK UNLESS YOU ARE SELF-HOSTING THE BOT
client.login(process.env.BOT_TOKEN);
