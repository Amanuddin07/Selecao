// Start Nav and Toggle Menu

// Select elements
const toggle = document.querySelector(".toggle");
const navbar = document.querySelector(".navbar");

// Function to toggle navbar
toggle.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevents the click from propagating to the document

    navbar.classList.toggle("active");

    // Change the toggle icon
    if (navbar.classList.contains("active")) {
        toggle.innerHTML = `<i class="bi bi-x"></i>`;
    } else {
        toggle.innerHTML = `<i class="bi bi-list"></i>`;
    }
});

// Close navbar when clicking outside of it
document.addEventListener("click", (e) => {
    if (!navbar.contains(e.target) && !toggle.contains(e.target)) {
        navbar.classList.remove("active");
        toggle.innerHTML = `<i class="bi bi-list"></i>`; // Reset icon
    }
});

// End Nav and Toggle Menu







// Features section Tabs

const tabs = document.querySelectorAll(".tab-1");
const tabDetails = document.querySelectorAll(".features-menu-detail")


tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabs.forEach((tab) => tab.classList.remove("active"));
        tabDetails.forEach((tab) => tab.classList.remove("active"));

        tab.classList.add("active");
        const m = tab.dataset.target;
        const el = document.getElementById(m)
        el.classList.add("active");
    });
});

// End Features section Tabs









// FAQ Accordian

const faqHeads = document.querySelectorAll(".faq-head");
const faqBodys = document.querySelectorAll(".faq-body");
const faqIcons = document.querySelectorAll(".faq-head p i");

faqHeads.forEach((faqHead) => {
    faqHead.addEventListener("click", () => {
        const faqBody = faqHead.nextElementSibling;
        const icon = faqHead.querySelector("i");
        const isActive = faqBody.classList.contains("active");

        // Remove active class from all
        faqBodys.forEach((b) => b.classList.remove("active"));
        faqIcons.forEach((i) => i.classList.remove("active"));
        faqHeads.forEach((h) => h.classList.remove("active"));

        if (!isActive) {
            faqBody.classList.add("active");
            faqHead.classList.add("active"); // Change text color
            icon.classList.add("active");
        }
    });
});


// End FAQ Accordian









// Back To Top

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", ()=> {
    topBtn.classList.toggle("active", (window.scrollY >= 600));
});

topBtn.addEventListener("click", ()=> {
    window.scrollTo({top: 0, behavior: "smooth"})
})

// End Back To Top






// Animation

function observeAndAnimation(Element) {
    // const ps = document.querySelectorAll("p")
    const ob = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // console.log(entry.target, entry.isIntersecting)
            const{target,isIntersecting} = entry;
            // entry.target.classList.toggle("animation", entry.isIntersecting);
            // if(entry.isIntersecting){
            //     ob.unobserve(entry.target)
            // }

            if(isIntersecting) {
                const delay = parseInt(target.dataset.delay) || 0;
                console.log(delay)
                setTimeout(() => {target.classList.add("animation")},delay) 
            }
        })
    }, {rootMargin: "-10px"})
    ob.observe(Element)
}

// Hero Section Animation
const h1s = document.querySelectorAll("h1");
h1s.forEach((h1) => {observeAndAnimation(h1)});

const heroP = document.querySelectorAll(".hero-content p");
heroP.forEach((p) => {observeAndAnimation(p)})

const heroBtn = document.querySelectorAll(".hero-btn");
heroBtn.forEach((b) => {observeAndAnimation(b)})




// Heading Section Animation

const headings = document.querySelectorAll(".heading");
headings.forEach((heading) => {observeAndAnimation(heading)});



// About Animation Section

const aboutContent = document.querySelector(".about-content");
observeAndAnimation(aboutContent);


// Features Aimation Section

const featuresMenu = document.querySelector(".features-menu");
observeAndAnimation(featuresMenu);


// Features Menu Detail Animation Section

const featuresMenuDetails = document.querySelectorAll(".features-menu-detail");
featuresMenuDetails.forEach((featuresMenuDetail) => {observeAndAnimation(featuresMenuDetail)});



// CTA Animation Section

const ctaContent = document.querySelector(".cta-content");
observeAndAnimation(ctaContent);



// Services Animation Section

const servicesContent = document.querySelector(".services-content");
observeAndAnimation(servicesContent);



// Testi Animation Section

const testiContent = document.querySelector(".testi-content");
observeAndAnimation(testiContent);


// Priceing Content Animation Section

const priceContent = document.querySelector(".price-content");
observeAndAnimation(priceContent);


// FAQ Accordian Animation Section

const accordian = document.querySelector(".accordian");
observeAndAnimation(accordian);


// Team Content Animation Section

const teamContent = document.querySelector(".team-content");
observeAndAnimation(teamContent);


// Contact Content Animation Section

const contactContent = document.querySelector(".contact-content");
observeAndAnimation(contactContent);


// Footer Content Animation Section

const footerContent =document.querySelector(".footer-content");
observeAndAnimation(footerContent);


// Credit Section Animation

const creditContent = document.querySelector(".credit-content");
observeAndAnimation(creditContent);

