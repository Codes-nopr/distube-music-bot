const { MessageEmbed } = require('discord.js'); 

module.exports = async (client, queue, playlist, song) => {
	let embed = new MessageEmbed()
	.setColor(client.color.color)
	.setTitle(`Playlist playing`)
	.addField(`Playlist Name`, playlist.name)
	.addField(`Now Playing`, `[${song.name}](${song.url})`)
	await queue.textChannel.send({embeds: [embed]});
}
