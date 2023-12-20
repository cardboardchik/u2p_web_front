$(document).ready(function () {

    // // toggle mobile menu
    // $('[data-toggle="toggle-nav"]').on('click', function () {
    //     $(this).closest('nav').find($(this).attr('data-target')).toggleClass('hidden');
    //     return false;
    // });

    // feather icons
    feather.replace();



});

// preloader
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector("body").classList.add("loaded");
    }, 50)
  });


if (sessionStorage.getItem("user") != null){
    $("#reg").html('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="1 1 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"/></svg>Profile');
    $("#reg_link").attr("href", "profile.html")


    // profile
    const user = JSON.parse(localStorage.getItem(sessionStorage.getItem("user")));

    $('#profile_name').text(`${user['firstname']} ${user['lastname']}`)
    $('#profile_email').text(user['email'])
    $('#InputFirstname').val(user['firstname'])
    $('#InputLastname').val(user['lastname'])
    $('#InputDateofBirth').val(user['dateofbirth'])
    $('#InputCityBirth').val(user['city'])
    $('#InputRegion').val(user['region'])
    $('#InputCountry').val(user['country'])
    $('#InputHomeAddress').val(user['adress'])
    $('#InputPhoneNumber').val(user['phone'])
    $('#InputPassword').val(user['password'])
    $('#InputConfirmPassword').val(user['password'])

}

function log_out() {
    sessionStorage.clear();
    window.location.href = "index.html";
}

    let inputEmailBool = true;
    let inputPassBool = true;

class User {

    constructor (email, firstname, lastname, dateofbirth, city, region, country, adress, phone, password){
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.dateofbirth = dateofbirth;
        this.city = city;
        this.region = region;
        this.country = country;
        this.adress = adress;
        this.phone = phone;
        this.password = password;
    }
    
    setUserId = () => {
        return localStorage.length;
    }

    addUser() {
        const user = {
            "email": this.email,
            "firstname": this.firstname,
            "lastname": this.lastname,
            "dateofbirth": this.dateofbirth,
            "city": this.city,
            "region": this.region,
            "country": this.country,
            "adress": this.adress,
            "phone": this.phone,
            "password": this.password,
        }
        
        

        localStorage.setItem(`user${this.setUserId()}`, JSON.stringify(user))
    }


}

function checkExsistUserByEmail() {
    $('#RegInputEmail').css('border', '0')
    $('#message_email').text("")
    inputEmailBool = true
    if (inputPassBool == true){
        document.getElementById('reg_submit_btn').disabled = false;
    }

    let inputEmail = $('#RegInputEmail').val();
    for (let i = 0; i < localStorage.length; i++){
        let got_user = JSON.parse(localStorage.getItem(`user${i}`));
        if (got_user != null){
            if (got_user["email"] == inputEmail){
                $('#RegInputEmail').css('border', '2px solid red')
                $('#message_email').text("A person with this email already exists")
                document.getElementById('reg_submit_btn').disabled = true;
                inputEmailBool = false
            }
        }
    }    
}

function getUsers() {

    let email = $('#exampleInputEmail1').val();
    let pass = $('#InputPassword').val();
    for (let i = 0; i < localStorage.length; i++){
        let got_user = JSON.parse(localStorage.getItem(`user${i}`));
        if (got_user != null){
            if (got_user["email"] == email && got_user["password"] == pass){
                sessionStorage.setItem("user", `user${i}`);
                window.location.href = "index.html";
            }
        }
    }

    if (sessionStorage.getItem('user') == null){
        $("#message").text("Incorrect password or email");
        $('.form_login').submit(function () {return false;});
    }
    
}

function btn_sign_up_was_clicked() {
    let user = new User($('#RegInputEmail').val(), $('#InputFirstname').val(), $('#InputLastname').val(), $('#InputDateofBirth').val(),
    $('#InputCityBirth').val(), $('#InputRegion').val(), $('#InputCountry').val(), $('#InputHomeAddress').val(), $('#InputPhoneNumber').val(), $('#InputPassword').val())
    user.addUser()
}



