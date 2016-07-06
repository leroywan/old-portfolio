var menuState = false;
$('#menu-button').click(function(){
    if (menuState == false){
        menuState = true;
    }else{
        menuState = false;
    }

    if (menuState == true){
       $('.main-header').addClass('menu-active').removeClass('menu-inactive');
       $('#top-line').css('width', '40').css('height', '40').css('borderRadius', '50%');
       $('#top-line1').css({
        height: '4',
        width: '20',
        left: '28%',
        transform: 'rotate(45deg)',
        top: '20px',
        borderRadius: '30%'
    });
       $('#top-line2').css({
        height: '4',
        width: '20',
        left: '28%',
        transform: 'rotate(-45deg)',
        top: '20px',
        borderRadius: '30%'
    });
       $('#mid-line').css('height', '0');
       $('#btm-line').css('height', '0');
    }else{
        $('.main-header').removeClass('menu-active').addClass('menu-inactive');
        $('#top-line').css('height', '8').css('borderRadius', '15%'); 
        $('#top-line1').css('transform', 'rotate(0deg)').css('height', '0');
        $('#top-line2').css('transform', 'rotate(0deg)').css('height', '0');
        $('#mid-line').css('height', '8');
        $('#btm-line').css('height', '8');
    }
    console.log(menuState);
})


var s = Snap('#svg');
