import("./styles/sliderStyles.scss");
import NavBtn from "./js/NavBtn";

import SliderInit from "./js/SliderInit";
import BtnNext from "./js/BtnNext";

const sliderInit = new SliderInit('slider', {
    slidesActiveCount: 3,
    sliderPos: 2,
})

sliderInit.sliderValidation();

//DOM initializing
const sliderDOM = document.getElementById("slider");
const slides = document.querySelectorAll('.slide');
const btnPrev = document.getElementById('slide-prev');

const btnNext = new BtnNext('slide-next', sliderInit.sliderPos_m, sliderInit.sliderLastPos_m);

//Initializing
interface mySlider {
    slidesCount:number,
    slidesActiveCount:number,
    sliderPos:number,
    sliderLastPos:number,
}

//Button Initializing
/*
*Create new var type for btn states
 */
function sliderBtnInit(sliderPos:number, sliderLastPos:number) {
    if (sliderPos==0 && sliderPos==sliderLastPos) {
        return "disableBoth";
    }
    if (sliderPos==0) {
        return "disablePrev";
    }
    else if (sliderPos==sliderLastPos) {
        return "disableNext";
    }
}

function btnStyle(btnState:string) {
    if (btnState == 'disableBoth') {
        btnPrev.setAttribute('disabled', 'true');
        btnNext.setAttribute('disabled', 'true');
    }
    else if (btnState == 'disablePrev') {
        btnPrev.setAttribute('disabled', 'true');
    }
    else if (btnState == 'disableNext') {
        btnNext.setAttribute('disabled', 'true');
    }
}

function setActiveSlides(mySlider:mySlider) {
    let activeSlides = []
    for (let i = mySlider.sliderPos; i<mySlider.sliderPos+mySlider.slidesActiveCount; i++) {
        activeSlides.push(slides[i]);
    }
    return activeSlides;
}

function slidesStyles(activeSlides:any) {
    for (let i = 0; i<slides.length; i++) {
        slides[i].classList.remove('active');
    }
    for (let i = 0; i<activeSlides.length; i++) {
        activeSlides[i].classList.add('active');
    }
}

function sliderInitialize() {
    let mySlider:mySlider = {
        slidesCount: slides.length,
        slidesActiveCount: 5,
        sliderPos: 1,
        sliderLastPos: 0,
    }

    mySlider.sliderLastPos = mySlider.slidesCount-mySlider.slidesActiveCount;

    if (!isChecked) {
        btnStyle(sliderBtnInit(mySlider.sliderPos, mySlider.sliderLastPos))
        console.log(setActiveSlides(mySlider));
        slidesStyles(setActiveSlides(mySlider));
        console.log("initialized!");
        return mySlider;
    }
    else {
        for (let i=0; i<isChecked.length; i++) {
            console.log(isChecked[i]);
        }
    }

}

let initializedSlider = sliderInitialize();

//Slides Changing logic

function slideNext(initializedSlider:mySlider) {
    initializedSlider.sliderPos++;
    slidesStyles(setActiveSlides(initializedSlider));
    btnPrev.removeAttribute('disabled');
    if (initializedSlider.sliderPos==initializedSlider.sliderLastPos) {
        btnNext.setAttribute('disabled', 'true');
    }
}

function slidePrev(initializedSlider:mySlider) {
    initializedSlider.sliderPos--;
    slidesStyles(setActiveSlides(initializedSlider));
    btnNext.removeAttribute('disabled');
    if (initializedSlider.sliderPos==0) {
        btnPrev.setAttribute('disabled', 'true');
    }
}

btnNext.onclick = function () {
    slideNext(initializedSlider);
}

btnPrev.onclick = function () {
    slidePrev(initializedSlider);
}

