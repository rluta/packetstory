(function($) {
	
	$.fn.watch = function(property, callback) {
	   return $(this).each(function() {
	       var self = this;
	       var old_property_val = this[property];
	       var timer;

	       function watch() {
	          if($(self).data(property + '-watch-abort') === true) {
	             timer = clearInterval(timer);
	             $(self).data(property + '-watch-abort', null);
	             return;
	          }

	          if(self[property] != old_property_val) {
	             old_property_val = self[property];
	             callback.call(self);
	          }
	       }
	       timer = setInterval(watch, 200);
	   });
	};

	$.fn.unwatch = function(property) {
	   return $(this).each(function() {
	       $(this).data(property + '-watch-abort', true);
	   });
	};
	
})(jQuery);