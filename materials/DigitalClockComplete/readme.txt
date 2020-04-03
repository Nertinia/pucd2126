
Description

	What time is it?! You’ll finally be able to answer that question after you’ve built this simple clock.

	Before we start writing any code, let’s think a little about the parts of a digital clock that we want to display. Time is generally broken up into three units: hours, minutes, and seconds. 12-hour clocks also separate a day into two parts: AM and PM. It seems pretty basic but understanding these units will give us the vocabulary we need to write our code.

Step 1: Asking For The Date()

	Let’s start in the code.js file. Make a new function called displayTime() that will do all the work of calculating and showing the time. You will be writing most of your code in this function.

		function displayTime() {
			console.log("show the time please...");
		}

	Save your changes and open up your index.html file in a browser. You shouldn't seem much yet. But if you open up the console (Command+Option+J) and submit the displayTime() command. You should see your message appear! Now that we have our function ready to go let’s make it do some work.

	Programming languages, like Javascript, have some basic information at the ready. To do their job they have to know things like how to do math, how long a second is, and what the time is. We can ask the computer for this information whenever we need it and allow it to do the hard work.

	To get the current date and time we use the Date object. Define a new variable called currentTime inside your function use assign to it the value "new Date()" after the equals sign.

		var currentTime = new Date();

	When you see this line you should think of it as "create a variable called currentTime and set its value to a new Date object". What you have done is asked the computer to fill your currentTime variable with the date and time at this exact moment, as soon as the function runs. It does that by taking the time from your computer’s own clock so if your computer’s time is wrong the date it stores will be wrong.


Step 2: Hours, Minutes, Seconds

	Now your currentTime variable is full of information. Lots of information. It calls up the exact year, month, day, hour, minute, second, and even the millisecond at that moment. We need to pull out just the hours, seconds, and minutes to build our clock. Fortunately, you can do that by writing three more variables that extract and store just those things.

	Just below your currentTime variable write a new variable. This one will pull hours out, so call it hours. Now to get the hour out of your currentTime variable you can use currentTime.getHours().

		var hours = currentTime.getHours();

	getHours is what’s called a method and it can be used with Date objects. It does what it describes, it looks at the date object information and gets just the hours. Right now all the date information (including the hours) is inside currentTime so we need to apply getHours to currentTime to extract the hour information.

	There are also methods for seconds and minutes. They are getSeconds() and getMinutes(). Create two variables below your hours variable that pull out and hold the minutes and seconds from your currentTime variable.

		var minutes = currentTime.getMinutes();
		var seconds = currentTime.getSeconds();

	Finally, create another variable called timeString that concatenates everything together with ":" in between.

		var timeString = hours + ":" + minutes + ":" + seconds;

	For now just add console.log(timeString) so you can see what this string looks like. Save your changes and refresh you page. Again open up the console and submit the displayTime() command. You should now see the current time appear in the console. Wait a few seconds and submit the same command. Did the time change?!


Step 3: Making it visible

	You've been writing a bunch of code so far you can only see what it is doing through the console. Let’s change that. Open up the index.html file and add a <div> to the <body> and give the div id="clock".

		<div id="clock"></div>

	Now go back to the code.js file. On the first line (above the displayTime() function) create a new variable called clock_elem and use document.getElementById() to grab the new div you just created.

		var clock_elem = document.getElementById("clock");

	Once we have a handle to our <div> element in Javascript, we can set its contents to the current time. Let’s fill that HTML element with our hours, minutes, and seconds. To do that we will use a method called innerText. innerText can set text inside an HTML element such as our clock <div>. Inside the displayTime() function add a new line of code to set the innerText of clock_elem to the value of timeString.

	Save the changes and reload your page - can you see the time yet? Probably not because we still haven't told anything to actually call and execute the displayTime() function. For now you can do this by just adding the function call at the end of your code.js file.

		displayTime();

	Now do you see some numbers? That’s your clock! That’s what the code has made so far. It’s not perfect yet, though. We need to do some things to make it look more like a real digital clock.


