const { Client, Partials,
    EmbedBuilder, ButtonBuilder,
    ActionRowBuilder, ButtonStyle,
    Collection, GatewayIntentBits } = require('discord.js')

const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;

const config = require('./config.json')

const { loadEvents } = require('./Handlers/eventHandler');

/* Configuración de conexión al servidor */
const client = new Client({
    intents: [Object.keys(GatewayIntentBits)],
    partials: [Object.keys(Partials)],
});

client.events = new Collection();
client.command = new Collection();
client.setMaxListeners(0);

/* Aquí se implementara las funcionalidades del Bot.*/

const prefix = `!`;

client.on("messageCreate", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    const messageArray = message.content.split(" ");
    const argument = messageArray.slice(1);
    const cmd = messageArray[0];

    if (command === `test`) {
        message.channel.send("El bot esta funcionando");
    }
});

client.on('messageCreate', async (message) => {
    if (message.content === '!ip') {
        return message.reply({ content: `¡Hola, el servidor se encuentra en desarrollo, dentro de poco estará on!` })
        /*return message.channel.send({content: `¡Hola, el servidor se encuentra en desarrollo, dentro de poco estará on!`})*/
    }

    if (message.content === '!ayuda') {
        return message.channel.send({ content: '¡Enseguida un <@&1146550423801573395> se pondrá en contacto contigo para ayudarte!\nSi deseas soporte o tienes mas dudas abre un ticket <#1146550425693204480>' });
    }

    if (message.content === '!faccionilegal') {
        const channelId = '1148402445047844965';
        const channel = message.guild.channels.cache.get(channelId);

        if (!channel) return console.error('No se encontró el canal.');

        const cartel = new EmbedBuilder()
            .setColor('#0023B3')
            .setTitle('𝘾𝘼𝙍𝙏𝙀𝙇𝙀𝙎')
            .setAuthor({ name: '𝑻𝑹𝑨𝑸𝑼𝑬𝑻𝑶𝑺 𝑹𝑷', iconURL: 'https://i.ibb.co/7zcj2hw/logo.png', url: 'https://discord.gg/ttEgKHU2Kn' })
            .setDescription('**Inicial $60**\n**Mensual $30**\n- Mapeo exclusivo\n- 3 Vehículos y 1 moto\n- Menú de jefe\n- Dinero inicial\n- Rangos IC\n- Armamento inicial\n- Menú F6\n- Menú F9 con territorio y reputación\n- Armario de ropa\n- Helicóptero y helipuerto\n- Armarios\n- **15 Slots**\n**𝑬𝑿𝑻𝑹𝑨𝑺**\n- Mejor helicoptero $5\n- Punto de crafteo de todas las armas y accesorios (Mensual) $15\n- Punto de droga (Mensual) $15\n- 2 Vehículos VIP (Precio según el vehículo) <#1146550426733387897>')
            .setThumbnail('https://i.ibb.co/7zcj2hw/logo.png')
            .setImage('https://i.ytimg.com/vi/UwHS1Ub1bVE/maxresdefault.jpg')
            .setTimestamp()
            .setFooter({ text: '𝑻𝑹𝑨𝑸𝑼𝑬𝑻𝑶𝑺 𝑹𝑷', iconURL: 'https://i.ibb.co/7zcj2hw/logo.png' });

        const mafia = new EmbedBuilder()
            .setColor('#0023B3')
            .setTitle('𝑴𝑨𝑭𝑰𝑨')
            .setAuthor({ name: '𝑻𝑹𝑨𝑸𝑼𝑬𝑻𝑶𝑺 𝑹𝑷', iconURL: 'https://i.ibb.co/7zcj2hw/logo.png', url: 'https://discord.gg/ttEgKHU2Kn' })
            .setDescription('**Inicial $45**\n**Mensual $20**\n- Mansión mediana\n- 2 Vehículos y 1 moto\n- Menú de jefe\n- Dinero inicial\n- Rangos IC\n- Armamento inicial\n- Menú F6\n- Menú F9 con territorio y reputación\n- Armario de ropa\n- Armarios\n- **10 Slots**\n**𝑬𝑿𝑻𝑹𝑨𝑺**\n- Punto de crafteo de armas cortas (Mensual) $7\n- 1 Vehículos VIP y 1 vanila (Precio según el vehículo) <#1146550426733387897>')
            .setThumbnail('https://i.ibb.co/7zcj2hw/logo.png')
            .setImage('https://img.gta5-mods.com/q95/images/the-mob/569895-20210924131301_1.jpg')
            .setTimestamp()
            .setFooter({ text: '𝑻𝑹𝑨𝑸𝑼𝑬𝑻𝑶𝑺 𝑹𝑷', iconURL: 'https://i.ibb.co/7zcj2hw/logo.png' });

        const banda = new EmbedBuilder()
            .setColor('#0023B3')
            .setTitle('𝘽𝘼𝙉𝘿𝘼')
            .setAuthor({ name: '𝑻𝑹𝑨𝑸𝑼𝑬𝑻𝑶𝑺 𝑹𝑷', iconURL: 'https://i.ibb.co/7zcj2hw/logo.png', url: 'https://discord.gg/ttEgKHU2Kn' })
            .setDescription('**Inicial $20**\n**Mensual $10**\n- Barrio (casa incluida)\n- 1 Vehículo y 1 moto\n- Menú de jefe\n- Dinero inicial\n- Rangos IC\n- Armamento inicial\n- Menú F6\n- Menú F9 con territorio y reputación\n- Armario de ropa\n- Armarios\n- **7 Slots**\n**𝑬𝑿𝑻𝑹𝑨𝑺**\n- 1 Vehículos VIP (Precio según el vehículo) <#1146550426733387897>')
            .setThumbnail('https://i.ibb.co/7zcj2hw/logo.png')
            .setImage('https://i.ytimg.com/vi/e4d6mIMqWfw/maxresdefault.jpg')
            .setTimestamp()
            .setFooter({ text: '𝑻𝑹𝑨𝑸𝑼𝑬𝑻𝑶𝑺 𝑹𝑷', iconURL: 'https://i.ibb.co/7zcj2hw/logo.png' });

        const mensaje = await channel.send({
            embeds: [cartel],
        });
        channel.send({ embeds: [mafia] })
        channel.send({ embeds: [banda] })
    }

    if (message.content === '!serveron') {
        const channelId = '1146550425332502532';
        const channel = message.guild.channels.cache.get(channelId);

        if (!channel) return console.error('No se encontró el canal.');

        const conectar = new ButtonBuilder()
            .setLabel('Conectarse')
            .setURL('https://cfx.re/join/e4brkd')
            .setStyle(ButtonStyle.Link);

        const embed = new EmbedBuilder()
            .setColor('#0023B3')
            .setTitle('¡SERVER ON!')
            .setURL('https://discord.gg/ttEgKHU2Kn')
            .setAuthor({ name: '𝑻𝑹𝑨𝑸𝑼𝑬𝑻𝑶𝑺 𝑹𝑷', iconURL: 'https://i.ibb.co/7zcj2hw/logo.png', url: 'https://discord.gg/ttEgKHU2Kn' })
            .setDescription('𝙇𝙖 𝙘𝙞𝙪𝙙𝙖𝙙 𝙨𝙚 𝙚𝙣𝙘𝙪𝙚𝙣𝙩𝙧𝙖 𝙖𝙗𝙞𝙚𝙧𝙩𝙖, 𝙖 𝙧𝙤𝙡𝙚𝙖𝙧\nPuedes conectarte a través de la consola.\n1. Presiona F8\n2. Pega esto connect cfx.re/join/e4brkd')
            .setThumbnail('https://i.ibb.co/7zcj2hw/logo.png')
            .setImage('https://media.tenor.com/YnJHWtfulDcAAAAC/server-on.gif')
            .setTimestamp()
            .setFooter({ text: 'El servidor se encuentra en línea y estable.', iconURL: 'https://i.ibb.co/7zcj2hw/logo.png' });

        const row = new ActionRowBuilder()
            .addComponents(conectar);

        const mensajeConBoton = await channel.send({
            content: '@everyone',
            embeds: [embed],
            components: [row],
        });
    }

    if (message.content === '!normas-discord') {
        const channelId = '1146550426167148573';
        const channel = message.guild.channels.cache.get(channelId);

        if (!channel) return console.error('No se encontró el canal.');

        const normas_discord = new EmbedBuilder()
            .setColor('#0023B3')
            .setTitle('𝗡𝗢𝗥𝗠𝗔𝗦 𝗗𝗘 𝗗𝗜𝗦𝗖𝗢𝗥𝗗')
            .setAuthor({ name: '𝑻𝑹𝑨𝑸𝑼𝑬𝑻𝑶𝑺 𝑹𝑷', iconURL: 'https://i.ibb.co/7zcj2hw/logo.png', url: 'https://discord.gg/ttEgKHU2Kn' })
            .setDescription('- Prohibida la toxicidad.\n- Prohibido spamear enlaces.\n- Prohibido el contenido +18.\n- Fomentar el respeto.\n- Hacer buen uso de los canales.\n**Aquellos que incumplan las normas serán aislados del discord.**')
            .setThumbnail('https://i.ibb.co/7zcj2hw/logo.png')
            .setTimestamp()
            .setFooter({ text: '𝑻𝑹𝑨𝑸𝑼𝑬𝑻𝑶𝑺 𝑹𝑷', iconURL: 'https://i.ibb.co/7zcj2hw/logo.png' });

        const mensajeConBoton = await channel.send({
            embeds: [normas_discord],
        });
    }

    if (message.content === '!recompensas-boost') {
        const channelId = '1146550426733387900';
        const channel = message.guild.channels.cache.get(channelId);

        if (!channel) return console.error('No se encontró el canal.');

        const normas_discord = new EmbedBuilder()
            .setColor('#0023B3')
            .setTitle('𝗥𝗘𝗖𝗢𝗠𝗣𝗘𝗡𝗦𝗔 𝗣𝗢𝗥 𝗕𝗢𝗢𝗦𝗧')
            .setAuthor({ name: '𝑻𝑹𝑨𝑸𝑼𝑬𝑻𝑶𝑺 𝑹𝑷', iconURL: 'https://i.ibb.co/7zcj2hw/logo.png', url: 'https://discord.gg/ttEgKHU2Kn' })
            .setDescription('**Por boostear el servidor una vez**\n- 𝑹𝒆𝒄𝒐𝒎𝒑𝒆𝒏𝒔𝒂 Dinero IC $5.000.000\n**Por boostear el servidor dos veces**\n- 𝑹𝒆𝒄𝒐𝒎𝒑𝒆𝒏𝒔𝒂 Dinero IC $10.000.000\n𝗙𝘂𝘁𝘂𝗿𝗮𝘀 𝗿𝗲𝗰𝗼𝗺𝗽𝗲𝗻𝘀𝗮𝘀 𝗽𝗼𝗿 𝗯𝗼𝗼𝘀𝘁')
            .setThumbnail('https://i.ibb.co/7zcj2hw/logo.png')
            .setImage('https://media2.giphy.com/media/59ADeszMVpHgNBe7Ju/giphy.gif?cid=6c09b952wkrx9n2ug9amp3jd55d6d8dm9gbadr0inur5fe7y&ep=v1_gifs_search&rid=giphy.gif&ct=s')
            .setTimestamp()
            .setFooter({ text: '𝑻𝑹𝑨𝑸𝑼𝑬𝑻𝑶𝑺 𝑹𝑷', iconURL: 'https://i.ibb.co/7zcj2hw/logo.png' });

        const mensaje = await channel.send({
            embeds: [normas_discord],
        });
    }

    if (message.content === '!msg-horas') {
        const channelId = '1148011296189583420';
        const channel = message.guild.channels.cache.get(channelId);

        if (!channel) return console.error('No se encontró el canal.');

        const msg_horas = new EmbedBuilder()
            .setColor('#0023B3')
            .setTitle('𝗛𝗢𝗥𝗔𝗦 𝗧𝗥𝗔𝗕𝗔𝗝𝗔𝗗𝗔𝗦')
            .setAuthor({ name: '𝑻𝑹𝑨𝑸𝑼𝑬𝑻𝑶𝑺 𝑹𝑷', iconURL: 'https://i.ibb.co/7zcj2hw/logo.png', url: 'https://discord.gg/ttEgKHU2Kn' })
            .setDescription('En este canal el <@&1146550423801573395> debe colocar un Ingreso y Egreso para contabilizar sus horas trabajadas. **El que abuse de esto se le colocara un WARN**\nAl staff que mas horas trabaje se le otorgara una recompensa (Una hamburguesa patrocinada por Mechas)')
            .setThumbnail('https://i.ibb.co/7zcj2hw/logo.png')
            .setTimestamp()
            .setFooter({ text: '𝑻𝑹𝑨𝑸𝑼𝑬𝑻𝑶𝑺 𝑹𝑷', iconURL: 'https://i.ibb.co/7zcj2hw/logo.png' });

        const mensaje = await channel.send({
            embeds: [msg_horas],
        });
    }

    if (message.content === '!disponible-wl') {
        const channelId = '1146550425009528879';
        const channel = message.guild.channels.cache.get(channelId);

        if (!channel) return console.error('No se encontró el canal.');

        const mensaje = await channel.send({
            content: `¡<@${message.author.id}> esta disponible para hacer la WhiteList! <@&1146550423772201050>!`,
        });
        message.reply({ content: 'Se ha avisado en <#1146550425009528879> que estas disponible para realizar la', ephemeral: true })
    }

    if (message.content === '!solicitar-wl') {
        const channelId = '1146550425009528879';
        const channel = message.guild.channels.cache.get(channelId);

        if (!channel) return console.error('No se encontró el canal.');

        const mensaje = await channel.send({
            content: `¡<@${message.author.id}> esta solicitando WhiteList <@&1146550423801573395>!`,
        });
    }

    if (message.content.match(/^!aprobar-wl(?:\s+(\d+))?$/)) {
        const channelId = '1146550425009528880';
        const channel = message.guild.channels.cache.get(channelId);

        const noWLId = '1146550423772201050';
        const noWL = message.guild.roles.cache.get(noWLId);

        const wLId = '1146550423772201051';
        const wL = message.guild.roles.cache.get(wLId);


        const [, id] = message.content.match(/^!aprobar-wl(?:\s+(\d+))?$/);
        try {
            const member = await message.guild.members.fetch(id); // Obtener el usuario con su ID

            const verificar = member.roles.cache.has('1146550423772201051'); // Reemplaza 'ID_DEL_ROL' con el ID del rol a verificar

            if (verificar) {
                message.reply({ content: `El usuario <@${id}> ya tiene la WhiteList` });
            } else {
                const mensaje = await channel.send({
                    content: `𝗙𝗘𝗟𝗜𝗖𝗜𝗧𝗔𝗖𝗜𝗢𝗡𝗘𝗦 ✅ <@${id}> ✅ 𝗛𝗔𝗦 𝗔𝗣𝗥𝗢𝗕𝗔𝗗𝗢 𝗟𝗔 𝗪𝗛𝗜𝗧𝗘𝗟𝗜𝗦𝗧 𝗗𝗘 𝗧𝗥𝗔𝗤𝗨𝗘𝗧𝗢𝗦 𝗥𝗣, 𝗡𝗢 𝗘𝗦𝗣𝗘𝗥𝗘𝗦 𝗠𝗔𝗦 𝗬 𝗘𝗡𝗧𝗥𝗔 𝗔 𝗥𝗢𝗟𝗘𝗔𝗥!`,
                });
                await member.roles.remove(noWL);
                await member.roles.add(wL);
            }
        } catch (error) {
            console.error('Error al obtener el miembro:', error);
            message.channel.send('No se pudo encontrar al usuario o se produjo un error.');
        }
    }

    if (message.content === '!normativa') {
        const channelId = '1146550426167148565';
        const channel = message.guild.channels.cache.get(channelId);

        if (!channel) return console.error('No se encontró el canal.');

        const normas_server = new EmbedBuilder()
            .setColor('#0023B3')
            .setTitle('𝗡𝗢𝗥𝗠𝗔𝗧𝗜𝗩𝗔 𝗚𝗘𝗡𝗘𝗥𝗔𝗟')
            .setAuthor({ name: '𝑻𝑹𝑨𝑸𝑼𝑬𝑻𝑶𝑺 𝑹𝑷', iconURL: 'https://i.ibb.co/7zcj2hw/logo.png', url: 'https://discord.gg/ttEgKHU2Kn' })
            .setDescription('Se adjunta el link con la normativa general, por favor leer la normativa para evitar sanciones futuras (warns y strikes). Cualquier falta a la normativa será sancionada.\nAntes de realizar la whitelist se recomienda leer la normativa general.\nhttps://drive.google.com/file/d/1-6KdqwNxOJSJntbdLGuk4praQLhGN4Mr/view?usp=sharing')
            .setThumbnail('https://i.ibb.co/7zcj2hw/logo.png')
            .setImage('https://i.ibb.co/7zcj2hw/logo.png')
            .setTimestamp()
            .setFooter({ text: '𝑻𝑹𝑨𝑸𝑼𝑬𝑻𝑶𝑺 𝑹𝑷', iconURL: 'https://i.ibb.co/7zcj2hw/logo.png' });

        const mensaje = await channel.send({
            embeds: [normas_server],
            content: '@everyone',
        });
    }

});

/* Finalización de la configuración*/

/* Conexión al servidor. */
client.login(config.token).then(async () => {
    console.log(`${client.user.username} Esta online.\n`);
    await loadEvents(client)
}).catch((err) => {
    console.log(err);
});