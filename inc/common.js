//공통 스크립트
/*document.write("<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>");*/



//프리로드
$(window).on('load',function(){
    $('#preload').fadeOut(300);
});


 // 메뉴 비활성화
    var subtotal = $('.sub').length;      

    var x;
    for(x=0; x<subtotal; x++) { 

        var link = $('.sub').eq(x).children('a').attr('href');
        console.log(link)

        if(link == '#') 
            $('.sub').eq(x).children('a').addClass('subinactive')

    }
    
    
        $('a').click(function(){

        var link = $(this).attr('href');

        if(link == '#') 
            return false;  
   });
    



//스크롤 탑 버튼 ----------------------------------
    $(window).scroll(function(){

        var y = $(this).scrollTop();

        if (y>100)
            $('#scrollTop').fadeIn();
        else
            $('#scrollTop').fadeOut();
    });


//화면 크게했을때 메뉴백 보이지 않게 ------------
$(window).resize(function(){
    if($(this).window() > 600) {
        $('#menuback').hide();
    }
});



$(function(){    
    

//메뉴 슬라이드 다운&업
    $('.main, #naviback').mouseenter(function(){

        if($(window).width() < 600) {
            $(this).children('.submenu').stop().slideDown(); 
        }
        else {
            $('.submenu, #naviback').stop().slideDown();
        }
    });


    $('.main, #naviback').mouseleave(function(){
        $('.submenu,#naviback').stop().slideUp();
     });   
    
    
    
    
    
    //메뉴바 클릭하면 X모양으로 변화
        $('.menubar').click(function(){
            $('#menuback, #menu').css('left','0');
            $('.menubar').css('display','none');
            $('.menubarx').css('opacity','1');
    });
        
        $('.menubarx').click(function(){
            $('#menuback, #menu').css('left','-100%');
            $('.menubar').css('display','block');
            $('.menubarx').css('opacity','0');
        });
    
    
    
    //스크롤 탑 ---------------------------------------------
    $('#topbt').click(function(){
        $('body,html').stop().animate({'scrollTop':0},1000);
    });
    

});