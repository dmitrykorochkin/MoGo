$ (function() {
   
    
       
        var header = $("#header"),
            introH = $ ("#intro").innerHeight ();
            var scrollOffset =  $(window).scrollTop();
       


       // fixed header
       checkscroll(scrollOffset);


    $(window).on("scroll", function() {
        
        scrollOffset = $(this).scrollTop();
        checkscroll(scrollOffset);
    });

    function checkscroll(scrollOffset) {

         if (scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }
    
//
 $("[data-scroll]").on("click", function(event) {
     event.preventDefault();
     /* Act on the event */

// CКРОЛЛ К СТРАНИЦАМ 
     var blockId = $(this).data('scroll'),
         blockOffset = $(blockId).offset().top;   

         $("html,body").animate ({
            scrollTop: blockOffset
         }, 500)
      /* Act on the event */
     });
 

        $("[data-slider]").slick({
            infinite:true,
            fade:false,
            slidesToShow: 1,
            slidesToScroll: 1
        });
            
   











 });



