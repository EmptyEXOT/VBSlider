import VBSlider from "./VBSlider";

export default VBSlider.prototype.getLastPos = function (slidesCount:number, activeSlidesCount:number) {
    let lastSlidePos = slidesCount-activeSlidesCount;
    if (lastSlidePos<0) throw "activeSlides count should be less or equal slides count"
    else return lastSlidePos;
}