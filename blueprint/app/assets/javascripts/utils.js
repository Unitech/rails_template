var rdy = 1;

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

// var $rootDOM;
// $rootDOM = $('#social-buttons-container');
// $.getScript('http://connect.facebook.net/en_US/all.js#appId=111098168994577&amp;xfbml=1', function() {
//   FB.init({
//     appId: '111098168994577',
//     xfbxml: true,
//     status: true,
//     cookie: true
//   });
//   return FB.XFBML.parse($rootDOM.get(0));
// });
// $.getScript('http://platform.twitter.com/widgets.js', function() {
//   return $rootDOM.find('.twitter-share-button').show();
// });
// return $.getScript('https://apis.google.com/js/plusone.js');
