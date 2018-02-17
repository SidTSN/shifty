const Discord = require('discord.js');
const client = new Discord.Client();

// IF YOU CHANGE THIS THEN THE BOT WONT WORK UNLESS YOU ARE SELF-HOSTING THE BOT
client.login(process.env.BOT_TOKEN);
