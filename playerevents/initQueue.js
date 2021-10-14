module.exports = async (client, queue) => {
    queue.autoplay = false;
    queue.volume = 100;
}