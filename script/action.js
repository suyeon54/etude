let options = 0;

$('.gnb li').mouseover(function(){
    if(options == 0){
        $('.lnb').removeClass('on')
        $('.lnb').stop().slideUp(300)
        $(this).find('.lnb').stop().slideDown(300);
    }
})

$('.gnb li').mouseout(function(){
    if(options == 0){
        $('.lnb').stop().slideUp(300)
    }
})

let lnbMaxH = 0
$('.mo_menu').click(function(){
    $('.lnb').addClass('on') //배경지우기
    $('.lnb').stop().slideToggle(300, function(){
        $('.lnb').each(function(){
            let lnbH = $(this).outerHeight()  //높이3개
            if(lnbH > lnbMaxH){
                lnbMaxH = lnbH
            }
            $('.lnb_bg').height(lnbMaxH).toggleClass('on')
            
            if($('.lnb_bg').hasClass('on') == true){
                options = 1
            } else {
                options = 0
            }
            // $('.lnb_bg').stop().slideToggle(300)
        })
    });

})

if(document.cookie.indexOf('dark') > -1){
    $('body').addClass('dark');
    $('.sun').show();
    $('.moon').hide();
}

/* 다크모드 */
$('.moon').click(function(){
    $('body').addClass('dark');
    $('.sun').show();
    $('.moon').hide();
    document.cookie = 'mode = dark';
})

$('.sun').click(function(){
    $('body').removeClass('dark');
    $('.sun').hide();
    $('.moon').show();
    document.cookie = 'mode = light';
})

let recentTop = parseInt($('.recent_prod').css('top'));
$(window).scroll(function(){
    let scrollTop = $(window).scrollTop();
    console.log(scrollTop)
    if(scrollTop > recentTop){
        $('.recent_prod').stop().animate({top: scrollTop + recentTop})
    } else {
        $('.recent_prod').stop().animate({top: '50%'})
    }
    
})

$('.gotop').click(function(){
    $('html, body').animate({scrollTop:0})
})