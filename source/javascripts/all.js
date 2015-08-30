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
});
