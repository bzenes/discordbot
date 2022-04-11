const Discord = require("discord.js");
const client = new Discord.Client();

client.login("ODY3ODU2Mzg0MDQ4MzY1NTc4.YPnMPQ.cEjMA9eF36Ajm4YcV3Qvpq397Zs")

client.on("ready", () => {

    let sunucu = client.guilds.cache.get("349919344245080065")
    let role = sunucu.roles.cache.get("802139173041602581")
    var colors = ['f22929', 'f26229', 'f2a529', 'f2e129', 'cdf229', 'a5f229', '65f229', '29f22c', '29f269',
        '29f294', '29f2bc', '29f2f2', '29acf2', '2965f2', '2936f2', '4029f2', '5b29f2', '7d29f2', 'a229f2', 'ca29f2', 'f229e8', 'f22979', 'f22955'
    ];
    var renkSira = 0;

    setInterval(() => {
        role.edit({
            color: colors[renkSira]
        })
        if (renkSira == 23) {
            renkSira = 0
        }
        renkSira++;
    }, 1000);

})