function create_tech_skill_set(){
	var skills_JSON = new get_skills();
	var skill_set = skills_JSON.Tech_skills;
	var div = document.createElement("DIV");
	div.className = "row";
	var h2 = document.createElement("H2");
	h2.className = "title";
	h2.innerHTML = "Tech Skills"
	div.appendChild(h2);
	display_skills(skill_set,div);

	return div;

}
function create_personal_skill_set(){
	var skills_JSON = new get_skills();
	var skill_set = skills_JSON.Personal_skills;
	var div = document.createElement("DIV");
	div.className = "row";
	var h2 = document.createElement("H2");
	h2.className = "title";
	h2.innerHTML = "Personal Skills"
	div.appendChild(h2);
	display_skills(skill_set,div);

	return div;

}

function display_skills(skill_set,div){
	var tables = get_tables(skill_set);//all, odd, even
	/*783min prot*/
	var figureAll, figureOdd, figureEven;
	figureAll = document.createElement("FIGURE");
	figureAll.className = "col-sm-12 all";
	figureAll.appendChild(tables[0]);
	figureOdd = document.createElement("FIGURE");
	figureOdd.className = "col-sm-6 odd";
	figureOdd.appendChild(tables[1]);
	figureEven = document.createElement("FIGURE");
	figureEven.className = "col-sm-6 even";
	figureEven.appendChild(tables[2]);
	div.appendChild(figureAll);
	div.appendChild(figureEven);
	div.appendChild(figureOdd);
}

function get_tables(skills){
	var odd, even, all;

	all = document.createElement("TABLE");
	all.className = "skills";
	odd = document.createElement("TABLE");
	odd.className = "skills";
	even = document.createElement("TABLE");
	even.className = "skills";

	for (var i = 0; i <= skills.length -1; i++) {
		var tr = document.createElement("TR");
		var td1 = document.createElement("TD");
		var td2 = document.createElement("TD");
		var span1 = document.createElement("SPAN");
		var span2 = document.createElement("SPAN");
		td1.innerHTML = skills[i].skill[0].name;
		span1.className = "background";
		span2.className = "level l-"+skills[i].skill[0].level;
		span1.appendChild(span2);
		td2.appendChild(span1);
		tr.appendChild(td1);
		tr.appendChild(td2);

		all.appendChild(tr);
	}
	for (var i = 0; i <= skills.length -1; i++) {
		var tr = document.createElement("TR");
		var td1 = document.createElement("TD");
		var td2 = document.createElement("TD");
		var span1 = document.createElement("SPAN");
		var span2 = document.createElement("SPAN");
		td1.innerHTML = skills[i].skill[0].name;
		span1.className = "background";
		span2.className = "level l-"+skills[i].skill[0].level;
		span1.appendChild(span2);
		td2.appendChild(span1);
		tr.appendChild(td1);
		tr.appendChild(td2);

		if( i%2 == 0){
			even.appendChild(tr);
		}else{
			odd.appendChild(tr);
		}
	}
	return [all , odd , even];
}