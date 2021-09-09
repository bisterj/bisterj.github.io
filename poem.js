function nextLine(line) {

	var poem = new Array("<p onClick=nextLine(1)>There once was a maintainer on github</p>",
"<p onClick=nextLine(2)>So many pull requests she did snub</p>",
"<p onClick=nextLine(3)>So I forked the repo</p>",
"<p onClick=nextLine(4)>Now they all send <em>me</em> changes, d'oh!</p>",
"<p onClick=nextLine(0)>Said the maintainer, 'Welcome to the club!'</p>");

	document.getElementById("line").innerHTML=poem[line];
}

function button_fun(curr_state){
	var dark = "<button id='but' onClick=button_fun('dark')>Light Mode</button>"
	var light = "<button id='but' onClick=button_fun('light')>Dark Mode</button>"

	if(curr_state == 'light'){
		document.getElementById("button").innerHTML=dark
		document.getElementById("css").setAttribute("href", "dark.css")
	} 
	if(curr_state == 'dark'){
		document.getElementById("button").innerHTML=light
		document.getElementById("css").setAttribute("href", "light.css")
	}
}

function rand_color(){
	var colors = new Array("black", "white", "green", "greenyellow", "yellow", "red", "orange")
	var rc = colors[Math.floor(Math.random()*colors.length)]

	console.log(rc)

	var str = "margin-left: 95%; background-color: "+ rc + ";"

	document.getElementById("randy").setAttribute("style", str)
}