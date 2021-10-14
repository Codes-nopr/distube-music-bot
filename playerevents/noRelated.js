const { MessageEmbed } = require('discord.js');

module.exports = async (client, queue) => {
    let embed = new MessageEmbed()
    .setColor(client.color.color)
    .setDescription(`There are no releated track found to play.`)
    return queue.textChannel.send({embeds: [embed]});
}