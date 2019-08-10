class HTK {

	constructor(hotkey = '', func = function () { }) {
		this.hotkey = hotkey
		this.log = [];
		self = this
		this.interpritator();
		document.addEventListener("keydown", event => {
			if (self.log[self.log.length - 1] != event.key) {
				self.log.push(event.key);
			};
			if (this.Regisseur(event) >= true) {
				func()
			};
		})
		document.addEventListener("keyup", event => {
			self.log = self.log.filter(function (e) {
				return e !== event.key
			})
		})
	}
	
	interpritator() {
		this.type = 0
		let hotkeys = this.hotkey.trim().toLowerCase().split("+");
		this.scenario = [];
		for (let i = 0; i < hotkeys.length; i++) {
			const e = hotkeys[i];
			switch (e) {
				case "ctrl":
				case "control":
				case "controlLeft":
					this.type = 1;
					this.scenario[i] = ["ctrlKey", true];
					break;
				case "shift":
					this.type = 1;
					this.scenario[i] = ["shiftKey", true];
					break;
				case "alt":
					this.type = 1;
					this.scenario[i] = ["altKey", true];
					break;
				case "space":
					this.scenario[i] = ["key", " "];
					break;
				default:
					this.scenario[i] = ["key", e];
					break;
			}
		}
	}
	Regisseur(event) {
		let log= ''
		log = this.log.join('+')
		if (this.type === 1) {
			let $return = 0
			this.scenario.forEach((element) => {
				if (event[element[0]] === element[1]) {
					$return++;
				} else {
					$return = false;
					return false;
				}
			});
			return $return === this.scenario.length;
		} else {
			hotkeys = hotkeys.join('+');
			if (log === hotkeys) {
				return true;
			} else {
				return false;
			}
		}
	}
	get pull() { return ["Control", "Shift", "Alt", "Backspace", "Enter", "Shift", "Control", "AltGraph", "Escape", "NumLock", "Control", "c", "Home", "PageUp", "PageDown", "End", "Delete", "F1", "`"] }
}