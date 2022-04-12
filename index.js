const Discord = require("discord.js");
const client = new Discord.Client();

client.login("") // bot token 

client.on("ready", () => {

    let sunucu = client.guilds.cache.get("") // sunucu id
    let role = sunucu.roles.cache.get("") // renginin değişmesi gereken rol id
    var colors = ['f22929', 'f26229', 'f2a529', 'f2e129', 'cdf229', 'a5f229', '65f229', '29f22c', '29f269',
        '29f294', '29f2bc', '29f2f2', '29acf2', '2965f2', '2936f2', '4029f2', '5b29f2', '7d29f2', 'a229f2', 'ca29f2', 'f229e8', 'f22979', 'f22955'
    ]; // hex cinsinden renk listesi
    var renkSira = 0;

    setInterval(() => {
        role.edit({
            color: colors[renkSira]
        })
        if (renkSira == 23) {
            renkSira = 0
        }
        renkSira++;
    }, 1000); // 1 saniyede bir değişmesini sağlıyor

})
