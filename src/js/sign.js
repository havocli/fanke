
$('#vertify').blur(function () {
	if($(this).val()=='') {
		$('form span').html('请输入验证码');
	}else{
        $('form span').html('');
    }

});




var reg1 = /^1[345678][0-9]{9}$/i;
$('#account').blur(function () {
	var acc = $('#account').val();
	if(!reg1.test(acc)) {
		$('form span').html('手机号码格式不正确，请重新输入');
	}else{
        $('form span').html('');
    }

});

var reg2 = /^\d{6}$/i;
$('#tel_code').blur(function () {
	var acc = $('#tel_code').val();
	if(!reg2.test(acc)) {
		$('form span').html('请输入正确的手机验证码');
	}else{
        $('form span').html('');
    }

});

var reg3 = /^(?![A-Za-z]+$)(?!\d+$)(?![\W_]+$)\S{8,16}$/i;
$('#password').blur(function () {
	var acc = $('#password').val();
	if(!reg3.test(acc)) {
		$('form span').html('密码格式不正确');
	}else{
        $('form span').html('');
    }

});

$('.sign').click(function(){
    if($('#vertify').val()==''){
        $('form span').html('请输入验证码');
    }else if($('#account').val()==''){
        $('form span').html('请输入手机号')
    }else if($('#tel_code').val()==''){
        $('form span').html('请输入手机验证码');
    }else if($('#password').val()==''){
        $('form span').html('请输入密码');
    }
});