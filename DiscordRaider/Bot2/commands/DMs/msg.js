const commando=require('discord.js-commando');
console.log("\n ~ Anonymous Messaging Online ");
const usr=require('./uid.json');
class msg extends commando.Command{
	constructor(client){
		super(client,{
			name: 'msg',
			group: 'dms',
			memberName: 'msg',
			description: 'Anonymously Message the Mentioned User'
		});
	}
	async run(message,args){
		let member=message.mentions.members.first();
		message.delete();
		if(message.author.id==usr.userid){
			member.send("\n\n ~~ **ANONYMOUS MESSAGE** ~~ ");
			member.send(args);
		}
	}
}module.exports=msg;
