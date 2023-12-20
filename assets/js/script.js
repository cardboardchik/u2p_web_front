

// preloader
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector("body").classList.add("loaded");
    }, 100)
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
