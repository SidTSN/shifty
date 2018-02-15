const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = require('./settings.json').prefix;

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    let args = message.content.split(' ').slice(1);
	var result = args.join(' ');

	if (message.content === 'What is your prefix?') {
	        message.channel.sendMessage(prefix);
	}
	
	if (!message.content.startsWith(prefix)) return;
	if (message.author.bot) return;

	if (message.content.startsWith(prefix + 'r u online')) {
		message.channel.sendMessage(`Yes, I am online! \`${Date.now() - message.createdTimestamp} ms\``);
	} else

	if (message.content.startsWith(prefix + 'send')) {
		client.channels.get('245491978601627648').sendMessage('Hello from second channel!');
	} else

	if (message.content.startsWith(prefix + 'setgame')) {
		if (!result) {
			result = null;
		}
		client.user.setGame(result);
	} else

	if (message.content.startsWith(prefix + 'setstatus')) {
		if (!result) {
			result = 'online';
		}
		client.user.setStatus(result);
	} else

	if (message.content.startsWith(prefix + 'foo')) {
		message.channel.sendMessage('bar');
	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
