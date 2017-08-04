document.write("<script type='text/javascript' src='js/galerias/"+findGetParameter("g")+".js'></script "+">");
window.onload = function(){
  var search = window.location.search;
  var g = findGetParameter("g");
  if (search.indexOf("?")== -1 || g == null) {
    alert("No galery searched");
    window.location = "portfolio.html";
  }
  display_pictures();
}

window.onresize = function(){
  sizeController();
}

function window_screen_controller(){
  sizeController();
}

function sizeController(){
  
}

function display_pictures(){
  var galery = get_galery();
  var section = document.getElementById('pictures');
  for (var i = 0; i <= galery.Pictures.length -1; i++) {

    /**var div = document.createElement("DIV");
        div.className = "col-sm-3";*/
    var image = document.createElement("IMG");
        image.src = "resources/imgs/"+galery.meta.Galery_name+"/"+galery.Pictures[i].pic;
        image.className = "pic";

    /**div.appendChild(image);*/
    section.appendChild(image);
  }

}

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}
