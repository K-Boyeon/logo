$(function(){
    var h = 0;
    var n = 0;
    var t = 0;

    setTimeout(function(){
        $("html, body").animate({scrollTop : 0}, 800, function(){
            $(".controller li").eq(0).find("a").addClass("on");
        });
    },150);

    $(window).resize(function(){
        h = $(this).height();
        $("#page1 .section").css({height : h});
        distance = n * h;
        $("html, body").animate({scrollTop : distance}, 0);
    });
    $(window).trigger("resize");

    $(".controller li a").click(function(e){
        e.preventDefault();
        n = $(this).parent().index();
        distance = n * h;

        $("html, bady").stop().animate({scrollTop : distance}, 800, function(){
            $(".controller li").find("a").removeClass("on");
            $(".controller li").eq(n).find("a").addClass("on");
        });
    });

    $(window).scroll(function(){
        t = $(window).scrollTop();

        if(t <= $("#page2").offset().top){
            $("#page2 .title").addClass("active");
        }else if(t <= $("#page3").offset().top){
            $("#page3 .title").addClass("active");
        }else if(t <= $("#page4").offset().top){
            $("#page4 .title").addClass("active");
        }else{
            $("#page5 .title").addClass("active");
        }
    });

    $(".section").mousewheel(function(e, delta){
        if($("html, bady").is(":animated")){
            return false;
        }

        if(delta > 0){
            if(n > 0){
                n--
            }
        }else{
            if(n < 6){
                n++
            }
        }

        distance = n * h;

        $("html, bady").stop().animate({scrollTop : distance}, 800, function(){
            $(".controller li").find("a").removeClass("on");
            $(".controller li").eq(n).find("a").addClass("on");
        });
    });
});