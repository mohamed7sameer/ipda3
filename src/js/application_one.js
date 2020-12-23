let $num = $('.custom-carousel .card-carousel .my-card').length;
let $even = $num / 2;
let $odd = ($num + 1) / 2;

if ($num % 2 == 0) {
  $('.custom-carousel .card-carousel .my-card:nth-child(' + $even + ')').addClass('active');
  $('.custom-carousel .card-carousel .my-card:nth-child(' + $even + ')').prev().addClass('prev');
  $('.custom-carousel .card-carousel .my-card:nth-child(' + $even + ')').next().addClass('next');
} else {
  $('.custom-carousel .card-carousel  .my-card:nth-child(' + $odd + ')').addClass('active');
  $('.custom-carousel .card-carousel  .my-card:nth-child(' + $odd + ')').prev().addClass('prev');
  $('.custom-carousel .card-carousel  .my-card:nth-child(' + $odd + ')').next().addClass('next');
}
let mSlide = "0px"
$('.custom-carousel .card-carousel  .my-card').click(function() {
  mSlide = $('.custom-carousel .card-carousel .my-card.active').width();
  // console.log($('.active').position().left);
  
  if ($(this).hasClass('next')) {
    $('.card-carousel').stop(false, true).animate({left: '-=' + mSlide + "px"});
    console.log( mSlide)  
  } else if ($(this).hasClass('prev')) {
    $('.card-carousel').stop(false, true).animate({left: '+=' + mSlide + "px"});
    console.log( mSlide)
  }
  console.log( mSlide)
  $(this).removeClass('prev next');
  $(this).siblings().removeClass('prev active next');
  
  $(this).addClass('active');
  $(this).prev().addClass('prev');
  $(this).next().addClass('next');
});


// Keyboard nav
$('html body').keydown(function(e) {
  if (e.keyCode == 37) { // left
    $('.custom-carousel .card-carousel .my-card.active').prev().trigger('click');
  }
  else if (e.keyCode == 39) { // right
    $('.custom-carousel .card-carousel .my-card.active').next().trigger('click');
  }
});


$(".carousel-arrows .btn-back").on("click",function(){
  $('.custom-carousel .card-carousel .my-card.active').prev().trigger('click');
})

$(".carousel-arrows .btn-next").on("click",function(){
  $('.custom-carousel .card-carousel .my-card.active').next().trigger('click');
})





