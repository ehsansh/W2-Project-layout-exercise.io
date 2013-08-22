/*jshint strict:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, undef:true, unused:true, nonew:true, browser:true, devel:true, boss:true, curly:false, immed:false, latedef:true, newcap:true, plusplus:false, trailing:true, debug:false, asi:false, evil:false, expr:true, eqnull:false, esnext:false, funcscope:false, globalstrict:false, loopfunc:false */
(function($){
	"use strict";
	var 
		$slideshow1=$('.slideshow1'),
		$img=$slideshow1.find('img'),
		$pre=$slideshow1.find('.left_button'),
		$next=$slideshow1.find('.right_button'),
		currentSlide=0,
		go2slide=function(n){
			if(n>=$img.length) n=0;
			if(n<0) n=$img.length-1;
			$img.eq(n).css({zIndex:3});
			$img.eq(currentSlide).css({zIndex:1});
			currentSlide=n;
		},
		events=function(){
			$next.click(function(){
				go2slide(currentSlide+1);
			});
			$pre.click(function(){
				go2slide(currentSlide-1);
			})
		};
	events();




	

})(window.jQuery);