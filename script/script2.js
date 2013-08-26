/*jshint strict:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, undef:true, unused:true, nonew:true, browser:true, devel:true, boss:true, curly:false, immed:false, latedef:true, newcap:true, plusplus:false, trailing:true, debug:false, asi:false, evil:false, expr:true, eqnull:false, esnext:false, funcscope:false, globalstrict:false, loopfunc:false */
(function($){
	"use strict";
	var 
		$slideshow2=$('.slideshow2'),
		$prev=$slideshow2.find('.left_button'),
		$next=$slideshow2.find('.right_button'),
		$slides=$slideshow2.find('.slides'),
		$divs=$slideshow2.find('.slides div'),
		$li=$slideshow2.find('.slide_list'),	
		$list=$li.find('li'),
		currentSlide=0,
		go=function(n,current){
			var
			  $box1=$slides.eq(current).find('div'),
			  $box2=$slides.eq(n).find('div'),
			  $delay=$box1.length*200+200,
			  ani=function($box,aniTime,delay,y){
			  	 $box.each(function(){
			  	 	var $this=$(this);
			  	 	setTimeout(function(){
			  	 		$this.animate({left:y},aniTime);
			  	 	},delay);
			  	 	delay+=200;
			  	 });
			  };
			if(n>currentSlide){
				$box1.css({float:'left'});
				$box2.css({float:'left'});
				ani($box1,200,1,-1100);
				ani($box2,200,$delay,0);
			}else{
				$box1.css({float:'right'});
				$box2.css({float:'right'});
				ani($box1,200,1,1100);
				ani($box2,200,$delay,0);
			}
		},
		move=function(n,x){
			var $div=$slides.eq(n).find('div');
			$div.each(function(){
				var $this=$(this);
				$this.css({left:x});
			});
		},
		changeli=function(n,currentSlide){
			$list.eq(n).addClass('active');	
			$list.eq(currentSlide).removeClass('active');
		},
		go2slide=function(n){
			if(n>currentSlide){
				move(n,1100);
				go(n,currentSlide);
				changeli(n,currentSlide);			
				currentSlide=n;
			}else if(n<currentSlide){
				move(n,-1100);
				go(n,currentSlide);
				changeli(n,currentSlide);
				currentSlide=n;
			}
		},
		events=function(){
			$next.click(function(){
				go2slide(currentSlide+1)
			});
			$prev.click(function(){
				go2slide(currentSlide-1);
			});
			$list.click(function(){
				go2slide($(this).index());
			});
		};

		events();   




	

})(window.jQuery);



