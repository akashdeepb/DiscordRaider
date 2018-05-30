const Discord=require('discord.js-commando');
const bot=new Discord.Client({commandPrefix: '-'});
const usr=require(__dirname+'/cred.json');
bot.on("ready",async()=>{
		console.log("\n\n\t ~Raider BOT - 3   Online~       R u n n i n g \n\n");
	bot.user.setActivity("with DMs ");
});
bot.registry.registerGroup("dms","DMs");
bot.registry.registerGroup("channels","Channels");
bot.registry.registerGroup("x_x","X_X");
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname+"/commands");
bot.login(usr.token);
