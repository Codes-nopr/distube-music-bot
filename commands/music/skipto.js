const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'skipto',
	aliases: ['skto'],

	async execute(client, message, args) {
		if (!message.member.voice.channel) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`You must be a voice channel before using this command.`)]});
		if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`You are not in same voice channel.`)]});
		let jumpNum = args[0];
		if (!jumpNum) return message.channel.send(new MessageEmbed().setColor(client.color.error).setDescription(`Please provide song number to skip.`).setTimestamp());
		if (isNaN(jumpNum)) return message.channel.send(new MessageEmbed().setColor(client.color.error).setDescription(`Provided song number isn't a integer.`).setTimestamp());
		
        try { 
            await client.distube.jump(message, parseInt(jumpNum) - 1);
            return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.color).setDescription(`Track skipped to **${jumpNum}** number track.`).setTimestamp()]});
         } catch { 
            return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`An error occurred while processing the command.`)]}); 
        };
	}
}