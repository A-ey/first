
//프리로드
$(window).on('load',function(){
    $('#preload').fadeOut(300);
});


//600px 이하에서 메인이미지 변화
function minimem() {
    if($(window).width() <= 600) {
        $('#sec1').css({'background':'url(./images/minimem1.jpg)',
                    'background-repeat':'no-repeat', 'background-position':'center','background-size':'cover'
                       });
    }
    else {
        $('#sec1').css({'background':'url(./images/mem1.jpg)', 
                       'background-repeat':'no-repeat','background-position':'fixed','background-size':'cover'
                       });
    }
    
}


$(document).ready(minimem);
$(window).resize(minimem);







$(function(){
    
    $('#hbox').load('navi.html');
    $('#fbox').load('footer.html');
    
});