document.write("<script type='text/javascript' src='js/skills.js'></script "+">");
document.write("<script type='text/javascript' src='js/work-experience.js'></script "+">");
document.write("<script type='text/javascript' src='js/job-display-controller.js'></script "+">");
document.write("<script type='text/javascript' src='js/skill-display-controller.js'></script "+">");
window.onload = function(){
	var loc = window.location.pathname.split("/");
	if (window.location.hostname = "https://josemariaromeroark.github.io/") {
		if (loc[1]=="" || loc[1]=="index.html" ) {}
	}else if(loc[loc.length -1] == "index.html" ){
		var HTML_Tsk = document.getElementById("Tsk");
		HTML_Tsk.appendChild(create_tech_skill_set());
		var HTML_Psk = document.getElementById("Psk");
		HTML_Psk.appendChild(create_personal_skill_set());
		diplay_jobs();
		sizeController();
	}
	
	
}

window.onresize = function(){
	sizeController();
}

function window_screen_controller(){
	sizeController();
}

function sizeController(){
	var w = window.outerWidth;
	var all_tables = document.getElementsByClassName("all");
	var even_tables = document.getElementsByClassName("even");
	var odd_tables = document.getElementsByClassName("odd");
	/*783min prot*/
	if(w >= 783){
		for (var i =0; i < all_tables.length ; i++) {
			all_tables[i].style.display="none";
		}
		for (var i =0; i < even_tables.length ; i++) {
			even_tables[i].style.display="inline-block";
			odd_tables[i].style.display="inline-block";
		}
	}else{
		for (var i =0; i < all_tables.length ; i++) {
			all_tables[i].style.display="inline-block";
		}
		for (var i =0; i < even_tables.length ; i++) {
			even_tables[i].style.display="none";
			odd_tables[i].style.display="none";
		}
	}	

}
