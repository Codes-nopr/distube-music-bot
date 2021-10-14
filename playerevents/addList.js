const { MessageEmbed } = require('discord.js'); 

module.exports = async (client, queue, playlist) => {
	let embed = new MessageEmbed()
	.setColor(client.color.color)
	.setDescription(`Queued [${playlist.name}](${playlist.url}) [${playlist.user}]`)
	await queue.textChannel.send({embeds: [embed]})
}
