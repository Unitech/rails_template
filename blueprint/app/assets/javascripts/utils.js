/*
 * Some tools
 */

Utils = {
    notify : function(str, time) {
        if (this.init == undefined) {
            $('body').append('<div id="notificator"></div>');
            this.init = true;
            this.rdy = true;
            this.el = $('#notificator');
        }
        if (this.rdy == true){
            this.rdy = false;
            var self = this;
            time = typeof(time) != 'undefined' ? time : 2200;
            this.el.html(str);
            this.el.slideDown().delay(time).slideUp(function(){
                self.rdy=1
            });
        }
        return false;
    }
}
