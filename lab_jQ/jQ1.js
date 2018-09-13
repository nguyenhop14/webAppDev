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

