let currentSlide = 0;
let gap= 0
let currentSlidValue = 0
const caroussel = document.getElementById('caroussel') || document.getElementsByClassName('caroussel__images')[0];
const slideList = document.getElementsByClassName("slide")
const carousselGap = slideList[1].getBoundingClientRect().left - slideList[0].getBoundingClientRect().right

function moveSlide(direction) {
    let nextSLide = currentSlide + direction === slideList.length ? 0 : currentSlide + direction < 0 ? slideList.length-1 : currentSlide + direction
    gap = [...slideList].reduce((sum,curr,index)=>{
        const elemWidth = curr.getBoundingClientRect().width
        if(index<nextSLide) return sum + elemWidth + carousselGap
        return sum
    },0)
    
    caroussel.style.transform = `translateX(-${gap}px)`;
    currentSlide=nextSLide
}