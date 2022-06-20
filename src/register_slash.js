import { SlashCommandBuilder } from "@discordjs/builders"
import { REST } from "@discordjs/rest"
import * as env from "dotenv"
import { Routes } from "discord-api-types/v10"

env.config()

const { CLIENTID, GUILDID, TOKEN } = process.env

const rest = new REST({ version: "10" }).setToken(TOKEN)

const commands = [
	new SlashCommandBuilder()
		.setName("ping")
		.setDescription("Replies with pong!"),
	new SlashCommandBuilder().setName("info").setDescription("Info"),
	new SlashCommandBuilder()
		.setName("shop")
		.setDescription("Shows the current Valorant shop")
		.addStringOption((option) =>
			option
				.setName("username")
				.setDescription("Your Riot username")
				.setRequired(true)
		)
		.addStringOption((option) =>
			option
				.setName("password")
				.setDescription("Your Riot password")
				.setRequired(true)
		),
].map((command) => command.toJSON())

rest.put(Routes.applicationGuildCommands(CLIENTID, GUILDID), {
	body: commands,
})
	.then(() => console.log("Successfully registered application commands."))
	.catch(console.error)
