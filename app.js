// Require discord.js package
const Discord = require("discord.js");

// Create a new client using the new keyword
const client = new Discord.Client();

const {
    token
 } = require("./token.json");

// Create array for clean code
const stringarray = ["ready", "reconnecting", "disconnect", "message", "!hello", "!help"];

// Display a message when it comes online
client.on(stringarray[0], () => {
console.log(`Logged in as ${client.user.tag}!`);
});

//reconnecting event
client.on(stringarray[1], () => {
    console.log(`This Bot is reconnecting: ${client.user.tag}!`);
});

//disconnect event
client.on(stringarray[2], () => {
    console.log(`This bot is now disconnected: ${client.user.tag}!`);
});

//check for new message
client.on(stringarray[3],msg =>{
   const toLower =msg.content.toLowerCase(); 

    // Send Back a reply when the specific command has been written by a user.
    if (toLower === stringarray[4]){
        msg.reply("Hello! How Are You Today?");
    }

// !help command
else if ( toLower === stringarray[5]){
   msg.reply("The hello world bot has 2 Commands. !hello !help");
} 
});

// Log in the bot using your token (password)
client.login(token);    