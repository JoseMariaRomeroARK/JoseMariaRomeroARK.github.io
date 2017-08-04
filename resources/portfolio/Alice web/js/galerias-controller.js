document.write("<script type='text/javascript' src='js/galerias/22-06-2017.js'></script "+">");
document.write("<script type='text/javascript' src='js/galerias/24-06-2017.js'></script "+">");
window.onload = function(){
	var loc = window.location.pathname.split("/");
	/*if (window.location.hostname == "josemariaromeroark.github.io") {
		if (loc[1]=="" || loc[1]=="index.html" ) {
			diplay_jobs();
			sizeController();
		}
	}*/
	display_galerias();
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

function display_galerias(){
	var galerias = [get_22_06_2017(),get_24_06_2017()];
	var galeries = document.getElementById('galeries');
	for (var i = 0; i <= galerias.length -1 ; i++) {
		var jumbo = create_jumbotron(galerias[i]);
		galeries.appendChild(jumbo);
	}
}

function create_jumbotron(galeria){
	var a = document.createElement("A");
		a.href = "galeria.html?g="+galeria.meta.Galery_name;
	var section = document.createElement("SECTION");
		section.className = "jumbotron";
		section.style.backgroundImage = "url('resources/imgs/"+galeria.meta.Galery_name+"/"+galeria.meta.Main_Pic+"')";
	var span = document.createElement('SPAN');
		span.className = 'photo';
		span.innerHTML = "Photographer: "+galeria.meta.Photographer;
	var div_container = document.createElement("DIV");
		div_container.className = "container";
	var div_row = document.createElement("DIV");
		div_row.className ="row text-center";
	var h2 = document.createElement("H2");
		h2.innerHTML = galeria.meta.Title;
	var h3 = document.createElement("H3");
		h3.innerHTML = galeria.meta.Location;
	a.appendChild(section);
	section.appendChild(div_container);
	section.appendChild(span);
	div_container.appendChild(div_row);
	div_row.appendChild(h2);
	div_row.appendChild(h3);

	return a;
}