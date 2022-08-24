

//don't forget to import token
const { Client, EmbedBuilder, GatewayIntentBits  } = require('discord.js')
const rm = require('./src/index')
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildEmojisAndStickers, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]})


client.on('messageCreate', message => {
    console.log(message.content);
    if(message.content == '!test') {
        
        //rm.reactions.back = '👈'
        //rm.reactions.next = '👉'
        new rm.menu({
            channel: message.channel,
            userID: message.author.id,
            pages: [
                 new EmbedBuilder().setTitle('title'),
                 new EmbedBuilder().setTitle('title 1'),
                 new EmbedBuilder().setTitle('title 2'),
                 new EmbedBuilder().setTitle('title 3'),
                 new EmbedBuilder().setTitle('title 4'),
            ]
        })
    }
});

client.login(token)

