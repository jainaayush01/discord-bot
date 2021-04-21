require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client({
    partials: ["MESSAGE"]
});

const BOT_PREFIX = "!"
const MOD = "mod"
const UNMOD = "unmod"

client.on("ready", () => {
    console.log(`Bot ready,  ${client.user.tag}!`);
}); 

client.on("message", (msg) => {
    if (msg.member.id === "690857028641357885") {
        msg.react("💜")
    }
    if (msg.content === `${BOT_PREFIX}${MOD}`) {
        modUser(msg.member);
    }
    if (msg.content === `${BOT_PREFIX}${UNMOD}`) {
        unmodUser(msg.member);
    }
});

function modUser(member) {
    member.roles.add("834325161381199903");
}

function unmodUser(member) {
    member.roles.remove("834325161381199903");
}

client.login(process.env.BOT_TOKEN);
