const { Client, Collection, Intents } = require('discord.js'),
      Distube = require('distube'),
      fs = require('fs');
	  require('dotenv').config();

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_VOICE_STATES,
	],
});

client.distube = new Distube.default(client, {
    searchSongs: 1,
    emitNewSongOnly: true,
    emitAddSongWhenCreatingQueue: false,
    leaveOnEmpty: true,
    leaveOnFinish: true,
    leaveOnStop: true,
    emptyCooldown: 10
});

client.commands = new Collection();
client.config = require('./others/botconfig');
client.emotes = client.config.emojis;
client.color = client.config.color;

const token = process.env.Token || new Error(`ERROR: You must need to provide bot token.`);
if (typeof token !== 'string') throw new TypeError(`ERROR: Token must be a valid string.`);

fs.readdirSync(`./commands`).forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`);

    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`Loading command: ${file}`);
        client.commands.set(command.name, command);
    };
});

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of events) {
    console.log(`Loaded event: ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split('.')[0], event.bind(null, client));
};

const player = fs.readdirSync(`./playerevents`).filter(file => file.endsWith(`.js`));

for (file of player) {
    console.log(`Loading player event: ${file}`);
    const event = require(`./playerevents/${file}`);
    client.distube.on(file.split('.')[0], event.bind(null, client));
};


client.login(process.env.Token);
