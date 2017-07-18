const	{protocol} = require('tera-data-parser'),
		Command = require('command'),
		path = require('path'),
		fs = require('fs');

module.exports = function defs(dispatch) {
	const command = Command(dispatch)

	let hooks = [],
		definition = [],
		version = 1;

	command.add('define', (str,str2) => {
		command.message('Definition updated');
		
		if(str2){
			version = parseInt(str2);
		}
		else{
			version = 1;
		}
		
		delete require.cache[require.resolve('./def.json')]
		definition = require('./def.json');

		console.log(definition);
		if(definition.length > 0){
		console.log(definition.length);
		Unload();
		DefinePacket(definition,str);
		Start(str);
		}
	});
	
	function DefinePacket(def,name){
		let packet = [];
		console.log('definition:'+name);
		for(let i in def){
			packet.push([
				def[i].name,
				def[i].type
			]);
		}
		console.log(packet);
	packet.type = 'root';
	protocol.messages.set(name, new Map().set(version, packet));
	}
	
	function Start(name){
		console.log('hook:'+name);
	hook(name, version, (event) => {
	console.log(event);
	});
	}
	
	function hook() {
        hooks.push(dispatch.hook(...arguments))
    }
    
    function Unload() {
        if(hooks.length) {
            for(let h of hooks){
				dispatch.unhook(h)
			}

            hooks = []
        }
    }
}
