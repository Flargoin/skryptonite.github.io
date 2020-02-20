   $('input:radio').click(function(){
        if ($(this).is(':checked')) {
            $(this).parent().css('color', 'white');
        } else {
            $(this).parent().css('color', '#000000');
        }
    });
    $('#group input:radio').click(function(){
	if ($(this).is(':checked')) {
		 $('#group input:radio').not(this).prop('checked', false);
    }
    

});

 