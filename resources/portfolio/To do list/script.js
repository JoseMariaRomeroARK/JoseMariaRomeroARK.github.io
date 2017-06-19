$(document).ready(function(){
    var $input = $('input[type=text][name=checkListItem]');
    $('.list').sortable();
    /**/
    var $total = $('#total');
    var $unf = $('#unfinished');
    $total.text('1');
    $unf.text('1');
    /**/
    $(document).on('click','.item .done',function(){
        var $label = $($(this).parent()[0]);
        var $item = $($label.parent()[0]);
        var $text = $($item.children()[2]);
        var new_unf = parseInt($unf.text());
       
        if (!$text.hasClass('line-through')){
            new_unf --;
            $unf.text(new_unf);
        }else{
            new_unf ++ ;
            $unf.text(new_unf);
        }
        $text.toggleClass('line-through');
        $input.focus();
    });

    $(document).on('click','.item .close',function(){
        var $item = $($(this).parent()[0]);
        var $text = $($item.children()[2]);

        if (!$text.hasClass('line-through')){
            $unf.text(parseInt($unf.text())-1);
        }

        $total.text(parseInt($total.text()) - 1);
        $item.remove();
        $input.focus();
    });

    $('#button').click(function(event){
        add_member();
        $input.focus();
        event.preventDefault();
    });

    $('form').submit(function(event){
    	add_member();
        $input.focus();
    	event.preventDefault();
    });

    function add_member(){
        if ( $input.val()!="") {

            var item = "<li class='item'>"+
            "<label class='done-container'>"+
            "<input type='checkbox' class='done' />Done"+
            "</label>"+
            "<div class='close'>X</div>"+
            "<div class='text'>"+ $input.val() +"</div>"+
            "</li>";
            $('.list').append(item);

            var new_total = parseInt($total.text()) + 1 ;
            var new_unf = parseInt($unf.text()) + 1 ;
            $total.text(new_total);
            $unf.text(new_unf);

            $input.val("");

        }
    }
});