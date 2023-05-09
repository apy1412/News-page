const body = document.body
const menu = document.querySelector(".menu")
const close = document.querySelector(".close")

menu.addEventListener("click", ()=>{
    body.classList.add("clicked")
})

close.addEventListener("click", ()=>{
    body.classList.remove("clicked")
})