const { MessageEmbed } = require('discord.js');
const getAttachmentURL = (msg) => (msg.attachments.first() || {}).url;

module.exports = {
	name: 'play',
	aliases: ['p'],

	async execute (client, message, args) {
		if (!message.member.voice.channel) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`You must be a voice channel before using this command.`)]});
		if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`You are not in same voice channel.`)]});
		let query = args.join(' ') || getAttachmentURL(message);
		if (!query) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`To play a song you need to specify the music name.`)]})
		try { 
			await client.distube.play(message, query); 
		} catch { 
			return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`An error occurred while executing the command.`)]});
		}
    }
}
