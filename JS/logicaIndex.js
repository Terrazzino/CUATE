const menu = document.querySelector(".bttn-menu");
const inicio = document.querySelector(".inicio-div");
const historia = document.querySelector(".historia-div");
const trabajo = document.querySelector(".trabajos-div");
const contactanos = document.querySelector(".contactanos-div");

menu.addEventListener("click",()=>{
    let isHidden = inicio.getAttribute("hidden");
    isHidden ? inicio.removeAttribute("hidden") : inicio.setAttribute("hidden","true");
})
menu.addEventListener("click",()=>{
    let isHidden = historia.getAttribute("hidden");
    isHidden ? historia.removeAttribute("hidden") : historia.setAttribute("hidden","true");
})
menu.addEventListener("click",()=>{
    let isHidden = trabajo.getAttribute("hidden");
    isHidden ? trabajo.removeAttribute("hidden") : trabajo.setAttribute("hidden","true");
})
menu.addEventListener("click",()=>{
    let isHidden = contactanos.getAttribute("hidden");
    isHidden ? contactanos.removeAttribute("hidden") : contactanos.setAttribute("hidden","true");
})