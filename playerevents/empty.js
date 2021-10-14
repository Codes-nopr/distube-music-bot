const { MessageEmbed } = require('discord.js');

module.exports = async (client, queue) => {
    return queue.textChannel.send({embeds: [new MessageEmbed().setColor(client.color.color).setDescription(`Leaving voice channel, there are no more members.`)]});
}