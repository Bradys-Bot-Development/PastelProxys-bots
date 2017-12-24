const Discord = require('discord.js');

const TOKEN = "Mzk0MzE5NDc4OTI3Nzg1OTg0.DSCmKQ.wJ4yu8BaDcoHKNaf8iskL0W83Yo"
const PREFIX = "!";


var fortunes = [
    "Yes",
    "No",
    "Maybe",
    "HAHA NO!"
];

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Ready");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
        case "info":
            message.channel.sendMessage("A super dope bot created by `Brady#4847`");
            break;
        case "8ball":
            if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.channel.sendMessage("Can't read that");
            break;

        default:
            message.channel.sendMessage("Invalid Command. Please try again! `use !help for help`");
        }
    });

bot.login(TOKEN);
