
//프리로드
$(window).on('load',function(){
    $('#preload').fadeOut(300);
});


var names=['event','going','end']



//이벤트 메인이미지 변화
function autochange() {
    if($(window).width() <= 500) {
        $('#sec1').css({'background':'url(./images/eventmini.jpg)','background-repeat':'no-repeat','background-position':'center','background-size':'cover'})
    }
    else{
        $('#sec1').css('background','url(../images/eventimg.jpg)')
    }
}


          $(document).ready(autochange);
          $(window).resize(autochange);



$(function(){
    
    $('#hbox').load('navi.html');
    $('#fbox').load('footer.html');
    
    
    
    
    //브레드크럼브
    $('.event2').click(function(){
        var no =$(this).index();
        
        $('.bc').hide();
        $('.bc').eq(no).css('display','block');
        
    });
    
    
    
    //이벤트 메뉴 클릭시 
    $('.event2').click(function(){
        $('.event2').removeClass('event2active');
        $(this).addClass('event2active');
    });
    
    
    //이벤트 메뉴 클릭 시 해당 이미지만
        $('.event2').click(function(){
        
    var no = $(this).index();
    var a = names[no];
    
    $('.event').hide();
        $('li[class*='+a+']').fadeIn();
    
    });
    

});

