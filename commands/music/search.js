const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'search',
    aliases: ['find'],

    async execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`You must be a voice channel before using this command.`)]});
		if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`You are not in same voice channel.`)]});
		
        let query = args.join(' ');
        if (!query) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`To search songs specify a query idea.`)]});
        let i = 0;

        try {
            await client.distube.search(query, {
                limit: 20,
                type: 'video',
                safeSearch: false,
            })
            .then(data => {
                let embed = new MessageEmbed()
                .setColor(client.color.color)
                .setDescription(`**Search results**\n\n${data.map(song => `**${++i}**. [${song.name}](${song.url}) | \`${song.formattedDuration}\``).join('\n')}`)
                .setTimestamp()

                return message.channel.send({embeds: [embed]});
            }).catch(() => {
                return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`There are no search results found about the query.`)]});
            })
        } catch {
            return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`An error occurred while processing the command.`)]});
        } 
    }
}