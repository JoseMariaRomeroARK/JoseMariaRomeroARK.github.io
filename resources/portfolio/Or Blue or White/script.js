$(document).ready(function() {
	var clicks = 0;
	shufle();
    $('.square').click(function(){
    	clicks++;
        $('#clicks').text(clicks);
        $('#clicked').text($(this)[0].id);
        Start_toggle($(this));
    });

    function shufle(){
    	var $square = $('.square');
    	for (var i = 0; i <= $square.length -1 ; i++) {
    		if(Math.floor((Math.random()*100)+1)%2 == 0){
    			$($square[i]).addClass('blue');
    		}else{
    			$($square[i]).addClass('white');
    		}
    	}
    }
    function Start_toggle($target){
    	var id_origen = $target[0].id;
    	toggle($('#'+(id_origen -3)));
    	toggle($('#'+(id_origen -1)));
    	toggle($('#'+id_origen));
    	toggle($('#'+(id_origen +1)));
    	toggle($('#'+(id_origen +3)));
    }
    function toggle($target){
    	$target.toggleClass('blue');
    	$target.toggleClass('white');
    }
});