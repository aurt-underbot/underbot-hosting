const commando = require('discord.js-commando');
const discord = require('discord.js')

class InviteInfoCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'invite',
            group: 'info',
            memberName: 'invite',
            description: 'Shows the bot invite and support server invite',
        });
    }

    async run(message, args) {
        var Invites = new discord.RichEmbed()
        .addField("Bot Invite", "https://bit.ly/Underbot")
        .addField("Support Server Invite", "https://discord.gg/g4VtzDf")
        .setColor("#ffff00")

        message.channel.sendEmbed(Invites);

    }
}

module.exports = InviteInfoCommand;