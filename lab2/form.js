
document.getElementById("name").focus();

document.getElementById("name").onblur = function() {
	this.value = chuanHoa(this.value);
};

// document.getElementById("name").onkeyup = function(e) {
// 	DoKeyup(e, this, 'address');
// };

document.getElementById("address").onkeyup = function(e) {
	DoKeyup(e, this, 'male');
};

document.getElementById("male").onkeyup = function(e) {
	DoKeyup(e, this, 'female');
};

document.getElementById("female").onkeyup = function(e) {
	DoKeyup(e, this, 'birthday');
};

document.getElementById("birthday").onkeyup = function(e) {
	DoKeyup(e, this, 'email');
};

document.getElementById("email").onkeyup = function(e) {
	DoKeyup(e, this, 'phone');
};

function DoKeyup(e, myself, nextcontrolid) {
	if (window.event) e = window.event; //de chay ca tren IE
	if (e.keyCode == 13) {
		document.getElementById(nextcontrolid).focus();
	}
}


// các hàm kiểm tra dữ liệu
// kiểm tra email
function isEmail(s){
	return true;
}
// kiểm tra username
function isUsername(s){
	return true;
}
// // nút bấm
function cancel(){
	document.location.href = "index1.html";
}

function check(){
	var check = true;
	document.getElementById("err_name").innerHTML  = "";
	document.getElementById("err_date").innerHTML = "";
	document.getElementById("err_email").innerHTML = "";
	document.getElementById("err_username").innerHTML = "";
	document.getElementById("err_pass").innerHTML = "";
	document.getElementById("err_repass").innerHTML = "";
	name = document.getElementById('name');
	date = document.getElementById('birthday');
	email = document.getElementById('email');
	username = document.getElementById('email');
	pass = document.getElementById('password');
	repass = document.getElementById('repass');
	if (pass.value == "") {
		document.getElementById('err_pass').innerHTML = "*";
		pass.focus();
		check = false;
	} 
	if (repass.value == "") {
		document.getElementById('err_repass').innerHTML = "*";
		repass.focus();
		check = false;
	}else if(repass.value != pass.value) {
		document.getElementById('err_repass').innerHTML= "Mật khẩu không khớp";
		repass.focus();
		check = false;
	}

	if (username.value == "") {
		document.getElementById('err_username').innerHTML = "*";
		username.focus();
		check = false;
	} else if (!isUsername(username.value)) {
		document.getElementById('err_username').innerHTML= "Tên người sử dụng không hợp lệ!";
		username.focus();
		check = false;
	}

	if (email.value == "") {
		document.getElementById('err_email').innerHTML = "*";
		email.focus();
		check = false;
	} else if (!isEmail(email.value)) {
		document.getElementById('err_username').innerHTML= "Email không hợp lệ!";
		email.focus();
		check = false;
	}

	if (date.value == "") {
		document.getElementById('err_date').innerHTML = "*";
		date.focus();
		check = false;
	 } else if (!isDate(date.value)) {
		document.getElementById('err_date').innerHTML= "Ngày sinh không hợp lệ!";
		date.focus();
		check = false;
	}
	if (name.value == "") {
		document.getElementById('err_name').innerHTML = "*";
		name.focus();
		check = false;
	}

	if (check == true)
		document.getElementById('login').submit();
}


// kiểm tra ngày
function isDate(d){
	s = d.split('/');
	if (s.length != 3) { return false;}
	if (isNaN(s[0]) || isNaN(s[1]) || isNaN(s[2])) { return false;}
	date = parseInt(s[0]);
	month = parseInt(s[1]);
	year = parseInt(s[2]);
	if (month > 12 || month < 1) return false;
	switch (month){
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12: {
			if (date > 31) return false;
			break;
		};
		case 4:
		case 6:
		case 9:
		case 11:{
			if (date > 30) {
				return false;
				break;
			}
		}
		case 2:{
			if(isNhuan(year)){
				if (date > 29) {
					return false;
				}
			}
			else {
				if (date > 28) {
					return false;
				}
			}
			break
		}
	}
	if (date < 1) { return false;}
	today = new Date();
	if (year > today.getFullYear()) { return false;}
	return true;
}
// năm nhuận 
function isNhuan(year){
	if (((year % 4 == 0) && (year % 100!= 0)) || (year%400 == 0))
      return true;
   else
      return false;
}

//chuẩn hóa tên
function chuanHoa(name){
	// temp = name;
	// a = temp.split(' ');
	// temp = "";
	// for (int i = 0; i < a.length; i++){
	// 	if (a[i].length > 0) {
	// 		if (temp.length > 0) {
	// 			temp += " ";
	// 		}
	// 		temp = temp + a[i].substring(0,1).toUpperCase();
	// 		temp = temp + a[i].substring(1).toLowerCase();
	// 	}
	// 	return temp;
	// }
	dname = name;
	ss = dname.split(' ');
	dname = "";
	for (i = 0; i < ss.length; i++)
		if (ss[i].length > 0) {
			if (dname.length > 0) dname = dname + " ";
			dname = dname + ss[i].substring(0, 1).toUpperCase();
			dname = dname + ss[i].substring(1).toLowerCase();
		}
	return dname;
}

