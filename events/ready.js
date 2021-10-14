module.exports = async (client) => {
    console.log(`Ready`);
    client.user.setStatus('dnd');
}