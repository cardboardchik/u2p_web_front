$(document).ready(function () {

    // // toggle mobile menu
    // $('[data-toggle="toggle-nav"]').on('click', function () {
    //     $(this).closest('nav').find($(this).attr('data-target')).toggleClass('hidden');
    //     return false;
    // });

    // feather icons
    feather.replace();

});

const texts = ['easier', 'safer', 'more interesting', 'more fun']
let point = -1;

function changeText(){
    
    if (point == texts.length - 1){
        point = -1;
    }
    $("#change_word").fadeOut(function(){$("#change_word").html(`${texts[point]}`).fadeIn()})
    
    point++;
}
setInterval(changeText, 1500)
changeText()

$('#topBtn').css('display', 'none')

window.onscroll = function() {scrollCheck()};

function scrollCheck(){
    if (document.body.scrollTop > 140 || document.documentElement.scrollTop > 140){
        $('#topBtn').css('display', 'block')
    }
    else{
        $('#topBtn').css('display', 'none')
    }
}

function scrollTop1(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
}

