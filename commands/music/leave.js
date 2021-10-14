const { getVoiceConnection } = require('@discordjs/voice');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'leave',
    aliases: ['die', 'left', 'leftvc'],

    async execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`You must be a voice channel before using this command.`)]});
		if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`You are not in same voice channel.`)]});
		
        try {
            const connection = getVoiceConnection(message.guild.id);
            connection.destroy();
            await message.react('👋').catch(() => { });
        } catch { 
            return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`I'm not connected to the voice channel yet.`)]});
        }
    }
}