import { Client } from 'discord.js';
import 'dotenv/config';

// Discord token is required.
if (!process.env.DISCORD_TOKEN) {
	throw new Error('DISCORD_TOKEN environment variable missing.');
}

const onReady = () => {
	console.log('Connected');

	if (client.user) {
		console.log(`Logged in as ${client.user.tag}.`);
	}
};

const client = new Client({
	intents: ['Guilds', 'GuildMessages'],
});

client.on('ready', onReady);

const discordToken: string = process.env.DISCORD_TOKEN;

client.login(discordToken);
