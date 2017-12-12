
$(function() {
    'use strict';
   var winH = $( window).height(),
        uppH = $(".upperBar").innerHeight(),
        navH =$(".navbar").innerHeight();

    $(".slider .carousel-item ").height( winH -( uppH + navH ));


// images shuffle

$('.featurd-work ul li').on('click' ,function(){
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).data('class')==='all'){
        $('.shuffle-img .col-md-6').css('opacity',1);
    }else{
        $('.shuffle-img .col-md-6').css('opacity',.2);
        $($(this).data('class')).parent().css('opacity',1);
        }
    
});


});