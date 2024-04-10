function sendToWhatsapp(){
	let number = "+917829753178";

	let name = document.getElementById('name').value;
	let noso = document.getElementById('nos').value;
	let phoneo = document.getElementById('phone').value;
	let email = document.getElementById('email').value;
	let message = document.getElementById('message').value;
	let select = document.getElementById('selectedOption').value;
	let select2 = document.getElementById('argb').value;
	let name2 = document.getElementById('name2').value;
	let topic = document.getElementById('topics').value;
	var url = "https://wa.me/" + number + "?text="
	+ "*Name :*" +" "+name+" "+ "%0a"
	+ "*Email :*" +" "+email+" "+ "%0a"
	+ "*College Address :*" +" "+message+" "+ "%0a"
	+ "*Service Type:*" +" "+select+" "+ "%0a"
	+ "*Date:*" +" "+select2+" "+ "%0a"
	+ "*College Name:*" +" "+name2+" "+ "%0a"
	+ "*Departments:*" +" "+topic+" "+ "%0a"
	+ "*No Of Students*" +" "+noso+" "+ "%0a"
	+ "*Phone Number*" +" "+phoneo+" "+ "%0a"
	window.open(url, '_blank').focus();
}