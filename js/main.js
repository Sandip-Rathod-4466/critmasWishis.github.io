$(document).ready(function(){

    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        if(scroll > 1){
            $(".navbar").addClass('sticky_on');
        }else {
            $(".navbar").removeClass('sticky_on');
        }
    })
    $('.nav-link').click(function(){
        $('#navbarSupportedContent').removeClass('show');
    })
});