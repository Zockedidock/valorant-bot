import { SlashCommandBuilder } from "@discordjs/builders";
import { REST } from "@discordjs/rest";
const { Routes } = require("discord.js");
const { clientId, guildId, token } = require("../../config.json");
const rest = new REST({ version: "10" }).setToken(token);
const commands = [
    new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Replies with pong!"),
].map((command) => command.toJSON());
rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    .then(() => console.log("Successfully registered application commands."))
    .catch(console.error);
