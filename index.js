// import modules
require("dotenv").config();
const { Client,Intents } = require('discord.js');
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS, //Access to guild which is server
        Intents.FLAGS.GUILD_MESSAGES //Give access to messages inside of our client(bot) so inside of a guild we will be able to guild messages
    ]
});

// Event 
client.once("ready", () => {         //creates an arrow function that contains console.log("Bot is ready.");
    console.log("Bot is ready.");
});

// Command
client.on("messageCreate", message => {
    if (message.content.startsWith('!')) {
        if (message.content.substring(1) === "ping") {
            message.reply("Pong!");
        }
    }
});

client.login(process.env.TOKEN); //You can skip dotenv part and just make a string eg. client.login('YOUR_TOKEN'), create .env file declare the token variable eg. TOKEN=YOUR_TOKEN
