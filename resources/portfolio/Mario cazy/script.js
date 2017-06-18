$(document).ready(function() {
   	placeCoin();
   	$('#mario').draggable();
    $(document).keyup(function(key) {
    	//$('p#hint').html(key.key+"="+parseInt(key.which,10));
        switch(parseInt(key.which,10)) {
			// A,Left arrow key pressed
			case 65:
			case 37:
				$('#mario').animate({left: "-=15px"}, 'fast');
				break;
			// W,Up Arrow Pressed
			case 87:	
			case 38:
				$('#mario').animate({top: "-=15px"}, 'fast');
				break;
			// D,Right Arrow Pressed
			case 68:
			case 39:
				$('#mario').animate({left: "+=15px"}, 'fast');
				break;
			// S,Down Arrow Pressed
			case 83:
			case 40:
				$('#mario').animate({top: "+=15px"}, 'fast');
				break;
		}
		is_touching();
	});

    $('#mario').mouseup(function(){
    	is_touching();
    });

    function placeCoin(){
    	var top = Math.floor(Math.random()*250);
    	var left = Math.floor(Math.random()*400);
    	var image = "<img id='coin' src='coin.png' style='top:"+top+"px; left:"+left+"px;'/>"
    	$('body').append(image);
    	}

    function is_touching(){
    	var Cmario = $('#mario').offset();
    	var Ccoin = $('#coin').offset();

    	var top = ((Cmario.top + 48) >= Ccoin.top)&&(Cmario.top <= (Ccoin.top + 50));
    	var left = (Cmario.left <= (Ccoin.left + 38))&&((Cmario.left + 48) >= Ccoin.left);
    	if (top && left) {
    		$('#coin').remove();
    		placeCoin();
    		$('#count').text(parseInt($('#count').text())+1);
    	}

    }




});