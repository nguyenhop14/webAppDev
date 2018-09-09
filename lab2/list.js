
function check(c){
	chk = document.getElementsByName("check");
	for (i=0; i < chk.length; i++){
		if (!chk[i].checked) {
			document.getElementById("checkAll").checked = false;
			break;
		}
	}

	if (i == chk.length)
		document.getElementById("checkAll").checked = true;
	if(c.checked){
		c.parentNode.parentNode.style.backgroundColor = "red";
	} else{
		if(c.parentNode.parentNode.className == "oddr"){
			c.parentNode.parentNode.style.backgroundColor = "#f0f0f0";
		} else {
			c.parentNode.parentNode.style.backgroundColor = "yellow";
		}
	}
}

function checkAll(){
	var c = document.getElementsByName("check");			
	for (var j = 0; j < c.length; j++) {
		c[j].checked = document.getElementById("checkAll").checked;
		if (c[j].checked) c[j].parentNode.parentNode.style.backgroundColor = "red";
		else if (c[j].parentNode.parentNode.className == "oddr")
			c[j].parentNode.parentNode.style.backgroundColor = "#f0f0f0";
		else c[j].parentNode.parentNode.style.backgroundColor = "yellow";		
	}
}

// function checkRow(r){
// 	if (r.cells[0].childNodes[1].checked) {
// 		r.cells[0].childNodes[1].checked = false;
// 		r.className = "unselect";
// 	} else {
// 		r.cells[0].childNodes[1].checked = true;
// 		r.className = "selected";
// 	}

// 	chk = document.getElementsByName("check");
// 	for (i=0; i < chk.length; i++){
// 		if (!chk[i].checked) {
// 			document.getElementById("checkAll").checked = false;
// 			break;
// 		}
// 	}

// 	if (i == chk.length)
// 		document.getElementById("checkAll").checked = true;
// }