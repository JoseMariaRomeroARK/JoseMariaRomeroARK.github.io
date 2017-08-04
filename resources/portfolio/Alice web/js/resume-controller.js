document.write("<script type='text/javascript' src='js/work-experience.js'></script "+">");
document.write("<script type='text/javascript' src='js/job-display-controller.js'></script "+">");
document.write("<script type='text/javascript' src='js/education.js'></script "+">");
document.write("<script type='text/javascript' src='js/education-controller.js'></script "+">");
window.onload = function(){
	var loc = window.location.pathname.split("/");
	/*if (window.location.hostname == "josemariaromeroark.github.io") {
		if (loc[1]=="" || loc[1]=="index.html" ) {
			diplay_jobs();
			sizeController();
		}
	}*/
	diplay_jobs();
	display_education();
	sizeController();
	
	
}

window.onresize = function(){
	sizeController();
}

function window_screen_controller(){
	sizeController();
}

function sizeController(){
	
}
