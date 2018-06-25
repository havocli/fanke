$('aside li').each(function(k){
    $(this).click(function(){
        $(this).addClass('active').siblings().removeClass('active');

        $('article li').eq(k).children().addClass('focus').end().siblings().children().removeClass('focus');
    })
})