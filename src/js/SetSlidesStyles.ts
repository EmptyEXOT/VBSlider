import VBSlider from "./VBSlider";

export default VBSlider.prototype.SetSlidesStyles = function(slidesCollection:any, activeSlides:any) {
    for (let i = 0; i<slidesCollection.length; i++) {
        slidesCollection[i].classList.remove('active');
    }
    for (let i = 0; i<activeSlides.length; i++) {
        activeSlides[i].classList.add('active');
    }
    console.log('SetSlidesStyles');
}