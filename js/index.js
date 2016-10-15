function messageReceived(){
	var x = document.getElementById("Message").value;
    document.getElementById("received").innerHTML = 'Thanks! Your message, "' + x + '" has been received. I will respond as soon as I can.';
}
