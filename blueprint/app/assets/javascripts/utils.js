var rdy = 1;

$().ready(function() {
    function notify(str, time){
	if (rdy == 1){
	    rdy = 0;
	    time = typeof(time) != 'undefined' ? time : 2200;
	    var note = $('#notificator');
	    note.html(str);
	    note.slideDown().delay(time).slideUp(function(){rdy=1});
	}
	return false;
    }
});