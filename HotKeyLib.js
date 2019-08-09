var HTK ={}
var HTKlog= [];
HTK = function (hothey, event) {
		HTK.hothey = hothey;
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
		HTKlog.push(event.key.toLowerCase());
		if (HTKlog.length === HTK.scenario.length) {
			for (let i = 0; i < HTKlog.length && i < HTK.scenario.length; i++) {
				const log = HTKlog[i];
				const scenario = HTK.scenario[i];
				if(scenario[i][1] != HTKlog[i]){
					HTKlog = []
					return false
				}else{
					$return++
				}
			}
			return $return;
		}else if(HTKlog.length > HTK.scenario.length){
			HTKlog = []
		}
	}
