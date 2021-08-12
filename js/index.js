$('.header-menu').hover(
    function(){
    $('.header-menu').css("opacity","1");
    },
    function(){
        $('.header-menu').css("opacity","0.8");   
    }
);

$('li').click(function(){
    var li = $(this).get(0).innerText;

    if(li == "프로필"){
        var offset = $('.about_me').offset();
        $('html').animate({scrollTop:offset.top-52},200);
    }else if(li=="기술스택"){
        var offset = $('.skill_head').offset();
        $('html').animate({scrollTop:offset.top-69},200);
    }else if(li=="프로젝트"){
        var offset = $('.Project_title').offset();
        $('html').animate({scrollTop:offset.top-63},200);
    }else if(li=="Contant"){
        var offset = $('.Contact').offset();
        $('html').animate({scrollTop:offset.top},200);
    }
    else{
        $('html').animate({scrollTop:top},500);
    }
});

$('.header-li').hover(
    function(){
    $(this).css('color','black'); 
    },
    function(){
    $(this).css('color','rgba(0,0,0,.5)');
    }
);

$('.Skill_image_container').hover(
    function(){
        $(this).children().attr("style","visibility:visible");
    },
    function(){
        $(this).children().attr("style","visibility:hidden");
    }
);

$('.bar_open').click(function(){
    $('.bar_menu').toggle()
});



