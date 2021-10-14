const { MessageEmbed } = require('discord.js'); 

module.exports = async (client, message) => {
	let embed = new MessageEmbed()
	.setColor(client.color.color)
	.setDescription(`Search has been cancelled by author.`)
	await message.channel.send({embeds: [embed]});
}