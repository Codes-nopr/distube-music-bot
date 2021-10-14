const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'previous',
    aliases: ['before'],

    async execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`You must be a voice channel before using this command.`)]});
		if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`You are not in same voice channel.`)]});
		
        try {
            await client.distube.previous(message);
            return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.color).setDescription(`Previous song has been rewind.`)]});
        } catch {
            return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`There are no track in before playlist.`)]});
        }
    }
}