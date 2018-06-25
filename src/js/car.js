$('.add').click(function(){
    var n = $(this).parents('.info').find('.num span');
    n.html(parseInt(n.html()) + 1);
    sum();
}) 

$('.min').click(function(){
    var n = $(this).parents('.info').find('.num span');
    n.html(parseInt(n.html()) - 1);
    if(n.html()<=1){
        n.html(1);
    }
    sum();
}) 

$('.info_left a').click(function(){
    $(this).toggleClass('right');
    if($('.info_left .right').length == $('.info_left a').length){
        $('.foo_left i').addClass('all');
        sum();
    }else{
        $('.foo_left i').removeClass('all');
        sum();
    }
})

$('.foo_left i').click(function(){
    $(this).toggleClass('all');
    if($(this).hasClass('all')){
        $('.info_left a').addClass('right');
        sum();
    }else{
        $('.info_left a').removeClass('right');
        sum();
    }
})

function sum(){
    var total_price = 0;
    $('.info_left a').each(function(){
        if($(this).hasClass('right')){
            var p   =parseFloat($(this).parents('.info').find('p span').html());
            var num =parseInt($(this).parents('.info').find('.num span').html());
            var sum =p * num;
            console.log(sum)
            total_price += sum; 
        }
        $('.foo_left b').html((total_price).toFixed(2));
    })
}

