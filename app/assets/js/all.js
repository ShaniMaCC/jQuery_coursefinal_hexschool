$(document).ready(function () {
    //下拉選單
  $('.dropdown').on('click',function(event){
    event.preventDefault();
    $('.dropdown-open').slideToggle();
  });
    //滑過選單的底線
  $('.navbar>li>a').hover(function(event){
    event.preventDefault();
    $(this).toggleClass('active');
    $(this).parent().parent().siblings().find('a').removeClass('active');
  });
  //回到頁面最上面
  $('.btn-backtotop').on('click',function(event){
    event.preventDefault();
    $('html,body').animate({
        scrollTop: 0 }, 1000);

  }).hover(function(){
      $(this).attr('title','top');
  });
  //Banner swiper輪播
  var swiper = new Swiper(".mySwiper", {
    autoplay:{
        delay:6000,
        disableOnInteraction:false,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
        
    },
    });

  //lightbox
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'positionFromTop': 350, 
  })

});