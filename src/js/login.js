$('nav li').each(function(k){
    $(this).click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('section li').eq(k).addClass('focus').siblings().removeClass('focus')
    })
})
    

