(function($) {
	$.fn.extend({
		//plugin name - toggleOption
		toggleOption: function(verb) {
			var show = (verb === 'show');

			return this.each(function() {
				var $this = $(this)
					.attr('disabled', show ? null : 'disabled')
					.css('display', show ? '' : 'none'),
					$parent = $this.parent();

				if (show && $parent[0].tagName == "SPAN") {
					$parent.replaceWith(this);
				} else if (!show && $parent[0].tagName != "SPAN") {
					$this.wrap('<span />').css('display', 'none');
				}
			});
		}
	});
})(jQuery);
