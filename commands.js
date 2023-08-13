exports.commands = {
	"es_addbot": {
		"syntax": "es_addbot",
		"description": "Adds a bot to the game.",
		"command": "es_addbot",
		"parameters": []
	},
	"es_centermsg": {
		"syntax": "es_centermsg <message>",
		"description": "Displays a message in the center of players' screens.",
		"command": "es_centermsg",
		"parameters": [
			{
				"name": "message",
				"description": "message"
			}
		]
	},
	"es_changelevel": {
		"syntax": "es_changelevel <mapname>",
		"description": "Changes the current level to the specified map.",
		"command": "es_changelevel",
		"parameters": [
			{
				"name": "mapname",
				"description": "mapname"
			}
		]
	},
	"es_cmd": {
		"syntax": "es_cmd <userid> <command>",
		"description": "Sends a command to a player's client.",
		"command": "es_cmd",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "command",
				"description": "command"
			}
		]
	},
	"es_createbot": {
		"syntax": "es_createbot",
		"description": "Creates a bot in the game.",
		"command": "es_createbot",
		"parameters": []
	},
	"es_createteam": {
		"syntax": "es_createteam <teamname>",
		"description": "Creates a new team.",
		"command": "es_createteam",
		"parameters": [
			{
				"name": "teamname",
				"description": "teamname"
			}
		]
	},
	"es_delayed": {
		"syntax": "es_delayed <seconds> <command>",
		"description": "Executes a command after a specified delay.",
		"command": "es_delayed",
		"parameters": [
			{
				"name": "seconds",
				"description": "seconds"
			},
			{
				"name": "command",
				"description": "command"
			}
		]
	},
	"es_delayedkill": {
		"syntax": "es_delayedkill <taskname>",
		"description": "Kills a command after a specific delay.",
		"command": "es_delayedkill",
		"parameters": [
			{
				"name": "taskname",
				"description": "taskname"
			}
		]
	},
	"es_echo": {
		"syntax": "es_echo <message>",
		"description": "Displays a message to all players.",
		"command": "es_echo",
		"parameters": [
			{
				"name": "message",
				"description": "message"
			}
		]
	},
	"es_entitysetvalue": {
		"syntax": "es_entitysetvalue <entity index> <key> <value>",
		"description": "Sets a value on an entity.",
		"command": "es_entitysetvalue",
		"parameters": [
			{
				"name": "entity",
				"description": "entity"
			},
			{
				"name": "index",
				"description": "index"
			},
			{
				"name": "key",
				"description": "key"
			},
			{
				"name": "value",
				"description": "value"
			}
		]
	},
	"es_entitygetvalue": {
		"syntax": "es_entitygetvalue <entity index> <key>",
		"description": "Gets a value from an entity.",
		"command": "es_entitygetvalue",
		"parameters": [
			{
				"name": "entity",
				"description": "entity"
			},
			{
				"name": "index",
				"description": "index"
			},
			{
				"name": "key",
				"description": "key"
			}
		]
	},
	"es_event": {
		"syntax": "es_event <action> <eventname> [parameters]",
		"description": "Manipulates game events.",
		"command": "es_event",
		"parameters": [
			{
				"name": "action",
				"description": "action"
			},
			{
				"name": "eventname",
				"description": "eventname"
			},
			{
				"name": "parameters",
				"description": "parameters"
			}
		]
	},
	"es_exists": {
		"syntax": "es_exists <cvar|cmd|block> <name>",
		"description": "Checks the existence of a console variable, command, or block.",
		"command": "es_exists",
		"parameters": [
			{
				"name": "cvar|cmd|block",
				"description": "cvar|cmd|block"
			},
			{
				"name": "name",
				"description": "name"
			}
		]
	},
	"es_fire": {
		"syntax": "es_fire <entityname> <input> [parameter] [delay] [once]",
		"description": "Triggers an entity output.",
		"command": "es_fire",
		"parameters": [
			{
				"name": "entityname",
				"description": "entityname"
			},
			{
				"name": "input",
				"description": "input"
			},
			{
				"name": "parameter",
				"description": "parameter"
			},
			{
				"name": "delay",
				"description": "delay"
			},
			{
				"name": "once",
				"description": "once"
			}
		]
	},
	"es_flags": {
		"syntax": "es_flags <action> <userid> [flag]",
		"description": "Manipulates player admin flags.",
		"command": "es_flags",
		"parameters": [
			{
				"name": "action",
				"description": "action"
			},
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "flag",
				"description": "flag"
			}
		]
	},
	"es_force": {
		"syntax": "es_force <userid> <command>",
		"description": "Forces a player to execute a command.",
		"command": "es_force",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "command",
				"description": "command"
			}
		]
	},
	"es_get": {
		"syntax": "es_get <varname>",
		"description": "Retrieves a value from a variable.",
		"command": "es_get",
		"parameters": [
			{
				"name": "varname",
				"description": "varname"
			}
		]
	},
	"es_getcount": {
		"syntax": "es_getcount <entity class>",
		"description": "Counts entities of a certain type.",
		"command": "es_getcount",
		"parameters": [
			{
				"name": "entity",
				"description": "entity"
			},
			{
				"name": "class",
				"description": "class"
			}
		]
	},
	"es_getplayerlocation": {
		"syntax": "es_getplayerlocation <x> <y> <z> <userid>",
		"description": "Obtains the current coordinates of a given player and stores the X, Y, and Z coordinates in <x>, <y>, and <z>. ",
		"command": "es_getplayerlocation",
		"parameters": [
			{
				"name": "x",
				"description": "Variable in which the X coordinate of a player is stored "
			},
			{
				"name": "y",
				"description": "Variable in which the Y coordinate of a player is stored "
			},
			{
				"name": "z",
				"description": "Variable in which the Z coordinate of a player is stored "
			},
			{
				"name": "userid",
				"description": "UserID of the target player"
			}
		]
	},
	"es_getplayername": {
		"syntax": "es_getplayername <userid>",
		"description": "Retrieves the name of a player.",
		"command": "es_getplayername",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			}
		]
	},
	"es_getplayersteamid": {
		"syntax": "es_getplayersteamid <userid>",
		"description": "Retrieves the SteamID of a player.",
		"command": "es_getplayersteamid",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			}
		]
	},
	"es_give": {
		"syntax": "es_give <userid> <item>",
		"description": "Gives an item to a player.",
		"command": "es_give",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "item",
				"description": "item"
			}
		]
	},
	"es_god": {
		"syntax": "es_god <userid>",
		"description": "Toggles god mode for a player.",
		"command": "es_god",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			}
		]
	},
	"es_gotomap": {
		"syntax": "es_gotomap <mapname>",
		"description": "Changes the current map.",
		"command": "es_gotomap",
		"parameters": [
			{
				"name": "mapname",
				"description": "mapname"
			}
		]
	},
	"es_group": {
		"syntax": "es_group <action> [parameters]",
		"description": "Handles player groups.",
		"command": "es_group",
		"parameters": [
			{
				"name": "action",
				"description": "action"
			},
			{
				"name": "parameters",
				"description": "parameters"
			}
		]
	},
	"es_hint": {
		"syntax": "es_hint <userid> <message>",
		"description": "Displays a hint message to a player.",
		"command": "es_hint",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "message",
				"description": "message"
			}
		]
	},
	"es_info": {
		"syntax": "es_info <type> [parameters]",
		"description": "Displays player or server info.",
		"command": "es_info",
		"parameters": [
			{
				"name": "type",
				"description": "type"
			},
			{
				"name": "parameters",
				"description": "parameters"
			}
		]
	},
	"es_item": {
		"syntax": "es_item <action> [parameters]",
		"description": "Manages player items.",
		"command": "es_item",
		"parameters": [
			{
				"name": "action",
				"description": "action"
			},
			{
				"name": "parameters",
				"description": "parameters"
			}
		]
	},
	"es_keycreate": {
		"syntax": "es_keycreate <keygroup> <keyname>",
		"description": "Creates a key in a keygroup.",
		"command": "es_keycreate",
		"parameters": [
			{
				"name": "keygroup",
				"description": "keygroup"
			},
			{
				"name": "keyname",
				"description": "keyname"
			}
		]
	},
	"es_keydelete": {
		"syntax": "es_keydelete <keygroup> <keyname>",
		"description": "Deletes a key from a keygroup.",
		"command": "es_keydelete",
		"parameters": [
			{
				"name": "keygroup",
				"description": "keygroup"
			},
			{
				"name": "keyname",
				"description": "keyname"
			}
		]
	},
	"es_keyexists": {
		"syntax": "es_keyexists <keygroup> <keyname>",
		"description": "Checks if a key exists in a keygroup.",
		"command": "es_keyexists",
		"parameters": [
			{
				"name": "keygroup",
				"description": "keygroup"
			},
			{
				"name": "keyname",
				"description": "keyname"
			}
		]
	},
	"es_keyget": {
		"syntax": "es_keyget <keygroup> <keyname>",
		"description": "Gets a key value from a keygroup.",
		"command": "es_keyget",
		"parameters": [
			{
				"name": "keygroup",
				"description": "keygroup"
			},
			{
				"name": "keyname",
				"description": "keyname"
			}
		]
	},
	"es_keygroupcreate": {
		"syntax": "es_keygroupcreate <keygroup>",
		"description": "Creates a keygroup.",
		"command": "es_keygroupcreate",
		"parameters": [
			{
				"name": "keygroup",
				"description": "keygroup"
			}
		]
	},
	"es_keygroupdelete": {
		"syntax": "es_keygroupdelete <keygroup>",
		"description": "Deletes a keygroup.",
		"command": "es_keygroupdelete",
		"parameters": [
			{
				"name": "keygroup",
				"description": "keygroup"
			}
		]
	},
	"es_keygroupexists": {
		"syntax": "es_keygroupexists <keygroup>",
		"description": "Checks if a keygroup exists.",
		"command": "es_keygroupexists",
		"parameters": [
			{
				"name": "keygroup",
				"description": "keygroup"
			}
		]
	},
	"es_keygroupkeys": {
		"syntax": "es_keygroupkeys <keygroup>",
		"description": "Lists all keys in a keygroup.",
		"command": "es_keygroupkeys",
		"parameters": [
			{
				"name": "keygroup",
				"description": "keygroup"
			}
		]
	},
	"es_keygroupsize": {
		"syntax": "es_keygroupsize <keygroup>",
		"description": "Gets the number of keys in a keygroup.",
		"command": "es_keygroupsize",
		"parameters": [
			{
				"name": "keygroup",
				"description": "keygroup"
			}
		]
	},
	"es_keyset": {
		"syntax": "es_keyset <keygroup> <keyname> <value>",
		"description": "Sets a key value in a keygroup.",
		"command": "es_keyset",
		"parameters": [
			{
				"name": "keygroup",
				"description": "keygroup"
			},
			{
				"name": "keyname",
				"description": "keyname"
			},
			{
				"name": "value",
				"description": "value"
			}
		]
	},
	"es_keyvaluecount": {
		"syntax": "es_keyvaluecount <keygroup> <keyname>",
		"description": "Counts the values associated with a key.",
		"command": "es_keyvaluecount",
		"parameters": [
			{
				"name": "keygroup",
				"description": "keygroup"
			},
			{
				"name": "keyname",
				"description": "keyname"
			}
		]
	},
	"es_keyvalues": {
		"syntax": "es_keyvalues <keygroup> <keyname>",
		"description": "Lists all key values for a key in a keygroup.",
		"command": "es_keyvalues",
		"parameters": [
			{
				"name": "keygroup",
				"description": "keygroup"
			},
			{
				"name": "keyname",
				"description": "keyname"
			}
		]
	},
	"es_kill": {
		"syntax": "es_kill <userid>",
		"description": "Kills a specified player.",
		"command": "es_kill",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			}
		]
	},
	"es_load": {
		"syntax": "es_load <addon/config>",
		"description": "Loads an EventScripts add-on or config.",
		"command": "es_load",
		"parameters": [
			{
				"name": "addon/config",
				"description": "addon/config"
			}
		]
	},
	"es_log": {
		"syntax": "es_log <message>",
		"description": "Writes a message to the EventScripts log.",
		"command": "es_log",
		"parameters": [
			{
				"name": "message",
				"description": "message"
			}
		]
	},
	"es_mapcfg": {
		"syntax": "es_mapcfg <mapname>",
		"description": "Executes a map-specific config file.",
		"command": "es_mapcfg",
		"parameters": [
			{
				"name": "mapname",
				"description": "mapname"
			}
		]
	},
	"es_mapcycle": {
		"syntax": "es_mapcycle <action> [parameters]",
		"description": "Controls the map cycle.",
		"command": "es_mapcycle",
		"parameters": [
			{
				"name": "action",
				"description": "action"
			},
			{
				"name": "parameters",
				"description": "parameters"
			}
		]
	},
	"es_menu": {
		"syntax": "es_menu [parameters]",
		"description": "Displays a menu to a player.",
		"command": "es_menu",
		"parameters": [
			{
				"name": "parameters",
				"description": "parameters"
			}
		]
	},
	"es_msg": {
		"syntax": "es_msg [parameters]",
		"description": "Sends a message to players.",
		"command": "es_msg",
		"parameters": [
			{
				"name": "parameters",
				"description": "parameters"
			}
		]
	},
	"es_music": {
		"syntax": "es_music <filename>",
		"description": "Plays a specific music track.",
		"command": "es_music",
		"parameters": [
			{
				"name": "filename",
				"description": "filename"
			}
		]
	},
	"es_overlay": {
		"syntax": "es_overlay [parameters]",
		"description": "Displays an overlay to players.",
		"command": "es_overlay",
		"parameters": [
			{
				"name": "parameters",
				"description": "parameters"
			}
		]
	},
	"es_playsound": {
		"syntax": "es_playsound [parameters]",
		"description": "Plays a sound to all or specific players.",
		"command": "es_playsound",
		"parameters": [
			{
				"name": "parameters",
				"description": "parameters"
			}
		]
	},
	"es_position": {
		"syntax": "es_position <userid/entity index>",
		"description": "Gets the position of a player or entity.",
		"command": "es_position",
		"parameters": [
			{
				"name": "userid/entity",
				"description": "userid/entity"
			},
			{
				"name": "index",
				"description": "index"
			}
		]
	},
	"es_print": {
		"syntax": "es_print <message>",
		"description": "Prints a message to the server console.",
		"command": "es_print",
		"parameters": [
			{
				"name": "message",
				"description": "message"
			}
		]
	},
	"es_property": {
		"syntax": "es_property [parameters]",
		"description": "Gets or sets a property value of an entity.",
		"command": "es_property",
		"parameters": [
			{
				"name": "parameters",
				"description": "parameters"
			}
		]
	},
	"es_quit": {
		"syntax": "es_quit [restart]",
		"description": "Quits or restarts the server.",
		"command": "es_quit",
		"parameters": [
			{
				"name": "restart",
				"description": "restart"
			}
		]
	},
	"es_reload": {
		"syntax": "es_reload [addon]",
		"description": "Reloads EventScripts or a specific add-on.",
		"command": "es_reload",
		"parameters": [
			{
				"name": "addon",
				"description": "addon"
			}
		]
	},
	"es_remove": {
		"syntax": "es_remove <entity index>",
		"description": "Removes an entity from the game.",
		"command": "es_remove",
		"parameters": [
			{
				"name": "entity",
				"description": "entity"
			},
			{
				"name": "index",
				"description": "index"
			}
		]
	},
	"es_repeat": {
		"syntax": "es_repeat [parameters]",
		"description": "Repeats a command at specified intervals.",
		"command": "es_repeat",
		"parameters": [
			{
				"name": "parameters",
				"description": "parameters"
			}
		]
	},
	"es_repeatsay": {
		"syntax": "es_repeatsay [parameters]",
		"description": "Repeats a chat message at specified intervals.",
		"command": "es_repeatsay",
		"parameters": [
			{
				"name": "parameters",
				"description": "parameters"
			}
		]
	},
	"es_resetcvar": {
		"syntax": "es_resetcvar <cvar>",
		"description": "Resets a console variable to its default value.",
		"command": "es_resetcvar",
		"parameters": [
			{
				"name": "cvar",
				"description": "cvar"
			}
		]
	},
	"es_rslap": {
		"syntax": "es_rslap <userid> [force]",
		"description": "Randomly slaps players in different directions.",
		"command": "es_rslap",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "force",
				"description": "force"
			}
		]
	},
	"es_rsound": {
		"syntax": "es_rsound [parameters]",
		"description": "Plays a random sound from a list to specified players.",
		"command": "es_rsound",
		"parameters": [
			{
				"name": "parameters",
				"description": "parameters"
			}
		]
	},
	"es_say": {
		"syntax": "es_say <message>",
		"description": "Sends a message to all players in chat.",
		"command": "es_say",
		"parameters": [
			{
				"name": "message",
				"description": "message"
			}
		]
	},
	"es_sayfilter": {
		"syntax": "es_sayfilter [parameters]",
		"description": "Sets up or manages chat filters.",
		"command": "es_sayfilter",
		"parameters": [
			{
				"name": "parameters",
				"description": "parameters"
			}
		]
	},
	"es_saysounds": {
		"syntax": "es_saysounds [parameters]",
		"description": "Manages the say sound system.",
		"command": "es_saysounds",
		"parameters": [
			{
				"name": "parameters",
				"description": "parameters"
			}
		]
	},
	"es_score": {
		"syntax": "es_score <userid> <value>",
		"description": "Sets the score of a player.",
		"command": "es_score",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "value",
				"description": "value"
			}
		]
	},
	"es_sexec": {
		"syntax": "es_sexec <userid> <command>",
		"description": "Executes a command on a player's client.",
		"command": "es_sexec",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "command",
				"description": "command"
			}
		]
	},
	"es_set": {
		"syntax": "es_set <variable> <value>",
		"description": "Sets a server or user variable.",
		"command": "es_set",
		"parameters": [
			{
				"name": "variable",
				"description": "variable"
			},
			{
				"name": "value",
				"description": "value"
			}
		]
	},
	"es_setinfo": {
		"syntax": "es_setinfo <userid> <key> <value>",
		"description": "Sets player's info string.",
		"command": "es_setinfo",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "key",
				"description": "key"
			},
			{
				"name": "value",
				"description": "value"
			}
		]
	},
	"es_setsayfilter": {
		"syntax": "es_setsayfilter [parameters]",
		"description": "Sets up a say filter.",
		"command": "es_setsayfilter",
		"parameters": [
			{
				"name": "parameters",
				"description": "parameters"
			}
		]
	},
	"es_shake": {
		"syntax": "es_shake <userid> <intensity> <duration>",
		"description": "Shakes player's screen.",
		"command": "es_shake",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "intensity",
				"description": "intensity"
			},
			{
				"name": "duration",
				"description": "duration"
			}
		]
	},
	"es_slap": {
		"syntax": "es_slap <userid> <damage>",
		"description": "Slaps a player, causing minor damage.",
		"command": "es_slap",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "damage",
				"description": "damage"
			}
		]
	},
	"es_slot": {
		"syntax": "es_slot <slot>",
		"description": "Translates a player slot to a userid.",
		"command": "es_slot",
		"parameters": [
			{
				"name": "slot",
				"description": "slot"
			}
		]
	},
	"es_sound": {
		"syntax": "es_sound [parameters]",
		"description": "Plays a sound on the server.",
		"command": "es_sound",
		"parameters": [
			{
				"name": "parameters",
				"description": "parameters"
			}
		]
	},
	"es_spawn": {
		"syntax": "es_spawn <entity class>",
		"description": "Spawns an entity.",
		"command": "es_spawn",
		"parameters": [
			{
				"name": "entity",
				"description": "entity"
			},
			{
				"name": "class",
				"description": "class"
			}
		]
	},
	"es_spawnrandom": {
		"syntax": "es_spawnrandom [parameters]",
		"description": "Spawns a random entity from a list.",
		"command": "es_spawnrandom",
		"parameters": [
			{
				"name": "parameters",
				"description": "parameters"
			}
		]
	},
	"es_speed": {
		"syntax": "es_speed <userid> <speed multiplier>",
		"description": "Sets a player's movement speed.",
		"command": "es_speed",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "speed",
				"description": "speed"
			},
			{
				"name": "multiplier",
				"description": "multiplier"
			}
		]
	},
	"es_string": {
		"syntax": "es_string [parameters]",
		"description": "Manages string variables.",
		"command": "es_string",
		"parameters": [
			{
				"name": "parameters",
				"description": "parameters"
			}
		]
	},
	"es_stuck": {
		"syntax": "es_stuck <userid>",
		"description": "Attempts to free a stuck player.",
		"command": "es_stuck",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			}
		]
	},
	"es_suicide": {
		"syntax": "es_suicide <userid>",
		"description": "Forces a player to commit suicide.",
		"command": "es_suicide",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			}
		]
	},
	"es_tell": {
		"syntax": "es_tell <userid> <message>",
		"description": "Sends a private message to a player.",
		"command": "es_tell",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "message",
				"description": "message"
			}
		]
	},
	"es_time": {
		"syntax": "es_time",
		"description": "Returns the current server time in seconds.",
		"command": "es_time",
		"parameters": []
	},
	"es_unload": {
		"syntax": "es_unload <addon/config>",
		"description": "Unloads an EventScripts addon or config.",
		"command": "es_unload",
		"parameters": [
			{
				"name": "addon/config",
				"description": "addon/config"
			}
		]
	},
	"es_userget": {
		"syntax": "es_userget <userid> <key>",
		"description": "Retrieves a value from a user's private database.",
		"command": "es_userget",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "key",
				"description": "key"
			}
		]
	},
	"es_userset": {
		"syntax": "es_userset <userid> <key> <value>",
		"description": "Sets a value in a user's private database.",
		"command": "es_userset",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "key",
				"description": "key"
			},
			{
				"name": "value",
				"description": "value"
			}
		]
	},
	"es_votekick": {
		"syntax": "es_votekick <userid>",
		"description": "Initiates a vote to kick a player.",
		"command": "es_votekick",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			}
		]
	},
	"es_voteban": {
		"syntax": "es_voteban <userid>",
		"description": "Initiates a vote to ban a player.",
		"command": "es_voteban",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			}
		]
	},
	"es_votemap": {
		"syntax": "es_votemap <mapname>",
		"description": "Initiates a vote to change the map.",
		"command": "es_votemap",
		"parameters": [
			{
				"name": "mapname",
				"description": "mapname"
			}
		]
	},
	"es_xdoblock": {
		"syntax": "es_xdoblock <filename>",
		"description": "Executes a block of commands from an external file.",
		"command": "es_xdoblock",
		"parameters": [
			{
				"name": "filename",
				"description": "filename"
			}
		]
	},
	"es_xexists": {
		"syntax": "es_xexists <filename/directory>",
		"description": "Checks if an external file or directory exists.",
		"command": "es_xexists",
		"parameters": [
			{
				"name": "filename/directory",
				"description": "filename/directory"
			}
		]
	},
	"es_xload": {
		"syntax": "es_xload <filename>",
		"description": "Loads an external script file.",
		"command": "es_xload",
		"parameters": [
			{
				"name": "filename",
				"description": "filename"
			}
		]
	},
	"es_xmath": {
		"syntax": "es_xmath [parameters]",
		"description": "Performs mathematical operations.",
		"command": "es_xmath",
		"parameters": [
			{
				"name": "parameters",
				"description": "parameters"
			}
		]
	},
	"es_xrandom": {
		"syntax": "es_xrandom <min> <max>",
		"description": "Generates a random number.",
		"command": "es_xrandom",
		"parameters": [
			{
				"name": "min",
				"description": "min"
			},
			{
				"name": "max",
				"description": "max"
			}
		]
	},
	"es_xset": {
		"syntax": "es_xset <variable> <value>",
		"description": "Sets an extended variable.",
		"command": "es_xset",
		"parameters": [
			{
				"name": "variable",
				"description": "variable"
			},
			{
				"name": "value",
				"description": "value"
			}
		]
	},
	"es_xsexec": {
		"syntax": "es_xsexec <userid> <filename>",
		"description": "Executes an external script for a specific player.",
		"command": "es_xsexec",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "filename",
				"description": "filename"
			}
		]
	},
	"es_xuid": {
		"syntax": "es_xuid <userid>",
		"description": "Retrieves the XUID of a player.",
		"command": "es_xuid",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			}
		]
	},
	"est_ban": {
		"syntax": "est_ban <userid> <minutes> <reason>",
		"description": "Bans a player.",
		"command": "est_ban",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "minutes",
				"description": "minutes"
			},
			{
				"name": "reason",
				"description": "reason"
			}
		]
	},
	"est_burn": {
		"syntax": "est_burn <userid> <time>",
		"description": "Burns a player.",
		"command": "est_burn",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "time",
				"description": "time"
			}
		]
	},
	"est_command": {
		"syntax": "est_command <userid> <command>",
		"description": "Executes a command as a player.",
		"command": "est_command",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "command",
				"description": "command"
			}
		]
	},
	"est_effect": {
		"syntax": "est_effect [parameters]",
		"description": "Displays a visual effect to a player.",
		"command": "est_effect",
		"parameters": [
			{
				"name": "parameters",
				"description": "parameters"
			}
		]
	},
	"est_emit": {
		"syntax": "est_emit <entity> <sound>",
		"description": "Emits a sound from an entity.",
		"command": "est_emit",
		"parameters": [
			{
				"name": "entity",
				"description": "entity"
			},
			{
				"name": "sound",
				"description": "sound"
			}
		]
	},
	"est_equipment": {
		"syntax": "est_equipment <userid> [parameters]",
		"description": "Gives equipment to a player.",
		"command": "est_equipment",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "parameters",
				"description": "parameters"
			}
		]
	},
	"est_freeze": {
		"syntax": "est_freeze <userid> <0/1>",
		"description": "Freezes or unfreezes a player.",
		"command": "est_freeze",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "0/1",
				"description": "0/1"
			}
		]
	},
	"est_gag": {
		"syntax": "est_gag <userid> <0/1>",
		"description": "Gags or ungags a player.",
		"command": "est_gag",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "0/1",
				"description": "0/1"
			}
		]
	},
	"est_gib": {
		"syntax": "est_gib <userid>",
		"description": "Causes a player to explode into gibs.",
		"command": "est_gib",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			}
		]
	},
	"est_give": {
		"syntax": "est_give <userid> <item>",
		"description": "Gives an item to a player.",
		"command": "est_give",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "item",
				"description": "item"
			}
		]
	},
	"est_glow": {
		"syntax": "est_glow <userid> [parameters]",
		"description": "Makes a player glow with a specific color.",
		"command": "est_glow",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "parameters",
				"description": "parameters"
			}
		]
	},
	"est_health": {
		"syntax": "est_health <userid> <amount>",
		"description": "Sets a player's health.",
		"command": "est_health",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "amount",
				"description": "amount"
			}
		]
	},
	"est_hint": {
		"syntax": "est_hint <userid> <message>",
		"description": "Shows a hint message to a player.",
		"command": "est_hint",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "message",
				"description": "message"
			}
		]
	},
	"est_infect": {
		"syntax": "est_infect <userid> [parameters]",
		"description": "Infects a player.",
		"command": "est_infect",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "parameters",
				"description": "parameters"
			}
		]
	},
	"est_invisibility": {
		"syntax": "est_invisibility <userid> <alpha>",
		"description": "Sets a player's invisibility.",
		"command": "est_invisibility",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "alpha",
				"description": "alpha"
			}
		]
	},
	"est_jetpack": {
		"syntax": "est_jetpack <userid> <0/1>",
		"description": "Gives or removes a jetpack from a player.",
		"command": "est_jetpack",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "0/1",
				"description": "0/1"
			}
		]
	},
	"est_kill": {
		"syntax": "est_kill <userid>",
		"description": "Kills a player.",
		"command": "est_kill",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			}
		]
	},
	"est_message": {
		"syntax": "est_message <userid> <message>",
		"description": "Displays a HUD message to a player.",
		"command": "est_message",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "message",
				"description": "message"
			}
		]
	},
	"est_mute": {
		"syntax": "est_mute <userid> <0/1>",
		"description": "Mutes or unmutes a player.",
		"command": "est_mute",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "0/1",
				"description": "0/1"
			}
		]
	},
	"est_noclip": {
		"syntax": "est_noclip <userid> <0/1>",
		"description": "Toggles noclip for a player.",
		"command": "est_noclip",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "0/1",
				"description": "0/1"
			}
		]
	},
	"est_noflash": {
		"syntax": "est_noflash <userid> <0/1>",
		"description": "Disables flashbang effects for a player.",
		"command": "est_noflash",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "0/1",
				"description": "0/1"
			}
		]
	},
	"est_nofriction": {
		"syntax": "est_nofriction <userid> <0/1>",
		"description": "Toggles player friction.",
		"command": "est_nofriction",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "0/1",
				"description": "0/1"
			}
		]
	},
	"est_nograv": {
		"syntax": "est_nograv <userid> <gravity value>",
		"description": "Sets player's gravity.",
		"command": "est_nograv",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "gravity",
				"description": "gravity"
			},
			{
				"name": "value",
				"description": "value"
			}
		]
	},
	"est_nopush": {
		"syntax": "est_nopush <userid> <0/1>",
		"description": "Prevents player from being pushed.",
		"command": "est_nopush",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "0/1",
				"description": "0/1"
			}
		]
	},
	"est_norecoil": {
		"syntax": "est_norecoil <userid> <0/1>",
		"description": "Disables or enables recoil for a player.",
		"command": "est_norecoil",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "0/1",
				"description": "0/1"
			}
		]
	},
	"est_noreload": {
		"syntax": "est_noreload <userid> <0/1>",
		"description": "Disables or enables reloading for a player.",
		"command": "est_noreload",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "0/1",
				"description": "0/1"
			}
		]
	},
	"est_nozoom": {
		"syntax": "est_nozoom <userid> <0/1>",
		"description": "Prevents player from zooming weapons.",
		"command": "est_nozoom",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "0/1",
				"description": "0/1"
			}
		]
	},
	"est_parachute": {
		"syntax": "est_parachute <userid> <0/1>",
		"description": "Gives or removes a parachute from a player.",
		"command": "est_parachute",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "0/1",
				"description": "0/1"
			}
		]
	},
	"est_players": {
		"syntax": "est_players [parameters]",
		"description": "Returns a list of player ids matching certain criteria.",
		"command": "est_players",
		"parameters": [
			{
				"name": "parameters",
				"description": "parameters"
			}
		]
	},
	"est_setname": {
		"syntax": "est_setname <userid> <new name>",
		"description": "Changes a player's name.",
		"command": "est_setname",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "new",
				"description": "new"
			},
			{
				"name": "name",
				"description": "name"
			}
		]
	},
	"est_shake": {
		"syntax": "est_shake <userid> [parameters]",
		"description": "Shakes a player's screen.",
		"command": "est_shake",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "parameters",
				"description": "parameters"
			}
		]
	},
	"est_slap": {
		"syntax": "est_slap <userid> <damage>",
		"description": "Slaps a player, causing damage.",
		"command": "est_slap",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "damage",
				"description": "damage"
			}
		]
	},
	"est_slay": {
		"syntax": "est_slay <userid>",
		"description": "Instantly kills a player.",
		"command": "est_slay",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			}
		]
	},
	"est_sound": {
		"syntax": "est_sound <userid> <sound>",
		"description": "Plays a sound to a player.",
		"command": "est_sound",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "sound",
				"description": "sound"
			}
		]
	},
	"est_sprint": {
		"syntax": "est_sprint <userid> <0/1>",
		"description": "Enables or disables sprinting for a player.",
		"command": "est_sprint",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "0/1",
				"description": "0/1"
			}
		]
	},
	"est_stuck": {
		"syntax": "est_stuck <userid>",
		"description": "Attempts to free a stuck player.",
		"command": "est_stuck",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			}
		]
	},
	"est_suicide": {
		"syntax": "est_suicide <userid>",
		"description": "Causes a player to commit suicide.",
		"command": "est_suicide",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			}
		]
	},
	"est_teleport": {
		"syntax": "est_teleport <userid> [parameters]",
		"description": "Teleports a player to specified coordinates.",
		"command": "est_teleport",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "parameters",
				"description": "parameters"
			}
		]
	},
	"est_trace": {
		"syntax": "est_trace <userid> [parameters]",
		"description": "Fires a trace line from player's view.",
		"command": "est_trace",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			},
			{
				"name": "parameters",
				"description": "parameters"
			}
		]
	},
	"est_unban": {
		"syntax": "est_unban <SteamID>",
		"description": "Unbans a player by SteamID.",
		"command": "est_unban",
		"parameters": [
			{
				"name": "SteamID",
				"description": "SteamID"
			}
		]
	},
	"est_ungag": {
		"syntax": "est_ungag <userid>",
		"description": "Ungags a previously gagged player.",
		"command": "est_ungag",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			}
		]
	},
	"est_uninfect": {
		"syntax": "est_uninfect <userid>",
		"description": "Cures an infected player.",
		"command": "est_uninfect",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			}
		]
	},
	"est_unmute": {
		"syntax": "est_unmute <userid>",
		"description": "Unmutes a previously muted player.",
		"command": "est_unmute",
		"parameters": [
			{
				"name": "userid",
				"description": "userid"
			}
		]
	},
	"est_user": {
		"syntax": "est_user <name/SteamID>",
		"description": "Returns the userid of the player by name or SteamID.",
		"command": "est_user",
		"parameters": [
			{
				"name": "name/SteamID",
				"description": "name/SteamID"
			}
		]
	}
};