const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	name: 'lyrics',
	aliases: ['ly', 'lyr'],

	async execute(client, message, args) {
		let track = args.join(' ');
		if (!track) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`Please provide a music name.`)]});

		await fetch(`https://some-random-api.ml/lyrics?title=${track}`)
		.then(res => res.json())
		.then(json => {
			if (json.error) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.color).setDescription(`There are no lyrics about this query.`)]});

			for (let i = 0; i < json.lyrics.length; i += 2000) {
				let substr = json.lyrics.substring(i, Math.min(json.lyrics.length, i + 2000));
				let embed = new MessageEmbed()
				.setColor(client.color.color)
				.setTitle(`${json.author } ${json.title}`)
				.setURL(json.links.genius)
				.setThumbnail(json.thumbnail.genius)
				.setDescription(substr)
				.setTimestamp()
				message.channel.send({embeds: [embed]});
			}
		}).catch(() => {
			message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`An error occurred while collecting lyrics...try again later.`)]});
		})
	}
}
