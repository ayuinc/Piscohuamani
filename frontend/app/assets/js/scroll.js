/*$("a.smooth").live("click", function(e) {
	e.preventDefault();
    var $link = $(this);
    var anchor  = $link.attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top
    }, 1000);
});*/

/*
  Smooth scroll
*/
$(document).ready(function(){
	$("nav.smooth a").click(function(e){
		e.preventDefault();
		$("html, body").stop().animate({scrollTop: $($(this).attr("href")).offset().top}, 1000);
	});
  $("a.smooth").click(function(e){
    e.preventDefault();
    $("html, body").stop().animate({scrollTop: $($(this).attr("href")).offset().top}, 1000);
  });
  $(document).on("scroll", onScroll);
});
/*
  Collapse-Faq's
*/
$('.change-arrow').click(function() {
    $(" #up").toggleClass("hidden");
    $(" #down").toggleClass('hidden');
});

/*Carrousel*/
$(document).ready( function() {
  // vanilla JS
  var $gallery = $('.main-gallery .gallery').flickity();
  $('.main-gallery').flickity({
      // options
      cellAlign: 'left',
      contain: true
    });

  $('.main-gallery button.previous').on( 'click', function() {
    $('.second-gallery').flickity( 'previous', true );
  });

  $('.main-gallery button.next').on( 'click', function() {
    $('.second-gallery').flickity( 'next', true );
  });
});

/*
  Smooth scroll active
*/
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
   $('.contenedor-menu a[href^="#"]').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href").toString());
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.contenedor-menu nav a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

/*
  Popup Events
*/
var $overlay = $('#overlay');
var $image = $('#overlay img');
var $caption = $('#overlay p');

$('.grid ul li a').click(function (event) {
  event.preventDefault();
  var href = $(this).attr('href');
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
  $image.attr("src", href);
  $overlay.show();
});

$overlay.click(function(){ 
      $overlay.hide();
});