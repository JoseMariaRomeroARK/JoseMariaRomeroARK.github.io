$(document).ready(function(){
	toggleClass(isScrolledIntoView($('#animationTrigger')));
	$(document).scroll(function(){//every time scroll is made...
		var trigger = isScrolledIntoView($('#animationTrigger'));
		toggleClass(trigger);
	});
	function toggleClass(trigger){
		if (trigger) {
			$('.level').addClass('active');
		}else{
			$('.level').removeClass('active');
		}
	}
	function isScrolledIntoView(elem){
	    var docViewTop = $(window).scrollTop(); //get the vertical scroll bar position
	    var docViewBottom = docViewTop + $(window).height(); 
	    /*getting the height of the window and by adding the scroll position we get where is the bottom of the view*/
	    var elemTop = $(elem).offset().top;
	    var elemBottom = elemTop + $(elem).height();
	    /*if (($(window).height()>= $(elem).height())) {
	    	return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));	    	
	    }else{*/
	    	var top = ((docViewTop<=elemTop)&&(docViewBottom>=elemTop));/**/
	    	var middle = ((docViewTop>elemTop)&&(docViewBottom<elemBottom));/**/
	    	var bottom = ((docViewBottom>=elemBottom)&&(docViewTop<=elemBottom));/**/
	    	return (top || middle || bottom);	    	
	    //}
	}
});