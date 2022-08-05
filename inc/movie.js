
//프리로드
$(window).on('load',function(){
    $('#preload').fadeOut(300);
});


$(function(){
    
    $('#hbox').load('navi.html');
    $('#fbox').load('footer.html');
    
    	wow = new WOW( {
		boxClass:     'wow',      // default
		animateClass: 'animated', // default
		offset:       0,          // default
		mobile:       true,       // default
		live:         true        // default
	} );

	wow.init();	//WOW 초기화
    
    
    $('#fbox').load('footer.html');
    
});