// function checkExsistUserByEmail() {
//     $('#RegInputEmail').css('border', '0')
//     $('#message_email').text("")
//     inputEmailBool = true
//     if (inputPassBool == true){
//         document.getElementById('reg_submit_btn').disabled = false;
//     }

//     let inputEmail = $('#RegInputEmail').val();
//     for (let i = 0; i < localStorage.length; i++){
//         let got_user = JSON.parse(localStorage.getItem(`user${i}`));
//         if (got_user != null){
//             if (got_user["email"] == inputEmail){
//                 $('#RegInputEmail').css('border', '2px solid red')
//                 $('#message_email').text("A person with this email already exists")
//                 document.getElementById('reg_submit_btn').disabled = true;
//                 inputEmailBool = false
//             }
//         }
//     }

    
// }

// function addUser() {
//     let email = $('#RegInputEmail').val();
//     let firstname = $('#InputFirstname').val();
//     let lastname = $('#InputLastname').val();
//     let dateofbirth = $('#InputDateofBirth').val();
//     let city = $('#InputCityBirth').val();
//     let region = $('#InputRegion').val();
//     let country = $('#InputCountry').val();
//     let adress = $('#InputHomeAddress').val();
//     let phone = $('#InputPhoneNumber').val();
//     let password = $('#InputPassword').val();

//     const user = {
//         "email": email,
//         "firstname": firstname,
//         "lastname": lastname,
//         "dateofbirth": dateofbirth,
//         "city": city,
//         "region": region,
//         "country": country,
//         "adress": adress,
//         "phone": phone,
//         "password": password,
//     }

//     localStorage.setItem(`user${setUserId()}`, JSON.stringify(user))
// }

// function getUsers() {

//     let email = $('#exampleInputEmail1').val();
//     let pass = $('#InputPassword').val();
//     for (let i = 0; i < localStorage.length; i++){
//         let got_user = JSON.parse(localStorage.getItem(`user${i}`));
//         if (got_user != null){
//             if (got_user["email"] == email && got_user["password"] == pass){
//                 sessionStorage.setItem("user", `user${i}`);
//                 window.location.href = "index.html";
//             }
//         }
//     }

//     if (sessionStorage.getItem('user') == null){
//         $("#message").text("Incorrect password or email");
//         $('.form_login').submit(function () {return false;});
//     }
    
// }



// console.log(localStorage.getItem('id'))


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
            document.getElementById('message').innerHTML = 'Enter a password!';
        }
        else{
            document.getElementById('InputPassword').style.border = '2px solid green';
            document.getElementById('InputConfirmPassword').style.border = '2px solid green';
            document.getElementById('message').innerHTML = '';
            inputPassBool = true;
            if (inputEmailBool == true){
                document.getElementById('reg_submit_btn').disabled = false;
            }
        }
        
    }
    else{
        document.getElementById('InputPassword').style.border = '2px solid red';
        document.getElementById('InputConfirmPassword').style.border = '2px solid red';
        document.getElementById('message').innerHTML = 'Passwords not matching!';
        document.getElementById('reg_submit_btn').disabled = true;
        inputPassBool = false;
        
    }
}









