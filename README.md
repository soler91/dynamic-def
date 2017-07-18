# Dynamic tera-data definitions

**This mod is for people that don't know what they are doing and go blind into defining packets, just like me.**

usage:
>!define PACKET_NAME VERSION

Will take the definition from the file def.json in the same folder as the index file, and generate the packet based on such definition, if version is left blank then it will default to 1.

Example:
>!define S_DUNGEON_COOL_TIME_LIST 1

def.json
```
[
	{"name":"dungeons","type":"count"},
	{"name":"dungeons","type":"offset"},
	{"name":"dungeons","type":[
	["id","int32"],
	["unknown","int32"],
	["cooldown","int32"],
	["entries","int16"]
	]}
]
``` 

It will create the definition for such packet and then proceed to hook and output `console.log(event)` when the packet is sent/received.

**Each time you make a change to def.json you must use the command `!define` again.

Then again this is a mostly useless since people that already know what they are doing have much better ways to do things.
