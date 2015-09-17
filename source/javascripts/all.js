//= require jquery/dist/jquery

$(document).ready(function(){
    var hour = new Date().getHours();

    function welcomeMsg(msg) {
        $('#welcome-msg').html(msg);
    }

    if(hour <= 3) {
        welcomeMsg('Good Night');
    } else if(hour >= 4 && hour <= 11) {
        welcomeMsg('Good Morning');
    } else if(hour >= 12 && hour <= 17) {
        welcomeMsg('Good Afternoon');
    }else if(hour >= 18 && hour <= 24) {
        welcomeMsg('Good Evening');
    }

    $('#nav-toggle').on('click', function() {
        $('.global-nav').css({'height': '100%'});
        $('.global-nav__item').css({'display': 'block'});
    });

    $('#intro-toggle').on('click', function(){
        $('#intro-more').slideDown();
        $('#intro-toggle span').animate({
            opacity: 0
        });
        $('#intro-toggle').animate({
            height: 0,
            paddingTop: 0,
            paddingBottom: 0,
            opacity: 0
        });
        $('#intro-line').css({
            'max-height': 'none'
        });
    });


});
