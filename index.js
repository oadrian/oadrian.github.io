
function kosbies_face_click_handler(){
	alert("ouch");

}

function on_page_ready(){
	$(".kosbiesface").click(kosbies_face_click_handler)

}

$(document).ready(on_page_ready)