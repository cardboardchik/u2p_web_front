$(document).ready(function () {

    // // toggle mobile menu
    // $('[data-toggle="toggle-nav"]').on('click', function () {
    //     $(this).closest('nav').find($(this).attr('data-target')).toggleClass('hidden');
    //     return false;
    // });

    // feather icons
    feather.replace();



});



$(function(){
    $.get('news.html', function(result){
        let last_n = $(result).find('.main_text').html(); // find last news
        $("#event").html(`${last_n} Learn more...`)
    });
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




//
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add("show")
        }
        // else{
        //     entry.target.classList.remove("show")
        // }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');


hiddenElements.forEach((element) => observer.observe(element))


// log|reg
const html_psw = ['<i><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye" viewBox="0 1 18 18"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/></svg></i>Show',
'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye-slash" viewBox="0 1 18 18"><path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486z"/><path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/><path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708"/></svg>Hide']

let psw_show = 0;
$('#show_hide_psw').click(function(){
    if (psw_show == 0){
        $('#InputPassword').attr('type', 'text');
        $('#InputConfirmPassword').attr('type', 'text');
        psw_show = 1;

        $('#show_hide_psw').html(`${html_psw[1]}`)
    }
    else{
        $('#InputPassword').attr('type', 'password');
        $('#InputConfirmPassword').attr('type', 'password');
        psw_show = 0;

        $('#show_hide_psw').html(`${html_psw[0]}`)
    }

})



let check = function() {
    if (document.getElementById('InputPassword').value == document.getElementById('InputConfirmPassword').value ){
        if (document.getElementById('InputPassword').value == '' && document.getElementById('InputConfirmPassword').value == ''){
            document.getElementById('InputPassword').style.border = '2px solid yellow';
            document.getElementById('InputConfirmPassword').style.border = '2px solid yellow';
            document.getElementById('reg_submit_btn').disabled = true;
            document.getElementById('message').innerHTML = 'Enter a password!';
        }
        else{
            document.getElementById('InputPassword').style.border = '2px solid green';
            document.getElementById('InputConfirmPassword').style.border = '2px solid green';
            document.getElementById('reg_submit_btn').disabled = false;
            document.getElementById('message').innerHTML = '';
        }
        
    }
    else{
        document.getElementById('InputPassword').style.border = '2px solid red';
        document.getElementById('InputConfirmPassword').style.border = '2px solid red';
        document.getElementById('reg_submit_btn').disabled = true;
        document.getElementById('message').innerHTML = 'Passwords not matching!';
    }
}


