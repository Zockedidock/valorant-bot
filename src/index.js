// Require the necessary discord.js classes
import { Client, Intents } from "discord.js"
import axios from "axios"
import * as env from "dotenv"

env.config()

const { TOKEN } = process.env

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

// When the client is ready, run this code (only once)
client.once("ready", () => {
	console.log("Ready!")
})

client.on("interactionCreate", async (interaction) => {
	if (!interaction.isCommand()) return

	const { commandName } = interaction

	if (commandName === "ping") {
		await interaction.reply("Pong!")
	}
	if (commandName === "info") {
		await interaction.reply("Der bot is noch net fertig!")
	}
	if (commandName === "shop") await getShop(interaction)
})

// Login to Discord with your client's token
client.login(TOKEN)

const getShop = async (interaction) => {
	console.log(interaction)
}
