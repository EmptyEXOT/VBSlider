import VBSlider from "./VBSlider";

//that method should be called immedeatly
export default VBSlider.prototype.SliderPropertiesInit = function() {
    return {
        lastSlidePos: this.slidesCount - this.activeSlides,
        slidesCount: document.getElementsByClassName('slides').length,
    };
}