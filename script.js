// get nave links
const navBar = document.getElementById("navbar");
const navToggler = document.querySelector(".nav_toggle");
const navLinks = document.querySelector(".nav_links");
const mobile = document.querySelector(".mobile");
const closeMenu = document.querySelector(".close_menu");


navToggler.addEventListener('click', (e)=>{
    navToggler.classList.toggle("toggler")
    navLinks.classList.toggle("mobile")
    
})

// fixed navbar
window.addEventListener('scroll', function(){
    const navHeight = navBar.getBoundingClientRect().height;
    const scrollHeight = window.pageYOffset;
    // console.log(navHeight);
    // console.log(scrollHeight);
    if (scrollHeight > navHeight){
        navBar.classList.add('fixed_nav');
    }else 
    navBar.classList.remove('fixed_nav');

})

// smoth scroll to sections
const scrollLink = document.querySelectorAll('.scroll_link');

scrollLink.forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault();
        // console.log(link);
        
        // navigate to specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        // console.log(id);
        const element = document.getElementById(id);
        const navHeight = navBar.getBoundingClientRect().height;
        const mobileHeight = navLinks.getBoundingClientRect().height;
        let position = element.offsetTop - navHeight;
        let mobileNav = navLinks.classList.contains("mobile")
        // console.log(mobileHeight)
        if(mobileNav){
           position = position + mobileHeight;
        //    console.log(position)

        };
        window.scrollTo({
            left:0,
            top: position,
        });
        // close navBar after clicking a link
        navLinks.classList.toggle("mobile");
        navToggler.classList.toggle("toggler");
    });
});



  














// get current year for footer
const date = document.getElementById("date");
date.innerText= new Date().getFullYear();
// console.log(date);