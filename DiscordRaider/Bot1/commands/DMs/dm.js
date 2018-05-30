const commando=require('discord.js-commando');
console.log("\n ~ Bot1 DM Online ");
var i=0;
const usr=require('./uid.json');
class dm extends commando.Command{
	constructor(client){
		super(client,{
			name: 'dm',
			group: 'dms',
			memberName: 'dm',
			description: 'DM the User'
		});
	}
	async run(message,args){
		message.delete();
		let member=message.mentions.members.first();
		if(message.author.id==usr.userid){
			if(!member)
				message.author.send("\n\n Please Mention someone to Raid");
			else{
				if(!args)
					messsage.author.send("\n Enter Message with the command");
				else{
					for(i=0;i<50;i++)
					member.send(args);
				}
			}
		}
	}
}module.exports=dm;
