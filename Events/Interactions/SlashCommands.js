const { ChatInputCommandInteraction } = require("discord.js");

module.exports = {
  name: "interactionCreate",
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  execute(interaction, client) {
    if (!interaction.isChatInputCommand()) return;

    const commands = client.command.get(interaction.commandName);
    if (!commands)
      return interaction.reply({
        content: "This command is outdated.",
        ephermal: true,
      });

    if (commands.developer && interaction.user.id !== "472161466590429185")
      return interaction.reply({
        content: "This copmmand is only available to the developer.",
        ephermal: true,
      });

      commands.execute(interaction, client);
  },
};