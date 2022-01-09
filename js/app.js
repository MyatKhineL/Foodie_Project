let header = document.querySelector(".header");
let scrollTotop =  document.querySelector(".scroll-to-top");

let headerControl = new Waypoint({
    element: document.getElementById('about'),
    handler: function(direction) {
     if(direction === "down"){
        header.classList.add("shadow")
        header.classList.add("animate__slideInDown")
        scrollTotop.style.display = "block"
        scrollTotop.classList.add("animate__slideInUp")
     }else{
        header.classList.remove("shadow")
        header.classList.remove("animate__slideInDown")
        scrollTotop.style.display = "none"
        scrollTotop.classList.remove("animate__slideInUp")
     }
    },
    offset: '75%'
  })

ScrollReveal({
  origin:"top",
  distance:"30px",
  duration :1000
    
}).reveal(".content",{
    interval:200
})