
//프리로드
$(window).on('load',function(){
    $('#preload').fadeOut(300);
});


//600px 이하에서 메인이미지 변화
function surveyimg() {
    if($(window).width() <= 600) {
        $('#sec1').css({'background':'url(./images/surveymini1.jpg)',
                       'background-repeat':'no-repeat','background-position':'center','background-size':'cover'
                       });
    }
    else {
        $('#sec1').css({'background':'url(./images/survey1.jpg)', 'background-repeat':'no-repeat','background-position':'center','background-size':'cover'});
    }
}

$(document).ready(surveyimg);
$(window).resize(surveyimg);



$(function(){
    
    $('#hbox').load('navi.html');
    $('#fbox').load('footer.html');
    
});