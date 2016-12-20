(function($) {
'use strict';

$.fn.gallery = function(options) {
	var defaults = {
		thumbs: true,
		xClass: '',
		height: 0,
		current: 0,
		autofocus: false
	};

	options = $.extend(defaults, options);

	return this.each(function() {
		var $gallery = $(this),
			$items = $gallery.children(),
			$thumbs = $gallery.children().clone();

		options.height = options.height ? options.height : $items.height();

		$gallery
			.addClass('gallery')
			.attr('tabindex', 0)

		if (options.autofocus) $gallery.focus();

		var $galleryItemsBox = $items.wrapAll('<div class="gallery-items-box">').parent();
		var $galleryItems = $galleryItemsBox.wrapInner('<div class="gallery-items">').children();

		$galleryItems.height(options.height + 'px');
		$('img', $items).css('max-height', options.height + 'px');

		$items
			.addClass('gallery-item')
			.addClass(options.xClass)
			.eq(options.current)
				.addClass('current');

		// declare control arrows
		var $arrowLeft = $('<div class="gallery-control gallery-arrow-left">'),
			$arrowRight = $('<div class="gallery-control gallery-arrow-right">');

		// append control arrows to the gallery
		$galleryItemsBox.append($arrowLeft, $arrowRight);

		// control arrow right handler
		$arrowRight.on('click', {direction: 'right'}, arrowHandler);

		// control left right handler
		$arrowLeft.on('click', {direction: 'left'}, arrowHandler);

		function arrowHandler(event) {
			event.preventDefault();

			switch (event.data.direction) {
				case 'right':
					var index = $galleryItems.find('.current').index() + 1;
					if (index === $galleryItems.children().length) index = 0;
					break;
				case 'left':
					var index = $galleryItems.find('.current').index() - 1;
					if (index === $galleryItems.children().length) index = $galleryItems.children().length - 1;
					break;
			}

			$items.removeClass('current').eq(index).addClass('current');

			if (options.thumbs) {
				$thumbs.removeClass('current').eq(index).addClass('current');
				moveGalleryThumbs();
			}
		}

		// control by keyboard event
		$gallery.on('keyup', function(event) {
			if (event.keyCode === 39) {
				$arrowRight.trigger('click');
			}
			else if (event.keyCode === 37) {
				$arrowLeft.trigger('click');
			}
		});

		// create gallery thumbs
		if (options.thumbs) {
			var $galleryThumbsBox = $('<div>').addClass('gallery-thumbs-box').appendTo($gallery);

			var $galleryThumbs = $('<div class="gallery-thumbs">').appendTo($galleryThumbsBox);
			$galleryThumbs.width( $thumbs.length * 100 ).css('left', 0);

			$thumbs.addClass('gallery-thumb');
			$thumbs.eq(options.current).addClass('current');
			$galleryThumbs.append($thumbs);


			$('.gallery-thumb', $galleryThumbs).on('click', function(event) {
				var index = $(this).index();

				$thumbs.removeClass('current').eq(index).addClass('current');
				$items.removeClass('current').eq(index).addClass('current');

				moveGalleryThumbs();
			});
		}

		function moveGalleryThumbs() {
			var boxWidth = $galleryThumbsBox.outerWidth(),
				itemPos = $('.current', $galleryThumbs).position().left,
				itemWidth = $('.current', $galleryThumbs).outerWidth(true),
				minLeft = $galleryThumbsBox.outerWidth() - $galleryThumbs.outerWidth();

			if ( itemPos > boxWidth / 2 ) {
				// var shift = boxWidth / 2 - itemPos - itemWidth / 2;
				var shift = (boxWidth - itemWidth) / 2 - itemPos;

				if (shift < minLeft)
					shift = minLeft;

				$galleryThumbs.css('left', shift);
			}
			else {
				$galleryThumbs.css('left', 0);
			}
		}
	});
}

})(jQuery);


$(document).ready(function(){
	$('#gallery').gallery({
		xClass: 'custom',
		height: 300
	});
});


