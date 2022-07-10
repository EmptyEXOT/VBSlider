import VBSlider from "../VBSlider";

export default VBSlider.prototype.SetActiveSlides = function (slidesCollection:any, pos:number, activeSlidesCount:number) {
    let activeSlides = []
    for (let i = pos; i<pos+activeSlidesCount; i++) {
        activeSlides.push(slidesCollection[i]);
    }
    console.log('SetActiveSlides')
    return activeSlides;
}