$(document).ready(function() {
   	placeCoin();
   	$('#mario').draggable();
    $('#mario').mouseup(function(){
        is_touching();
    });
    /*D-pad functionality*/
    $('.arrow.l').click(function(){
        mario_move("left");
    });
    $('.arrow.u').click(function(){
        mario_move("up");
    });
    $('.arrow.r').click(function(){
        mario_move("right");
    });
    $('.arrow.d').click(function(){
        mario_move("down");
    });
    /*D-pad functionality end*/
    
    $(document).keyup(function(key) {
    	//$('p#hint').html(key.key+"="+parseInt(key.which,10));
        switch(parseInt(key.which,10)) {
			// A,Left arrow key pressed
			case 65:
			case 37:
				mario_move("left");
				break;
			// W,Up Arrow Pressed
			case 87:	
			case 38:
                mario_move("up");
				break;
			// D,Right Arrow Pressed
			case 68:
			case 39:
                mario_move("right");
				break;
			// S,Down Arrow Pressed
			case 83:
			case 40:
                mario_move("down");
				break;
		}
	});

    function mario_move(direction){
        switch(direction) {
            // A,Left arrow key pressed
            case "left":
                $('#mario').animate({left: "-=15px"}, 'fast');
                break;
            // W,Up Arrow Pressed
            case "up":
                $('#mario').animate({top: "-=15px"}, 'fast');
                break;
            // D,Right Arrow Pressed
            case "right":
                $('#mario').animate({left: "+=15px"}, 'fast');
                break;
            // S,Down Arrow Pressed
            case "down":
                $('#mario').animate({top: "+=15px"}, 'fast');
                break;
        }
        is_touching();
    }

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