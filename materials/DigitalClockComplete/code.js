var clock_elem = document.getElementById("clock");

function displayTime() {

	var currentTime = new Date();

	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();

	var meridiem = "AM";
	if (hours > 12) {
		hours = hours - 12;
		meridiem = "PM";
	}
	if (hours == 0) {
		hours = 12;
	}

	if (hours < 10) {
		hours = "0" + hours;
	}
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	if (seconds < 10) {
		seconds = "0" + seconds;
	}

	var timeString = hours + ":" + minutes + ":" + seconds + " " + meridiem;

	clock_elem.innerText = timeString;
	
}

displayTime();
setInterval(displayTime, 1000);