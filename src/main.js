const sliderDOM = document.getElementById("slider");
const slides = document.querySelectorAll('.slide');
const btnNext = document.getElementById('slide-next');
const btnPrev = document.getElementById('slide-prev');

function sliderInitCheck(sliderCount, sliderActiveCount, sliderPos, sliderLastPos) {
    let errorsArr = [];
    if (sliderPos>sliderLastPos || sliderPos<0) errorsArr.push("'sliderPos' should be less or equal then 'sliderLastPos' and more or equal '0'");
    if (sliderActiveCount>sliderCount) errorsArr.push ("'SliderActiveCount should be less or equal 'sliderCount'");
    if (errorsArr.length==0) return 0;
    else return errorsArr;
}

function sliderBtnInit(sliderPos, sliderLastPos) {
    if (sliderPos==0) {
        return "disablePrev";
    }
    else if (sliderPos==sliderLastPos) {
        return "disableNext";
    }
    else return 0;
}

let initializedSlider = function sliderInitialize() {
    let mySlider = {
        slidesCount: slides.length,
        slidesActiveCount: 3,
        sliderPos: 0,
    }
    mySlider.sliderLastPos = mySlider.slidesCount-mySlider.slidesActiveCount;

    const isChecked = sliderInitCheck(mySlider.slidesCount, mySlider.slidesActiveCount, mySlider.sliderPos, mySlider.sliderLastPos);
    if (!isChecked) {
        sliderBtnInit(mySlider.sliderPos, mySlider.sliderLastPos);
        console.log("initialized!");
        return mySlider;
    }
    else {
        for (let i=0; i<isChecked.length; i++) {
            console.log(isChecked[i]);
        }
    }

}