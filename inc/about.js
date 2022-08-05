
//프리로드
$(window).on('load',function(){
    $('#preload').fadeOut(300);
});


//  메뉴 슬라이드 

 function right() {
    $('#menuslide').stop().animate({'margin-left':-w},500, function(){
        $('.mslide:first').appendTo('#menuslide');
        $('#menuslide').css('marginLeft','0');
    });
}

function left() {
    $('.mslide:last').prependTo('#menuslide');
    $('#menuslide').css('marginLeft',-w);
    $('#menuslide').stop().animate({'margin-left':'0'},500);
} 



var w;

function autoslide() {
    
    w = $('#menubox2').width() / 5;
    
    if($(window).width() < 600) w = $('#menubox2').width() / 2;
    
    $('#menuslide').width(w*8);
}
          $(document).ready(autoslide);
          $(window).resize(autoslide);


function monthchange() {
    if( $(window).width() <= 600) {
        $('#month').attr('src','./images/monthmini.jpg');
    }
    else  {
        $('#month').attr('src','./images/monthdn.jpg');
    }
}
          $(document).ready(monthchange);
          $(window).resize(monthchange);
    
    
    
    
    
    $(function(){
    
        $('#hbox').load('navi.html');
        $('#fbox').load('footer.html');
        
    //메뉴서클 클릭 변화
    $('.menucircle').click(function(){
        $('.menucircle').removeClass('menuactive');
        $(this).addClass('menuactive');
    });
    

    
    //슬라이드 버튼
    $('.mright').click(function(){
        if( !$('#menuslide').is(':animated'))
            right();
    });
    $('.mleft').click(function(){
        if(!$('#menuslide').is(':animated'))
            left();
    });
    
    
    
    //메뉴 서클 클릭 후 이미지 변경
    $('.menucircle').click(function(){
        var no = $(this).index();

        
        $('.title').hide();
        $('.title').eq(no).css('display','block');
        
        $('.bc').hide();
        $('.bc').eq(no).css('display','block');
    });
    

});