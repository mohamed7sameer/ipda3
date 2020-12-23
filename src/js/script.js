let lg = 1199.98 ;
let md = 991.98 ;
let sm = 767.98 ;
let xs = 575.98 ;

$('.multiple-items').slick({
  rtl: true,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow : ".arrow-right-1",
  nextArrow : ".arrow-left-1",
  responsive: [

    {
      breakpoint: lg,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },

    {
      breakpoint: sm,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }, 
  ]
});

$('.slick-clients').slick({
  rtl: true,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow : ".arrow-right-2",
  nextArrow : ".arrow-left-2",
  responsive: [
    {
      breakpoint: md,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
  
    
    {
      breakpoint: sm,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },

    {
      breakpoint: xs,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ] ,
});


var wow = new WOW();
wow.init();