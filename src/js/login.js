$('nav li').each(function(k){
    $(this).click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('section li').eq(k).addClass('focus').siblings().removeClass('focus')
    })
})
    
$('.log').click(function(){

    if($('#com_tel').val()=='' || $('#com_pas').val()==''){
        $('form b').html('请输入正确的用户名和密码');
    }else{
        
        $('form b').html('用户名或密码错误');
    }
})
