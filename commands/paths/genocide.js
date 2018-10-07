const commando = require('discord.js-commando');

class GenocidePathCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'genocide',
            group: 'paths',
            memberName: 'genocide',
            description: 'Tells about and how to trigger the Genocide ending in Undertale.',
        });
    }

    async run(message, args) {
        message.channel.sendMessage("```The Genocide run in Undertale is completed by killing ALL of the monsters avaliable in the game. To do this, you must not leave an area until you have encountered and killed all monsters in that area. This run is very difficult and time consuming, and Underbot reccomends the Genocide path to only the most experienced Undertale player. ```");
    }
}

module.exports = GenocidePathCommand;