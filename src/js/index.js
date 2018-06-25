   
   
   function count(){
        
        var fut = new Date('2018/7/30 20:00:00').getTime();

        var now = new Date().getTime();

        var time = fut -now;

        var h = parseInt(time/1000/60/60%24);
        var m = parseInt(time/1000/60%60);
        var s = parseInt(time/1000%60);

        if(h<10){
            h = '0' + h;
        }
        if(m<10){
            m = '0' + m;
        }
        if(s<10){
            s = '0' + s;
        }

        $('#hour').html(h);
        $('#min').html(m);
        $('#sec').html(s);

        setTimeout(count,1000);
    }
    count();
 