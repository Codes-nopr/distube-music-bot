module.exports = async (client, message) => {
    if (message.author.bot || !message.guild) return;
    let prefix = process.env.Prefix || '?';

    if (message.content.indexOf(prefix) !== 0) return;
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let command = args.shift().toLowerCase();
    let cmd = client.commands.get(command) || client.commands.find(c => c.aliases && c.aliases.includes(command));

    try {
        if (cmd) await cmd.execute(client, message, args);
    } catch (e) {
        console.error(e.stack);
    }
}