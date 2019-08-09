HTK = {}
var HTK ={}
HTK = function (hothey, event) {
		HTK.hothey = hothey;
		HTK.log = {};
		HTK.event = event;
		HTK.type = 0;
		HTK.interpritator();
		return HTK.Regisseur(event)
		
	}
HTK.interpritator = function() {
		var hotkeys = HTK.hothey.trim().toLowerCase().split("+");
		HTK.scenario = [];
		for (let i = 0; i < hotkeys.length; i++) {
			const e = hotkeys[i];
			switch (e) {
				case "ctrl":
				case "control":
				case "controlLeft":
					HTK.type = 1;
					HTK.scenario[i] = ["ctrlKey", true];
					break;
				case "shift":
					HTK.type = 1;
					HTK.scenario[i] = ["shiftKey", true];
					break;
				case "alt":
					HTK.type = 1;
					HTK.scenario[i] = ["altKey", true];
					break;
				case "space":
					HTK.scenario[i] = ["key", " "];
					break;
				default:
					HTK.scenario[i] = ["key", e];
					break;
			}
		}
	}
HTK.Regisseur = function (event) {
		var $return = 0;
		if (HTK.type && HTK.scenario.length <= 2) {
			HTK.scenario.forEach((element) => {
				if (event[element[0]] === element[1]) {
					$return++;
				} else {
					$return = false;
					return false;
				}
			});
			return $return === HTK.scenario.length;
		}
		HTK.log.push(event.key.toLowerCase());
		if (HTK.log.length === HTK.scenario.length) {
			for (let i = 0; i < HTK.log.length && i < HTK.scenario.length; i++) {
				const log = HTK.log[i];
				const scenario = HTK.scenario[i];
				// if(scenario[i])
			}
		}
	}
