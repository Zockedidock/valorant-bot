// Require the necessary discord.js classes
import { Client, Intents } from "discord.js"
const { token } = require("../../config.json")

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

// When the client is ready, run this code (only once)
client.once("ready", () => {
	console.log("Ready!")
})

client.on("interactionCreate", async (interaction: any) => {
	if (!interaction.isCommand()) return

	const { commandName } = interaction

	if (commandName === "ping") {
		await interaction.reply("Pong!")
	}
})

// Login to Discord with your client's token
client.login(token)
