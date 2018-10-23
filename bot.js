//Constants and variables.
const { Client } = require('discord.js');
const bot = new Client();
const cfg = require('./config.json')
//Bot Token.
bot.login(process.env.BOT_TOKEN);
