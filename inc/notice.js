
//프리로드
$(window).on('load',function(){
    $('#preload').fadeOut(300);
});



//600px 이하에서 메인이미지 변화
function noticeimg() {
    if($(window).width() <= 600) {
        $('#sec1').css({'background':'url(./images/mininotice1.jpg)',
                    'background-repeat':'no-repeat', 'background-position':'center','background-size':'cover'
                       });
    }
    else {
        $('#sec1').css({'background':'url(./images/notice4.jpg)', 
                       'background-repeat':'no-repeat','background-position':'fixed','background-size':'cover'
                       });
    }
    
}


$(document).ready(noticeimg);
$(window).resize(noticeimg);





$(function(){
    
    $('#hbox').load('navi.html');
    $('#fbox').load('footer.html');
    
    
    //목록 숫자 하이라이트 변화
    $('.num').click(function(){
        $('.num').removeClass('numactive');
        $(this).addClass('numactive');
    });
    
    
});