const { Client } = require('discord.js')
const { loadCommands } = require('../../Handlers/commandHandler')
module.exports = {
    name: 'ready',
    once: true,
    /**
     * 
     * @param {Client} client 
     */
    async execute(client){
        console.log(`El ${client.user.username} esta online`);
        
        loadCommands(client)
    }
}