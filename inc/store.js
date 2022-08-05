
//프리로드
$(window).on('load',function(){
    $('#preload').fadeOut(300);
});



//600px 이하에서 메인이미지 변화
function storeimg() {
    if($(window).width() <= 600) {
        $('#sec1').css({'background':'url(./images/ministore1.jpg)',
                    'background-repeat':'no-repeat', 'background-position':'center','background-size':'cover'
                       });
    }
    else {
        $('#sec1').css({'background':'url(./images/store.jpg)', 
                       'background-repeat':'no-repeat','background-position':'fixed','background-size':'cover'
                       });
    }
    
}

$(document).ready(storeimg);
$(window).resize(storeimg);






//체크리스트


const group2 = [

//타이틀 항목('시/도 선택')을 선택했을 때
"<select id='group2'>" +
"    <option value=''>지역 선택</option>" + 
"</select>",            

//첫 번째 도시(서울)에 대한 지역 목록
"<select id='group2'>" +
"    <option value=''>지역 선택</option>" + 
"    <option value='0'>강남구</option>" +
"    <option value='1'>강북구</option>" +
"    <option value='2'>영등포구</option>" +
"</select>",

//두 번째 도시(전남)에 대한 지역 목록
"<select id='group2'>" +
"    <option value=''>지역 선택</option>" + 
"    <option value='3'>담양군</option>" +
"    <option value='4'>나주시</option>" +
"    <option value='5'>순천군</option>" +
"    <option value='6'>여수시</option>" +
"</select>",

//세 번째 도시(광주)에 대한 지역 목록
"<select id='group2'>" +
"    <option value=''>지역 선택</option>" + 
"    <option value='7'>동구</option>" +
"    <option value='8'>서구</option>" +
"    <option value='9'>남구</option>" +
"    <option value='10'>북구</option>" +
"    <option value='11'>광산구</option>" +
"</select>"
]
        







$(function(){
    
    $('#hbox').load('navi.html');
    $('#fbox').load('footer.html');
    
    $('#sec1>h2').css('transform','-50%,-50%');
    
    

    //도시 선택(첫 번째 그룹)이 변경됐을 때
    //지역 선택(두 번째 그룹)의 내용 바꾸기

    $('#group1').change(function(){

    //선택한 순번(위치) 확인하기
    const no = $('#group1 option:selected').index();

    //선택한 순번에 맞춰 두 번째 그룹(지역) 내용 변경하기
    $('#group2').html(group2[no]);

    });  //end $('#group1').change


    //두 번째 그룹(지역 선택)을 선택했을 때 해당 내용만 보이기
    $('#group2').change(function(){

    //선택한 항목의 option값 확인하기
    const no2 = $('#group2 option:selected').val();

    //선택한 항목의 순번의 리스트만 보이기
    $('.list').hide();
    $('.list').eq(no2).fadeIn();

    });  //end $('#group2').change

    
    
    
    
    	wow = new WOW( {
		boxClass:     'wow',      // default
		animateClass: 'animated', // default
		offset:       0,          // default
		mobile:       true,       // default
		live:         true        // default
	} );

	wow.init();	//WOW 초기화
    
});