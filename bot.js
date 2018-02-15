const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

var prefix = "Shifty/"
client.on('message', message => {
    if (message.author === client.user) return;
    if (message.content.startsWith(prefix + 'r u online')) {
        message.reply('yes, i am online and awaiting command');
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
