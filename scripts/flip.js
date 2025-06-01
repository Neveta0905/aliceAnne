const flipButtons = document.getElementsByClassName("flipButton")
for(let elem of flipButtons){
    elem.addEventListener("click",()=>{
        const otherButton = elem.previousElementSibling || elem.nextElementSibling
        otherButton.classList.toggle("active")
        elem.classList.toggle("active")

        otherButton.removeAttribute("disabled")
        elem.setAttribute("disabled","")

        const frontImg = elem.parentElement.nextElementSibling
        frontImg.classList.toggle("flipped")
    })
}