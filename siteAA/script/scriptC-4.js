$(document).ready(function() {
    $("#aside .menu .Mainmenu li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(200);
    });
    $("#aside .menu .Mainmenu li").mouseout(function(){ 
        $(this).find(".submenu").stop().slideUp(200);
    });

    $("#aside .menu .Mainmenu li").focusin(function(){
        $(this).find(".submenu").stop().slideDown(200);
    });
    $("#aside .menu .Mainmenu li").focusout(function(){ 
        $(this).find(".submenu").stop().slideUp(200);
    });

    //슬라이드 페이드
    let currentIndex = 0;
    const $slider = $(".slide");
    $slider.hide().first().show();

    setInterval(function(){
    let nextIndex = (currentIndex + 1) % $slider.length;

        $slider.eq(currentIndex).slideUp(1200);
        $slider.eq(nextIndex).slideDown(1200);

        currentIndex = nextIndex;

    }, 3000);

});
