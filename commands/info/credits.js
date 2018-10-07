const commando = require('discord.js-commando');
const discord = require('discord.js')

class CreditsInfoCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'credits',
            group: 'info',
            memberName: 'credits',
            description: 'Gives a list of the bot contributors.',
        });
    }

    async run(message, args) {
        var credits = new discord.RichEmbed()
        .setTitle("Credits")    
        .setDescription("Everything: `aurt#6326`")
        .setColor("#ffff00")

        message.channel.sendEmbed(credits);

    }
}

module.exports = CreditsInfoCommand;