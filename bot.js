const { Client } = require('discord.js');
const bot = new Client();
const cfg = require('./config.json');
bot.on('ready', () => {
  console.log('Im Ready');
});

bot.on('message', msg => {
  console.log(msg.content);
});

// IF YOU CHANGE THIS THEN THE BOT WONT WORK UNLESS YOU ARE SELF-HOSTING THE BOT
bot.login(process.env.BOT_TOKEN);
