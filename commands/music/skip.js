const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'skip',
    aliases: ['next', 's'],

    async execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`You must be a voice channel before using this command.`)]});
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`You are not in same voice channel.`)]});
        if (!client.distube.getQueue(message)) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`Currently no music is playing to skip.`)]});
        try {
            await client.distube.skip(message);
            return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.color).setDescription(`Current song has been skipped.`)]})
        } catch (e) {
            return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`An error occurred while processing the command.`)]});
        }
    }
}