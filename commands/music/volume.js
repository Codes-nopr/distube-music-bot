const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'volume',
    aliases: ['vol'],

    async execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`You must be a voice channel before using this command.`)]});
		if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`You are not in same voice channel.`)]});
		let volume = args[0];
        if (isNaN(volume)) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`Volume limit must be an integer.`)]});
        if (parseInt(volume) < 0) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`Volume must be bigger than 0.`)]});
        if (parseInt(volume) > 150) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`Volume must be lower than 150.`)]});

        try {
            await client.distube.setVolume(message, parseInt(volume));
            return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.color).setDescription(`Volume changed to **${volume}**%.`)]});
        } catch {
            return message.channel.send(new MessageEmbed().setColor(client.color.error).setDescription(`Currently there are no music playing.`));
        }
    }
}