let options = 0;

/* $('.gnb li').mouseover(function(){
    if(options == 0){
        $('.lnb').removeClass('on')
        $('.lnb').stop().slideUp(300)
        $('.lnb').stop().slideDown(300);
    }
})

$('.gnb li').mouseout(function(){
    if(options == 0){
        $('.lnb').stop().slideUp(300)
    }
}) */

let lnbMaxH = 0
$('.mo_menu').click(function(){
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

//pc menu
$('header .gnb').mouseenter(function(){
    $('.lnb').stop().slideDown(300);
})

$('header .gnb').mouseleave(function(){
    $('.lnb').stop().slideUp(300);
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

/* let recentTop = parseInt($('.recent_prod').css('top'));
$(window).scroll(function(){
    let scrollTop = $(window).scrollTop();
    console.log(scrollTop)
    if(scrollTop > recentTop){
        $('.recent_prod').stop().animate({top: scrollTop + recentTop})
    } else {
        $('.recent_prod').stop().animate({top: '50%'})
    }
    
}) */

$('.gotop').click(function(){
    $('html, body').animate({scrollTop:0})
})

$('.on2').click(function(){
        $('.detail_img').hide()
        $('.text_box').show()
})

$('.on').click(function(){
    $('.detail_img').show()
    $('.text_box').hide()
})

$('.login_box ul input').keyup(function(){
    let id = $(this).val()
    console.log(id);
    if(id != ''){
        $('.login_box button').addClass('on')
    } else {
        $('.login_box button').removeClass('on')
    }
})