async function loadCommands(client) {
  const { loadFiles } = require('../Functions/fileLoader') 
  const ascii = require("ascii-table");
  const table = new ascii().setHeading("Commands", "Status");

  await client.command.clear();

  let commandsArray = [];

  const Files = await loadFiles("Commands");

  Files.forEach((file) => {
    const commands = require(file);
    client.command.set(commands.data.name, commands);
    commandsArray.push(commands.data.toJSON());

    table.addRow(commands.data.name, "🟩");
  }); 

  client.application.commands.set(commandsArray);

  return console.log(table.toString(), "\nCommands Loaded.");
}

module.exports = { loadCommands };