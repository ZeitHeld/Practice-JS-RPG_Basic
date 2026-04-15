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

	performAction() {
		
	}
	
	displayActions() { //part of main?
		
	}
	
	removeAction(action) {
		
	}
	
	addAction(action) {
		
	}
	


	
}


class Action() {
	constructor(nam, pow, acc, cost) {
		this.name = nam;
		this.power = pow;
		this.accuracy = acc;
		this.cost = cost;
	}
}