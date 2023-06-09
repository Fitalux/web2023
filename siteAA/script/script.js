$(document).ready(function() {
    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(200);
    });
    $(".nav > ul > li").mouseout(function(){ 
        $(this).find(".submenu").stop().slideUp(200);
    });

    $(".nav > ul > li").focusin(function(){
        $(this).find(".submenu").stop().slideDown(200);
    });
    $(".nav > ul > li").focusout(function(){ 
        $(this).find(".submenu").stop().slideUp(200);
    });

    //슬라이드 페이드
    let currentIndex = 0;
    const $slider = $(".slider");
    $slider.hide().first().show();

    setInterval(function(){
    let nextIndex = (currentIndex + 1) % $slider.length;

        $slider.eq(currentIndex).fadeOut(1200);
        $slider.eq(nextIndex).fadeIn(1200);

        currentIndex = nextIndex;

    }, 3000);

    //탭메뉴
    const tabBtn = $(".info-menu > a");
    const tabCont = $(".info-cont > ul");
    tabBtn.hide().eq(0).show();

    tabBtn.on("click", function(e){
        const index = $this.index();
        // alert(index);

        $(this).addClass("active").siblings().removeClass("active");
        tabCont.eq(index).show().siblings().hide();
    });
});


