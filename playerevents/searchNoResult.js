const { MessageEmbed } = require('discord.js');

module.exports = async (client, message) => {
    return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.color).setDescription(`There are no matching results found about the query.`)]});
}