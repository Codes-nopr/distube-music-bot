const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'autoplay',
	aliases: ['24', '24/7'],

	async execute(client, message, args) {
		if (!message.member.voice.channel) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`You must be a voice channel before using this command.`)]});
		if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`You are not in same voice channel.`)]});
		let mode = await client.distube.toggleAutoplay(message);
		return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.color).setDescription(`Autoplay mode has been ${mode ? "**enabled.**" : "**disabled.**"}`)]})		
	}
}