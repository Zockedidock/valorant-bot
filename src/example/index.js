"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Require the necessary discord.js classes
const discord_js_1 = require("discord.js");
const { token } = require("../../config.json");
// Create a new client instance
const client = new discord_js_1.Client({ intents: [discord_js_1.Intents.FLAGS.GUILDS] });
// When the client is ready, run this code (only once)
client.once("ready", () => {
    console.log("Ready!");
});
client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand())
        return;
    const { commandName } = interaction;
    if (commandName === "ping") {
        await interaction.reply("Pong!");
    }
});
// Login to Discord with your client's token
client.login(token);
