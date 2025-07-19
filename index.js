// ==================navigation bar effect===============
window.addEventListener("scroll", function(){
    const header =document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY >0)
});

// ================================navigation menu item active============
window.addEventListener("scroll",() => {
     const sections = document.querySelectorAll("section");
     const scrollY = window.pageYOffset;

     sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".navitem a[href*=" + id + "]").classList.add("active");

        }
        else{
            document.querySelector(".navitem a[href*=" + id + "]").classList.remove("active");
        }
     })
})

// ==============navigation menu toggle=============
const menubtn = document.querySelector(".nav-menu-btn");
const closebtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navitem =document.querySelectorAll(".navitem a");

menubtn.addEventListener("click", () => {
     navigation.classList.add("active")
});
closebtn.addEventListener("click", () => {
    navigation.classList.remove("active")
});
navitem.forEach((navitem) => {
    navitem.addEventListener("click", () => {
         navigation.classList.remove("active")

    })
})
// ===============================email section==============
// function sendEmail(){
//     const templateParams = {
//         name: document.querySelector("#name").value,
//         email: document.querySelector("#email").value,
//         subject: document.querySelector("#subject").value,
//         message: document.querySelector("#message").value,
//     };
//     emailjs
//     .send("service_lijkthn", "template_e4pn9qp", templateParams)
//     .then(() => alert("Emails Sent!!").catch(() => alert("Email not sent!!")));
// }
function sendEmail() {
    const templateParams = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value,
    };

    emailjs.send("service_lijkthn", "template_e4pn9qp", templateParams)
        .then(function() {
            alert("Email sent successfully!");
        })
        .catch(function() {
            alert("Failed to send email.");
        });
}
