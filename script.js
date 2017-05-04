var fooReveal = {
  delay    : 200,
  distance : '190px',
  easing   : 'ease-in-out',
  duration : 700
};

window.sr = ScrollReveal();
sr.reveal('.box-wrapper', fooReveal);
// sr.reveal('.event-box-1', fooReveal);
// sr.reveal('.date', fooReveal);
// sr.reveal('.date-1', fooReveal);
// sr.reveal('#one', { delay: 300, easing   : 'ease-in-out'});
// sr.reveal('#two', { delay: 900, easing   : 'ease-in-out'});
// sr.reveal('#three', { delay: 1200, easing   : 'ease-in-out'});
// sr.reveal('#four', { delay: 1500, easing   : 'ease-in-out'});
// sr.reveal('#five', { delay: 300, easing   : 'ease-in-out'});

;(function ( $ ) {
  //Make your content a heroe
  $.fn.transformHeroes = function() {
      //Variables
      var perspective = '500px',
      delta = 20,
      width = this.width(),
      height = this.height(),
      midWidth = width / 2,
      midHeight = height / 2;
      //Events
      this.on({
      	mousemove: function(e) {
      		var pos = $(this).offset(),
      		cursPosX = e.pageX - pos.left,
      		cursPosY = e.pageY - pos.top,
      		cursCenterX = midWidth - cursPosX,
      		cursCenterY = midHeight - cursPosY;

      		$(this).css('transform','perspective(' + perspective + ') rotateX('+ (cursCenterY / delta) +'deg) rotateY('+ -(cursCenterX / delta) +'deg)');
      		$(this).removeClass('is-leaving');
      	},
      	mouseleave: function() {
      		$(this).addClass('is-leaving');
      	}
      });
      //Return
      return this;
  };
}( jQuery ));

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});
if ("ontouchstart" in document.documentElement) {
    document.documentElement.className += " touch";
  }
  
  // Add and remove no-hover class to <li>'s for mobile hover events
  jQuery('.touch .container').each(function() {
    var div = jQuery(this);
    
    div.hover(function() {
      div.removeClass('no-hover');
    });
    
    jQuery('*').not(div).bind('click', function() {
      div.addClass('no-hover');
    });
    
  });

//Set plugin on cards
$('.event-box').transformHeroes();
$('#projectmenu').animateCss('slideInRight');
$('#projectmenu').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', doSomething);