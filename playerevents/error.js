const { MessageEmbed } = require('discord.js');

module.exports = async (client, channel, error) => {
    let embed = new MessageEmbed()
	.setColor(client.color.error)
	.setDescription(`An error occurred while playing the track.`)
	.setTimestamp()
	await channel.send({embeds: [embed]});
}