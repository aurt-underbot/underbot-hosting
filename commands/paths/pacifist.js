const commando = require('discord.js-commando');

class PacifistPathCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'pacifist',
            group: 'paths',
            memberName: 'pacifist',
            description: 'Tells about and how to trigger the Pacifist ending in Undertale.',
        });
    }

    async run(message, args) {
        message.channel.sendMessage("``` The pacifist route in Undertale is a playstyle in which you *spare* monsters instead of killing them. This is done by using the `act` button and trying different actions with them until they feel that you are friend instead of foe and allow you to *spare* them. Underbot reccomends you play this path first, as it's more stroyline-oriented than the others.```");
    }
}

module.exports = PacifistPathCommand;