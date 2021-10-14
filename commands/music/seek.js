const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'seek',
    aliases: ['fast'],

    async execute(client, message, args, song) {
        if (!message.member.voice.channel) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`You must be a voice channel before using this command.`)]});
		if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`You are not in same voice channel.`)]});
		
        let time = args[0];
        if (!time) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`To seek you must need to provide a time in seconds.`)]});
        if (isNaN(time)) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`Time value must be an integer.`)]});

        try {
            if (Number(time) > song.length)
            await client.distube.seek(message, Number(time));
            return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.color).setDescription(`Seeked to **${Number(time)}** second(s).`)]});
        } catch {
            return message.channel.send(new MessageEmbed().setColor(client.color.error).setDescription(`An error occurred while executing the command.`));
        }
    }
}