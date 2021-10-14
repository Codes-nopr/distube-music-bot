const { MessageEmbed } = require('discord.js');

module.exports = async (client, queue) => {
    return queue.textChannel.send({embeds: [new MessageEmbed().setColor(client.color.color).setDescription(`Finsied playing, no more tracks in queue.`)]});
}
