$(function(){
	$(window).scroll(function(){
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight+150){
				$(this).addClass('scrollin');
			}
		})
	})
})

$(function(){
	$(window).scroll(function(){
		$('.mainfade').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight-290){
				$(this).addClass('scrollin');
			}
		})
	})
})

