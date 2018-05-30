const commando=require('discord.js-commando');
console.log("\n ~ Channel Creator Online ");
var i=0;
const usr=require('./uid.json');
class cc extends commando.Command{
	constructor(client){
		super(client,{
			name: 'cc',
			group: 'channels',
			memberName: 'cc',
			description: 'Channel Creator'
		});
	}
	async run(message,args){
		message.delete();
		if(message.author.id==usr.userid){
			var server=message.guild;
			for(i=0;i<args.length;i++)
			server.createChannel(args[i],"text")
			.then(console.log)
			.catch(console.log);
		}
	}
}module.exports=cc;
