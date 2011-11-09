/****************************************************************************
 **
 **  Some snippets to write nice JS
 **  grabbed from Yahoo Developpers :P
 **
 ***************************************************************************/

/*
 * V1 For objects
 */

(function() {
    var $, BIGCLASS;
    
    $ = jQuery;
    BIGCLASS = {};
    BIGCLASS.$this = $(BIGCLASS);
    this.BIGCLASS = BIGCLASS;
})();


(function() {
    $.extend(BIGCLASS, {
	constructor : function() {
	    //console.log('this is a test');
	    return this.init = true;
	},
	my_method : function(p1) {
	    ret
	}
    });
    $(function() {
	return BIGCLASS.constructor();
    });
})();


/*
 * V2 
 */
(function() {
    // No keyword var means that hes declared on the global scope
    MYCLASS = (function() {
	function MYCLASS(_arg) {
	    // You can access direclty to named arg with _arg.my_arg
	    this.width |= _arg.width;
	    this.height |= _arg.height;
	    
	    //console.log('my class constructed with x = ' + this.width + ' y = ' + this.height);
	    
	    // Here is how to define a methode
	    MYCLASS.prototype.my_method = function() {
		//console.log('my method called');
		return true;
	    }
	}
	return MYCLASS;
    })();
    
    MYCLASS.prototype.languages = function() {
	//console.log('You can always add new method');
    }

})();


var test = new MYCLASS({width : 500, height : 200});
test.my_method();
test.languages();

/*
 * extend jquery object
 */
$.fn.disableSelection = function() {
    return this.each(function() {
	var $this;
	$this = $(this);
	$this.attr('unselectable', 'on');
	$this.css({
            '-moz-user-select': 'none',
            '-webkit-user-select': 'none',
            'user-select': 'none'
	});
	return $this.each(function() {
            return this.onselectstart = function() {
		return false;
            };
	});
    });
};

/*
 * Injecting some scripts
 */

// InjectSocial: function() {
//     var $rootDOM;
//     $rootDOM = $('#social-buttons-container');
//     $.getScript('http://connect.facebook.net/en_US/all.js#appId=111098168994577&amp;xfbml=1', function() {
//       FB.init({
//         appId: '111098168994577',
//         xfbxml: true,
//         status: true,
//         cookie: true
//       });
//       return FB.XFBML.parse($rootDOM.get(0));
//     });
//     $.getScript('http://platform.twitter.com/widgets.js', function() {
//       return $rootDOM.find('.twitter-share-button').show();
//     });
//     return $.getScript('https://apis.google.com/js/plusone.js');
// }

/*
 * Testing if mobile
 */
(function() {
    var ISMOBILE, chromeVersion, safariVersion;
    ISMOBILE = Boolean(navigator.userAgent.match(/iPhone|iPad|iPod|Android/i));
    
    $.extend(BIGCLASS, {
	ISMOBILE: ISMOBILE,
	ISIOS: Boolean(navigator.userAgent.match(/iPhone|iPad|iPod/i))
    });
}).call(this);

