const isPlayerTurn = false
const isCombatActive = false

let turnOrder = []

function main() {
	
}



function resolveAction(action, user, target) {
	let action_name = action.get_name();
	let user_name = user.get_name();
	let target_name = target.get_name();
	
	if (user_name == target_name) {target_name = "self";}
	
	displayMessage(user_name + " uses " + action_name + " on " + target_name + ".")
	
	user.setEnergy(user.getEnergy() - action.getCost()) //if it had a cost, then remove the cost from the user
	
	//if accuracy is not 1 AKA if action is not insta sucess
	//	then perform accuracy check
	//		if acc check failed, print fail message
	//		otherwise, perform action: apply effect (if needed)
	//		action.performSucess()
	
	//finish
	
}

function displayMessage(message) {
	//append the message to the log
	//replace the message with current/previous action message
}
