function diplay_jobs(){
	var experience_JSON = new get_experience();//work-experience.js
	var HTML_We = document.getElementById("We");
	HTML_We.className = "row";
	HTML_We.appendChild(create_title(experience_JSON.meta.title));
	HTML_We.appendChild(create_jobs(experience_JSON.Cathegory,experience_JSON.Cathegory.name));
}
/*Create a title depending of meta.title*/
function create_title(text){
	var title = document.createElement("H2");
	title.innerHTML = text;
	title.className = "title";
	return title;
}
/**/
function create_jobs(category,text){
	var figure = document.createElement("FIGURE");
	figure.className = "col-sm-6";

	var h3 = document.createElement("H3");
	h3.innerHTML = text;
	figure.appendChild(h3);

	for (var i = 0; i <= category.jobs.length -1; i++) {
		var job = create_job(category.jobs[i]);
		figure.appendChild(job);
	}
	return figure;

}
function create_job(job){

	var div_job = document.createElement("DIV");
	div_job.className = "job";

	div_job.appendChild(create_position(job));
	div_job.appendChild(create_job_description(job));
	/*wraped*/
	return div_job;
}
function create_position(job){
	var position = job.position;
	/*Creation of the wrap*/
	var div_position = document.createElement("DIV");
	div_position.className = "position";
	/*Creation of the content*/
	var paragraph = document.createElement("P");
	paragraph.innerHTML = position;
	/*Append phase*/
	div_position.appendChild(paragraph);
	/*Return statement*/
	return div_position;
}
function create_job_description(job){
	var date = job.date;
	var company = job.content.company;
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
	var span_company_icon = document.createElement("SPAN");
	span_company_icon.className = "glyphicon glyphicon-user";

	var strong_text = document.createElement("STRONG");
	strong_text.innerHTML = company.name

	var span_address_icon = document.createElement("SPAN");
	span_address_icon.className = "glyphicon glyphicon-map-marker";

	var span_address = document.createElement("SPAN");
	span_address.innerHTML = company.address;
	span_address.className = "regular";
	var span_link_icon = document.createElement("SPAN");
	span_link_icon.className = "glyphicon glyphicon-link";
	
	var link = document.createElement("A");
	link.href = company.web;
	link.target = "_blank";
	link.title = company.name;
	link.innerHTML = company.web;
	link.className = "regular";
	var list = document.createElement("UL");
	for (var i = 0; i <= job.content.body.length -1; i++) {
		var list_item = document.createElement("LI");
		list_item.innerHTML = job.content.body[i].li;
		list.appendChild(list_item);
	}
	/*"body"'s content append phase*/
	div_body.appendChild(span_company_icon);
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
	div_body.appendChild(list);
	/*wrap's append phase*/
	div_description.appendChild(div_date);
	div_description.appendChild(div_body);
	/*return statement*/
	return div_description;
}