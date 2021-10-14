const { MessageEmbed } = require('discord.js'); 

module.exports = async (client, queue, song) => {
	let embed = new MessageEmbed()
	.setColor(client.color.color)
	.setDescription(`Queued [${song.name}](${song.url}) [${song.user}]`)
	await queue.textChannel.send({embeds: [embed]});
}
