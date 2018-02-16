const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
    console.log('I am ready!');
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
	} else
		
	if (message.content.startsWith(config.prefix + 'Help')) {
		message.reply('What is your prefix? = Prefix Check \n R U Online = status check \n SetGame = set playing msg \n Set Status = set status msg \n COMMNANDS ARE CASE SENSITIVE')	
	}
});

// IF YOU CHANGE THIS THEN THE BOT WONT WORK UNLESS YOU ARE SELF-HOSTING THE BOT
client.login(process.env.BOT_TOKEN);
