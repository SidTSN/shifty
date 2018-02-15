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

	if (message.content.startsWith(config.prefix + 'r u online')) {
		message.channel.sendMessage(`Yes, I am online! \`${Date.now() - message.createdTimestamp} ms\``);
	} else

	if (message.content.startsWith(config.prefix + 'send')) {
		client.channels.get('402386313548136448').sendMessage('Testing message sending to another channel.');
	} else

	if (message.content.startsWith(config.prefix + 'setgame')) {
		client.user.setGame(result);
	} else

	if (message.content.startsWith(config.prefix + 'setstatus')) {
		client.user.setStatus(result);
	} else

	if (message.content.startsWith(config.prefix + 'foo')) {
		message.channel.sendMessage('bar');
	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
