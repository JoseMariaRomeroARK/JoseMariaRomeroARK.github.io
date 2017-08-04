function display_education(){
	var historial_JSON = new get_historial();//education.js
	var HTML_histo = document.getElementById("education");
	HTML_histo.className = "row";
	HTML_histo.appendChild(create_title(historial_JSON.meta.title));
	HTML_histo.appendChild(create_titles(historial_JSON.Cathegory, historial_JSON.Cathegory.name));
}

/*Create a title depending of meta.title*/
function create_title(text){
	var title = document.createElement("H2");
	title.innerHTML = text;
	title.className = "title";
	return title;
}
/**/
function create_titles(category,text){
	var figure = document.createElement("FIGURE");
	figure.className = "col-sm-6";

	var h3 = document.createElement("H3");
	h3.innerHTML = text;
	figure.appendChild(h3);
	console.log(category);
	for (var i = 0; i <= category.titles.length -1 ; i++) {
		var title = create_titulation(category.titles[i]);
		figure.appendChild(title);
	}
	return figure;

}
function create_titulation(titles){

	var div_title = document.createElement("DIV");
	div_title.className = "titulation-container";

	div_title.appendChild(create_titulation_name(titles));
	div_title.appendChild(create_titulation_description(titles));
	/*wraped*/
	return div_title;
}
function create_titulation_name(title){
	var titulation = title.titulation;
	/*Creation of the wrap*/
	var div_titulation = document.createElement("DIV");
	div_titulation.className = "titulation";
	/*Creation of the content*/
	var paragraph = document.createElement("P");
	paragraph.innerHTML = titulation;
	/*Append phase*/
	div_titulation.appendChild(paragraph);
	/*Return statement*/
	return div_titulation;
}
function create_titulation_description(title){
	var date = title.date;
	var school_info = title.content;
	/*Creation of the wrap*/
	var div_description = document.createElement("DIV");
	div_description.className = "description";
	/*Creation of the divs "date" & "body*/
	var span_date_icon = document.createElement("SPAN");
	span_date_icon.className = "glyphicon glyphicon-calendar"; 

	var div_date = document.createElement("DIV");
	div_date.className = "col-sm-4 date";
	div_date.appendChild(span_date_icon);
	div_date.innerHTML = div_date.innerHTML +" "+ date;

	var div_body = document.createElement("DIV");
	div_body.className = "col-sm-8 body";
	/*Creation "body"'s content*/
	var strong_text = document.createElement("STRONG");
	strong_text.innerHTML = school_info.school.name

	var span_address_icon = document.createElement("SPAN");
	span_address_icon.className = "glyphicon glyphicon-map-marker";

	var span_address = document.createElement("SPAN");
	span_address.className = "regular";
	span_address.innerHTML = school_info.school.address;

	var span_link_icon = document.createElement("SPAN");
	span_link_icon.className = "glyphicon glyphicon-link";
	
	var link = document.createElement("A");
	link.href = school_info.school.web;
	link.target = "_blank";
	link.title = school_info.school.name;
	link.innerHTML = school_info.school.web;

	var span_grades_icon = document.createElement("SPAN");
	span_grades_icon.className = "glyphicon glyphicon-certificate";

	var span_grades = document.createElement("SPAN");
	span_grades.className = "regular";
	span_grades.innerHTML = school_info.school.grades;

	var list = document.createElement("UL");
	for (var i = 0; i <= school_info.body.length -1; i++) {
		var list_item = document.createElement("LI");
		list_item.innerHTML = school_info.body[i].li;
		list.appendChild(list_item);
	}
	/*"body"'s content append phase*/
	div_body.appendChild(strong_text);
	div_body.appendChild(document.createElement("BR"));
	div_body.appendChild(span_address_icon);
	div_body.appendChild(span_address);
	div_body.appendChild(document.createElement("BR"));
	if (link.innerHTML!="") {
		div_body.appendChild(span_link_icon);
		div_body.appendChild(link);
		div_body.appendChild(document.createElement("BR"));
	}
	div_body.appendChild(span_grades_icon);
	div_body.appendChild(span_grades);
	div_body.appendChild(document.createElement("BR"));
	div_body.appendChild(list);
	/*wrap's append phase*/
	div_description.appendChild(div_date);
	div_description.appendChild(div_body);
	/*return statement*/
	return div_description;
}