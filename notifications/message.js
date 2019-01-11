var x = document.getElementById("myTextarea").value;
function send() {
  var x = document.getElementById("text").value;
  var myNotification = new Notification(x);
};
function notification() {
  setTimeout(send(), 1000000000000000);
};