Step 4: Making It Look Good

	First I would like you to style your clock text. Remember how you gave the <div> an id? Open up your style.css file and make a #id that will make it look good. You can style your clock however you want. Here is what I did:

		body {
			background-color: #80d4ea;
		}

		#clock {
			height: 100px;
			width: 800px;
			margin: auto;
			position: absolute;
			top: 0; left: 0; bottom: 0; right: 0;
			padding-top: 70px;
			font-family: courier, monospace;
			text-align: center;
			color: white;
			font-size: 100px;
		}


Step 5: Making It Tick

	So our clock works and looks pretty good but something is missing. It isn’t ticking, it shows the current time the page loads, but doesn’t keep counting forward. Let’s fix that.

	The reason our clock is frozen is that it is only running through the displayTime function once, when the page loads. We need to write some code to tell it to run every second.

	Add the following code to the end of your code.js file (after the function call added in Setp 3)

		setInterval(displayTime, 1000);

	setInterval() is a method that will call a function repeatedly after a certain amount of time, measured in milliseconds. 1000 milliseconds is one second. Our function now runs every second. Just like a clock should.


Step 6: Adding Zeros

	Okay you got your clock ticking but we still have a couple other problems. You might have to wait a minute to see this one. Watch the “seconds” numbers - when they reach 1-9 you’ll noticey the become just one digit.

	For our digital clock to be legit we need all our numbers to be 2 digits all the time. Adding a zero in the front would solve that problem. Let’s write some logic that will fix that.

	Remember how we said the Javascript can do math? It knows the value of numbers as well, and can determine if a number is greater, less than, or equal to another number. Let’s start an if statement to add a “0” in front of numbers less than ten. We’ll start with our seconds variable since we can check that in less than a minute.

	Within the displayTime() function braces - just after the hours, minutes, and seconds variables (before the timeString variable) - add this code

		if (seconds < 10) {
			seconds = "0" + seconds;
		}

	Save, reload, and take a minute to look at what that is doing. There are a few things here worth noting.

	First, we're using an if statement to only do something if seconds is less than the number 10. We want 8 to become 08, but we don't want 14 to become 014.

	Then, we modify the content of the seconds variable, placing a "0" in front of whatever was previously stored in seconds. You can change the content of a variable even after it's initially defined. That's why we call it a variable—because its content can vary.

	Finally, and this is a tricky one, that plus (+) sign isn't adding 0 to seconds. If it were, basic math would tell us that we'd end up with the same thing. Note that we put quotes around our "0". Quotes mean text content, which we call a string, and strings work differently than numbers. When you use the plus (+) operator with a string, it combines two strings together, one after the other. If one of the properties is a string, like "0", and the other is a number, like our seconds variable was, the number will be converted into a string before the two are appended.

	Go ahead and do the same thing for hours and minutes.

		if (hours < 10) {
			hours = "0" + hours;
		}
		if (minutes < 10) {
			minutes = "0" + minutes;
		}


Step 7: Adding AM & PM

	So you've got a nice looking digital clock. It’s got one last problem, though. It’s showing 24-hour time. Let’s make it a 12-hour clock and label AM and PM.

	Start by adding a new variable just before the little stack of if conditions. Call it meridiem and set its value to be "AM".

		var meridiem = "AM";

	Now add this code just below this new variable

		if (hours > 12) {
			hours = hours - 12;
			meridiem = "PM";
		}

		if (hours == 0) {
			hours = 12;
		}

	So what’s going on here? Like a lot of Javascript we can describe this in a sentence. It might sound something like this:

	"If the content of the variable hours is equal to zero (just past midnight) the change the content of hours to 12. Otherwise, if the content of the variable hours is greater than twelve (the afternoon) then subtract 12 and change the contents of the meridiem variable to "PM".

	Now we just need to add our new variable meridiem to our clock. Add a space (" ") and "+ meridiem" to that timeString definition we created for your clock.

		var timeString = hours + ":" + minutes + ":" + seconds + " " + meridiem;

	And there you have it! You've just built a pretty sweet looking clock. Nice work :)
