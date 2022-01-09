(function ($) {
  "use-strict";

  if ($(window).width() > 991){
    $('#pagepiling').pageScroller();
  }

$(".nav_toggle").on("click", function () {
  $(this).find('.m_icon').toggleClass('active');
  $(".main-nav").toggleClass("is-open");
  $(".site-overlay").toggleClass("active");
});

jQuery('.main-menu .menu_item').each(function(index) {
  setTimeout(() => {
  $(this).css('transition-delay', '.'+  +index+index + 's');
  }, 1000);

});


$(window).scroll(function () {
  $(".section").each(function () {
    if ($(window).scrollTop() > $(this).offset().top - 80) {
      var blockID = $(this).attr("id");
      $(".main-nav .menu_item a").removeClass("active");
      $('.main-nav .menu_item a[data-scroll="' + blockID + '"]').addClass("active");
    }
  });
});

$(".main-nav a[data-scroll]").click(function (e) {
  e.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $("#" + $(this).data("scroll")).offset().top + 50,
    },
    1500
  );

  $('.nav_toggle').find('.m_icon').removeClass('active');
  
  $(".main-nav").removeClass("is-open");
  $(".site-overlay").removeClass("active");

});


$(window).scroll(function () {
  $(".section").each(function () {
    if ($(window).scrollTop() > $(this).offset().top - 600) {
      $('.page .link_appstore .imgs img').addClass('animate')
    }
  });
});

})(jQuery);
// $(document).ready(function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
// });


wow = new WOW({
  animateClass: "animated",
  offset: 50,
});
wow.init();


$(document).ready(function(){
    animateDiv('.page header .plane_anmi');
});
function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}
function animateDiv(myclass){
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 5000,   function(){
      animateDiv(myclass);        
    });
    
};

// 



$(document).ready(function () {
  //save boolean
  var pause = false;
  //save blocks
  var block = $(".banner .container-img .img");
  //variable for counter
  var k = 0;

  //interval function works only when pause is false
  setInterval(function () {
    if (!pause) {
      block.removeClass("active").eq(k).addClass("active");
      //increase k every 1.5 sec
      k++;
      //if k more then number of blocks on page
      if (k >= block.length) {
        //rewrite variable to start over
        k = 0;
      }
    }
    //every 1.5 sec
  }, 4000);
});



$(document).ready(function () {
  //save boolean
  var pause = false;
  //save blocks
  var block = $(".paper .container-img .img");
  //variable for counter
  var k = 0;

  //interval function works only when pause is false
  setInterval(function () {
    if (!pause) {
      block.removeClass("active").eq(k).addClass("active");
      //increase k every 1.5 sec
      k++;
      //if k more then number of blocks on page
      if (k >= block.length) {
        //rewrite variable to start over
        k = 0;
      }
    }
    //every 1.5 sec
  }, 4000);
});
