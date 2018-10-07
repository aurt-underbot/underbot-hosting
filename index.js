const commando = require('discord.js-commando');
const bot = new commando.Client();


bot.registry.registerGroup('paths', 'Paths');
bot.registry.registerGroup('info', 'Info');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('NDk4MjA3MDU0MTAwNDMwODU5.DpqX2A.Liv0eFfWxyQsOKgWVLxesKIKEGw');