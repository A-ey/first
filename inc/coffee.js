
//프리로드
$(window).on('load',function(){
    $('#preload').fadeOut(300);
});


    var names = ['list', 'season', 'donut', 'dozen'];


$(function(){
    
    $('#hbox').load('navi.html');
    $('#fbox').load('footer.html');
    
    
        $('#hbox').load('navi.html');
    $('#fbox').load('footer.html');
    
    //메뉴서클 클릭 변화
    $('.menucircle').click(function(){
     $('.menucircle').removeClass('menuactive');
        $(this).addClass('menuactive');
    });
    
    
    //메뉴 서클 클릭 후 이미지 변경
    $('.menucircle').click(function(){
        var no = $(this).index();

        
        $('.title').hide();
        $('.title').eq(no).css('display','block');
        
        $('.bc').hide();
        $('.bc').eq(no).css('display','block');
    });
    
    
    //체크리스트 효과
    $('.checklist').click(function(){
        $('.checklist').removeClass('checklistactive');
        $(this).addClass('checklistactive');
    });
    
    //메뉴설명 css 효과
        $('.coff').click(function(){
        $(this).children('.caption').toggleClass('ani')
    });
    
    
        //영양소 정보 보기
    $('.kcalinfo').mouseenter(function(){
        
        $(this).parent().parent().next().stop().fadeIn();
    });

    
    $('.kcalinfo').mouseleave(function(){
        $('.kcalbox').stop().fadeOut();
    });
    
    
    
    
});