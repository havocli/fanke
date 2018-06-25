$('.select').click(function(){
    $('.more_info').toggleClass('more_focus');
    
})
$('.size_a a').click(function(){
    console.log(1);
    $(this).addClass('activeA').siblings().removeClass('activeA')
})

$('.add').click(function(){
    $('.num span').html(parseInt($('.num span').html()) + 1);
}) 

$('.min').click(function(){
    $('.num span').html(parseInt($('.num span').html()) - 1);
    if($('.num span').html()<=1){
        $('.num span').html(1);
    }
}) 

$('.goodinfo a').each(function(k){
    $(this).click(function(){
        $(this).addClass('transA').siblings().removeClass('transA');
        $('.show').children().eq(k).addClass('show_active').siblings().removeClass('show_active');
    })
})

$('.content').scroll(function(){
  if( $(this).scrollTop() >= 527){
      $('.goodinfo').addClass('fix');
  }else{
    $('.goodinfo').removeClass('fix');
  }
})

$('.cart').click(function(){
    $('footer b').html(1);
})