let dev_page_opened = 1;  //1 - web, 2 - desktop app, 3 - cv
const dev_page_inf  = new Map([ // name, html about, html projects
    [1, ["Web<br>Development", `<div>
    <ul>
     <li><span class="border-bottom border-danger border-5">Crafting Versatile Websites:</span> 
         <p>We specialize in crafting versatile and dynamic websites tailored to meet the diverse needs of our clients. Whether you seek a minimalist single-page layout or a comprehensive, multifunctional online platform, our team is equipped to bring your vision to life.</p>
     </li>
     <li><span class="border-bottom border-danger border-5">Custom Solutions for Every Need: </span> 
         <p>Our approach involves understanding your specific requirements and customizing solutions accordingly. From responsive design for optimal viewing across devices to robust backend architecture, we ensure that your website not only looks impressive but functions seamlessly.</p>
     </li>
     <li><span class="border-bottom border-danger border-5">Cutting-edge Technologies and Techniques: </span> 
         <p>At our core, we harness the power of the latest technologies and industry best practices. Our team is proficient in utilizing a variety of tools, frameworks, and coding languages to create websites that are both visually appealing and technically sound.</p>
     </li>
     <li><span class="border-bottom border-danger border-5">Collaborative Development Process: </span> 
         <p>We believe in collaboration and involve our clients in every stage of development. Your inputs and ideas are crucial in shaping the final product, and we work closely with you to ensure that the end result aligns perfectly with your vision.</p>
     </li>
     <li><span class="border-bottom border-danger border-5">Emphasis on User Experience: </span> 
         <p>User experience is paramount in our development process. We focus on intuitive navigation, engaging interfaces, and fast-loading pages to provide visitors with a seamless and enjoyable browsing experience.</p>
     </li>
     <li><span class="border-bottom border-danger border-5">Scalable and Future-ready Solutions: </span> 
         <p>Our websites are designed with scalability in mind. As your business grows, your website can easily evolve to accommodate increased traffic, new features, and changing demands without compromising performance.</p>
     </li>
     <li><span class="border-bottom border-danger border-5">Comprehensive Support and Maintenance: </span> 
         <p>Our commitment doesn't end at the website launch. We offer ongoing support and maintenance services to ensure that your website continues to operate efficiently and stays up-to-date with evolving technologies and security standards.</p>
     </li>
    </ul>
 </div>`, `<div class="container">
 <div class="row">
     <div class="d-flex col-md-6 product_option">
         <div class="p-3 m-2 bg-light rounded">
             <img src="assets/images/shp_logo.png" alt="School of Entrepreneurs" class="shp_product_logo">
             <div class="text-dark fw-bold fs-6">One of our projects for an educational institution was the website of the School of Entrepreneurs.</div>
             <p class="indigo-lightest fw-600" style="color: black;">
                 The site contains many sections, including electronic textbooks, 3D tours, and much more. Students can access schedules, current updates, and specific pages dedicated to school organizations (clubs).
             </p>
             <a href="https://schoolshp.kz/" target="_blank" class="btn btn-dark text-white read_button product_option_btn">Look</a>
         </div>
     </div>
     <div class="d-flex col-md-6 product_option">
         <div class="p-3 m-2 rounded bg_white_black">
             <img src="assets\\images\\u2p_sim_web_white.svg" alt="U2P Simulator" class="u2p_product_logo">
             <div class="text-white fw-bold fs-6">Competitive Simulator of Economics and Management (CSEM) WEB Version!</div>
             <p class="indigo-lightest fw-600">
                 CSEM, an economic simulation, aids both university and school students. Through management simulations, learners grasp enterprise operations and align theoretical knowledge with practical experimentation. This fosters systemic thinking, interdisciplinary diagnosis, and strategic cognition.
             </p>
             <a class="btn btn-dark text-white-50 read_button product_option_btn">Soon</a>
         </div>
     </div>
 </div>
</div>`]],
    [2, ["Desktop<br>Appliacations", `<div>
    <ul>
     <li><span class="border-bottom border-danger border-5">Tailored Solutions for Desktops: </span> 
         <p>We specialize in developing robust and tailored applications for desktop platforms, catering to both business and personal needs. Our team excels in creating applications that ensure convenience, functionality, and a seamless user experience.</p>
         </li>
     <li><span class="border-bottom border-danger border-5">Business-Centric Applications: </span> 
         <p>For businesses seeking custom desktop solutions, we craft applications designed to streamline operations, improve productivity, and meet specific business objectives. From management tools to analytics software, we build tailored solutions to enhance your workflow.</p>
         </li>
     <li><span class="border-bottom border-danger border-5">User-focused Design and Functionality: </span> 
         <p>Our approach to desktop application development revolves around user-centric design principles. We create intuitive interfaces and user-friendly functionalities that ensure ease of navigation and a high level of usability.</p>
         </li>
     <li><span class="border-bottom border-danger border-5">Reliability and Performance: </span> 
         <p>Our applications are engineered to deliver reliability and high performance. They are thoroughly tested to ensure they meet quality standards and function seamlessly across various desktop environments and operating systems.</p>
         </li>
     <li><span class="border-bottom border-danger border-5">Personalized Applications for Individuals: </span> 
         <p>For personal use, we offer custom desktop applications that cater to individual preferences and requirements. Whether it's productivity tools, entertainment applications, or specialized utilities, we tailor solutions to suit your personal computing needs.</p>
         </li>
     <li><span class="border-bottom border-danger border-5">Scalable and Adaptable Solutions: </span> 
         <p>Our desktop applications are designed with scalability in mind. As your needs evolve or expand, our applications can easily adapt and scale to accommodate new features or increased user demands without compromising performance.</p>
     </li>
     <li><span class="border-bottom border-danger border-5">Continuous Support and Updates: </span> 
         <p>We provide ongoing support and maintenance for our desktop applications, ensuring they remain up-to-date, secure, and compatible with evolving technologies and system updates.</p>
     </li>
    </ul>
 </div>`, `<div class="container">
 <div class="row">
     <div class="d-flex col-md product_option">
         <div class="p-3 m-2 rounded bg_white_black">
             <img src="assets/images/u2p_sim_logo_white.png" alt="U2P Simulator" class="u2p_product_logo">
             <div class="text-white fw-bold fs-6">Competitive Simulator of Economics and Management (CSEM).</div>
             <p class="indigo-lightest fw-600">
                 CSEM, an economic simulation, aids both university and school students. Through management simulations, learners grasp enterprise operations and align theoretical knowledge with practical experimentation. This fosters systemic thinking, interdisciplinary diagnosis, and strategic cognition.
             </p>
             <a href="simulator.html" class="btn btn-dark text-white read_button product_option_btn">Read</a>
         </div>
     </div>
 </div>
</div>`]],
    [3, ["Computer<br>Vision", `<div>
    <ul>
     <li><span class="border-bottom border-danger border-5">Interpreting Visual Data: </span> 
         <p>Our expertise in computer vision allows us to harness the power of visual data. We develop solutions that enable machines to interpret, analyze, and comprehend the visual world, opening doors to a multitude of applications across various industries.</p>
         </li>
     <li><span class="border-bottom border-danger border-5">Automation and Intelligence: </span> 
         <p>Using advanced computer vision techniques, we empower automation and intelligence in systems. Our solutions facilitate tasks such as image recognition, object detection, and pattern analysis, enhancing efficiency and accuracy in diverse processes.</p>
         </li>
     <li><span class="border-bottom border-danger border-5">Enhancing Decision-Making: </span> 
         <p>Computer vision technologies play a pivotal role in enhancing decision-making processes. By extracting valuable insights from visual data, our solutions aid in informed decision-making, enabling businesses to derive meaningful conclusions from complex visual information.</p>
         </li>
     <li><span class="border-bottom border-danger border-5">Industry-specific Applications: </span> 
         <p>We design computer vision solutions tailored to specific industry needs. From manufacturing and healthcare to retail and security, our applications address industry-specific challenges and provide innovative solutions powered by visual data analysis.</p>
         </li>
     <li><span class="border-bottom border-danger border-5">Cutting-edge Algorithms and Techniques: </span> 
         <p>At the heart of our computer vision solutions lie cutting-edge algorithms and techniques. Our team leverages the latest advancements in machine learning, neural networks, and image processing to create sophisticated and accurate vision-based systems.</p>
         </li>
     <li><span class="border-bottom border-danger border-5">Real-time Analysis and Feedback: </span> 
         <p>Our computer vision systems are engineered to provide real-time analysis and actionable feedback. This capability allows for immediate responses to visual stimuli, enabling timely decision-making and interventions in various scenarios.</p>
     </li>
     <li><span class="border-bottom border-danger border-5">Continuous Innovation and Evolution: </span> 
         <p>We continuously innovate and evolve our computer vision solutions. As technology progresses, our commitment remains steadfast in adapting our systems to embrace advancements and remain at the forefront of the rapidly evolving field of computer vision.</p>
     </li>
    </ul>
 </div>`, `<div class="container">
    <div class="row">
        <div class="d-flex col-md product_option justify-content-center">
            <div class="p-3 m-2 rounded bg_white_black flex-fill" >
                <img src="assets\\images\\u2p_ify_white.svg" alt="U2P Simulator" class="u2p_product_logo">
                <h1 class="text-white text-center ">Soon</h1>
            </div>
        </div>
    </div>
</div>`]],
    ])

