const commando=require('discord.js-commando');
console.log("\n ~ Message All Channels Online ");
var listCh=[];
const usr=require('./uid.json');
class mac extends commando.Command{
	constructor(client){
		super(client,{
			name: 'mac',
			group: 'channels',
			memberName: 'mac',
			description: 'Messages/Spams all  the channels in a guild'
		});
	}
	async run(message,args){
		message.delete();
		if(message.author.id==usr.userid){
			message.guild.channels.forEach(channel=>{
				listCh.push(channel.name);
				for(var i=0;i<args.length;i++)
				channel.send(args[i]);
			});
		}
	}
}module.exports=mac;
