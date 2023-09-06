const {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    EmbedBuilder,
  } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("sugerencia")
      .setDescription("Envia alguna recomendacion para 𝑻𝑹𝑨𝑸𝑼𝑬𝑻𝑶𝑺 𝑹𝑷")
      .addStringOption((option) =>
        option
          .setName(`sugerencia`)
          .setDescription(`Escribe aqui la sugerencia que deseas para mejorar el servidor 𝑻𝑹𝑨𝑸𝑼𝑬𝑻𝑶𝑺 𝑹𝑷`)
          .setRequired(true)
      ),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(interaction, client) {
      const sugerencia = interaction.options.getString(`sugerencia`);
  
      const { guild } = interaction;
  
      const channel = interaction.guild.channels.cache.find(
        (c) => c.id === `1146550425332502536`
      );
  
      const embed = new EmbedBuilder()
        .setTitle(`Sugerencia de ${interaction.user.username}`)
        .setColor(`#0023B3`)
        .setDescription(`${sugerencia}`)
        .setFooter({
          text: `${guild.name}`,
          iconURL: `${guild.iconURL({ dynamic: true })}`,
        });
  
      const message = await channel.send({
        embeds: [embed],
        fetchReply: true,
      });
  
      message.react(`✅`);
      message.react(`❌`);
  
      interaction.reply({
        content: `Tu sugerencia fue agregada con exito`,
        ephemeral: true,
      });
    },
  };