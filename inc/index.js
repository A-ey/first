//공통 스크립트
/*document.write("<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>");*/


//프리로드
$(window).on('load',function(){
    $('#preload').fadeOut(300);
});



var slideno = 0;


// 메인 슬라이드 이동
function slide(){
    slideno++;
    
    if(slideno > 3) slideno=0;
    
        $('.slide').fadeOut(800);    
        $('.slide').eq(slideno).fadeIn(800); 
    
        $('.circle').css('background','none');
        $('.circle').eq(slideno).css('background','white');
 }



        function playslide() {
            loop = setInterval('slide()',4000);
        }
        
        function stopslide() {
            clearInterval(loop);
        }




//화면 크기 조절 시 배경사이즈 변화 -------------
        function autochange() {
              if( $(window).width() <= 500) {
                $('.slide').eq(0).css('background-image','url(./images/slidemini6.jpg)')
                $('.slide').eq(1).css('background-image','url(./images/slidemini5.jpg)')
                $('.slide').eq(2).css('background-image','url(./images/slidemini4.jpg)')
                $('.slide').eq(3).css('background-image','url(./images/slidemini2.jpg)')
                  
                  var w = $('#noticebox a').width();
                  
                  $('#noticebox a').height(w);
              }
            
              else{
                  $('.slide').eq(0).css('background-image','url(./images/6slide.jpg)')            
                  $('.slide').eq(1).css('background-image','url(./images/4slide.jpg)')            
                  $('.slide').eq(2).css('background-image','url(./images/slide10.jpg)')            
                  $('.slide').eq(3).css('background-image','url(./images/slide9.jpg)')     
              }
          }  
          
              
          $(document).ready(autochange);
          $(window).resize(autochange);




//스크롤 후 반응---------------------------------------------------------

    $(window).scroll(function(){
        
        var current = $(this).scrollTop();
        
        var y6 = $('#sec6').offset().top - 700;
            
        if(current >= y6) {
                $('#sec6 h1').addClass('mathani1');
                $('#mathbox').addClass('mathani2');
            }
    
        });        
        


//-------------------------------------------------------------------------------------------

$(function(){
    
    $('#hbox').load('navi.html');
    $('#fbox').load('footer.html');

    
    playslide();

    
    $('.pause').click(function(){
        stopslide();
        $('.play').removeClass('active2');
        $('.pause').addClass('active2');
    })
    $('.play').click(function(){
        playslide();
        $('.pause').removeClass('active2');
        $('.play').addClass('active2');        
    });
    
    
    
    $('.stleft').click(function(){
        leftslide();
    });
    
    $('.stright').click(function(){
        rightslide();
    });
    
    
    
    $('#surveybox img').mouseenter(function(){
        $(this).css('animation-play-state','running');
    }); 
    $('#surveybox img').mouseleave(function(){
        $(this).css('animation-play-state','paused');
    });
    

    
    //서클버튼 클릭하면 해당 슬라이드로    ------------------------
    $('.circle').click(function(){
        var no = $(this).index();
        
        stopslide();
        slideno = no-1;
        slide();
        playslide();
        
        $('.circle').css('background','none');
        $('.circle').eq(no).css('background','white');
    });
    

});









