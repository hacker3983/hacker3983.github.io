function trigger_event(event) {
	var event_type = event.type;
	var event_code = event.keyCode;
	var Modifier_state = event.getModifierState("Shift") || event.getModifierState("Shift");
	if(!Modifier_state) {
		var found = false;
		for(i=65;i<=90;i++) {
			if(event_code == i) {
				event_code += 32;
				found = true;
				break;
			}
		}
	}
	event_code = String.fromCharCode(event_code);
	console.log(event_code);
	document.getElementById("event").innerHTML = `
	You pressed the ${event_code} key`;
}
