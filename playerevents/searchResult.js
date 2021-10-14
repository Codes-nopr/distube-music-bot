const { MessageEmbed } = require('discord.js'); 

module.exports = async (client, message, result) => {
	let i = 0;
	let embed = new MessageEmbed()
	.setColor(client.color.color)
	.setDescription(`**Pick up a music which you want to play**\n\n${result.map(song => `**${++i}**. [${song.name}](${song.url}) | \`${song.formattedDuration}\``).join('\n')}\n\nEnter the number which you want to play. (You've 20 seconds)`)
	await message.channel.send({embeds: [embed]});
}