function wd_was_clicked() {
    switch (dev_page_opened){
        case 2:
            $("#current_page").attr("class", "text-reset nav-link")
            $("#current_page").attr("id", "da")
            $("#current_features").attr("id", "da_f")
        case 3:
            $("#current_page").attr("class", "text-reset nav-link")
            $("#current_page").attr("id", "cv")
            $("#current_features").attr("id", "cv_f")

    }
    dev_page_opened = 1;
    $("#text_c").fadeOut(function(){$("#text_c").html(dev_page_inf.get(dev_page_opened)[0]).fadeIn()})

    $("#wd").attr("id", "current_page")
    $("#wd_f").attr("id", "current_features")

    $("#current_page").attr("class", "nav-link")

    $("#dev_about").html(dev_page_inf.get(dev_page_opened)[1])
    $("#projects_dev").html(dev_page_inf.get(dev_page_opened)[2])
}
function da_was_clicked() {
    switch (dev_page_opened){
        case 1:
            $("#current_page").attr("class", "text-reset nav-link")
            $("#current_page").attr("id", "wd")
            $("#current_features").attr("id", "wd_f")
        case 3:
            $("#current_page").attr("class", "text-reset nav-link")
            $("#current_page").attr("id", "cv")
            $("#current_features").attr("id", "cv_f")
        
    }

    dev_page_opened = 2;
    $("#text_c").fadeOut(function(){$("#text_c").html(dev_page_inf.get(dev_page_opened)[0]).fadeIn()})

    $("#da").attr("id", "current_page")
    $("#da_f").attr("id", "current_features")

    $("#current_page").attr("class", "nav-link")

    $("#dev_about").html(dev_page_inf.get(dev_page_opened)[1])
    $("#projects_dev").html(dev_page_inf.get(dev_page_opened)[2])
}
function cv_was_clicked() {
    switch (dev_page_opened){
        case 1:
            $("#current_page").attr("class", "text-reset nav-link")
            $("#current_page").attr("id", "wd")
            $("#current_features").attr("id", "wd_f")
        case 2:
            $("#current_page").attr("class", "text-reset nav-link")
            $("#current_page").attr("id", "da")
            $("#current_features").attr("id", "da_f")

    }
    dev_page_opened = 3;
    $("#text_c").fadeOut(function(){$("#text_c").html(dev_page_inf.get(dev_page_opened)[0]).fadeIn()})

    $("#cv").attr("id", "current_page")
    $("#cv_f").attr("id", "current_features")

    $("#current_page").attr("class", "nav-link")

    $("#dev_about").html(dev_page_inf.get(dev_page_opened)[1])
    $("#projects_dev").html(dev_page_inf.get(dev_page_opened)[2])
}


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const page = parseInt(urlParams.get("page"));

switch (page){
    case 1:
        wd_was_clicked();
        break;
    case 2:
        da_was_clicked();
        break;
    case 3:
        cv_was_clicked();
        break;
}

function home_wd_was_clicked() {
    window.location.href = "dev.html?page=1";
    
}
function home_da_was_clicked() {
    window.location.href = "dev.html?page=2";
    
}
function home_cv_was_clicked() {
    window.location.href = "dev.html?page=3";
    
}
