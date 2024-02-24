function sendToWhatsapp() {
    let number = "+918549013115";
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message') .value;
    let selectedOption = document.getElementById('courses') .value;
    let select2 = document.getElementById('arbg') .value;
  var url = "https://wa.me/" + number + "?text="
  var selectedOption = document.getElementById("selectOption").value;
  + "Name : " +name+ "%0a"
  + "Email : " +email+ "%0a"
  + "Message : " +message+ "%0a%0a";
  + "Courses : " +selectedOption+ "%0a";
  + "Arbg : " +selectedValue+ "%0a";
  window.open(url, '_blank').focus();
}