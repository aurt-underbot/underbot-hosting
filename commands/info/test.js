const commando = require('discord.js-commando');
const discord = require('discord.js')

class TestInfoCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'test',
            group: 'info',
            memberName: 'test',
            description: 'For aurt to try out new commands, will usually either not work or do something weird.',
        });
    }

    async run(message, args) {
        
        message.channel.send ("Have a Temmie for the time being.", {file: ["./test-pics/hOi i'M tEm!.jpeg"]
    });
        
        ;

    }
}

module.exports = TestInfoCommand;