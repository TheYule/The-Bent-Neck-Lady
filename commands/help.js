const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "help",
    descripton: "he zpscnjv rlb oep bliilg flnjvi",
    execute(message) {
        const client = message.client;
        const { commands } = client;
        const body = [];
        commands.map(command => {
            body.push("```" + command.name + " — " + (command.descripton || "no description") + "```")
        })
        const embed = new MessageEmbed()
            .setColor("BLURPLE")
            .setTitle("Help")
            .setAuthor("hrl fljh-jlsc bmdo", client.user.avatarURL(), "https://www.j.yoo-babobo.com/thang.ppnga/the_bent-neck_lady.php")
            .setDescription(body.join(""));
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId("thang.ppnga")
                    .setLabel("thang.ppnga")
                    .setEmoji("904329302353510460")
                    .setStyle("PRIMARY"),
                new MessageButton()
                    .setLabel("Invite")
                    .setStyle("LINK")
                    .setURL("https://discord.com/api/oauth2/authorize?client_id=904217269519917056&permissions=517543947328&scope=bot%20applications.commands"),
                new MessageButton()
                    .setLabel("Website")
                    .setStyle("LINK")
                    .setURL("https://www.j.yoo-babobo.com/thang.ppnga/the_bent-neck_lady.php")
            );
        message.channel.send({ embeds: [embed], components: [row] });
    }
}