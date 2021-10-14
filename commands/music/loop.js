const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'loop',
    aliases: [],

    async execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`You must be a voice channel before using this command.`)]});
		if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`You are not in same voice channel.`)]});
		if (!args[0]) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`You need to specify a mode name.`)]});
        
        try {
            switch (args[0]) {
                case 'on':
                    await client.distube.setRepeatMode(message, 1);
                    message.channel.send({embeds: [new MessageEmbed().setColor(client.color.color).setDescription(`Loop mode has been **enabled**.`)]});
                break;

                case 'off':
                    await client.distube.setRepeatMode(message, 0);
                    message.channel.send({embeds: [new MessageEmbed().setColor(client.color.color).setDescription(`Loop mode has been **disabled**.`)]});
                break;

                default:
                    message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`Specified mode is invalid.`)]});
                break;
            }
        } catch {
            return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.color).setDescription(`Currently no music is playing to loop.`)]});
        }
    }
}