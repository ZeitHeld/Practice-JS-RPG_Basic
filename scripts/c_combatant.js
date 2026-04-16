class Combatant {
	constructor(name, maxHp, maxEn, at, df) {
		const this.name = name;
		const this.health_max = maxHp;
		const this.energy_max = maxEn;
		const this.attack = at;
		const this.defense = df;
		
		let health = health_max;
		let energy = energy_max;
		
		let action_list = [];
		
		this.addAction("Attack").addAction("Defend");
	}

	performAction(action, target) {
		if (action.cost <= energy) {
			//resolveAction(action, this, target)
		}
		else {
			displayMessage("Can't perform action. Not enough Energy!");
		}
	}
	
	displayActions() { //part of main?
		action_list.forEach((action, id) => {
			displayMessage(id+1 + ": " + action.name + " | Energy Cost: " + action.cost + " | Power: " + action.power + " | Accuracy: " + action.accuracy + " | Description: \"" + action.description + "\"");
		}
	}
	
	removeAction(action) {
		
	}
	
	addAction(action) {
		displayMessage("Added \"" + action.getName() + "\" to " + this.name + "'s action list.")
		action_list.push(action);
	}
	


	
}


class Action() {
	constructor(nam, pow, acc, cost) {
		this.name = nam;
		this.power = pow;
		this.accuracy = acc;
		this.cost = cost;
		this.description = desc;
	}
}