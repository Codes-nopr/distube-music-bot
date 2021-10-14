const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'stop',
    aliase: ['die'],

    async execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`You must be a voice channel before using this command.`)]});
		if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`You are not in same voice channel.`)]});
		try {
            await client.distube.stop(message);
            return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.color).setDescription(`Music has been stopped.`)]});
        } catch {
            return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`There are currently no music playing.`)]});
        }
    }
}