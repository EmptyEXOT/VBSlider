import VBSlider from "./VBSlider";
import SetActiveSlides from "./SetActiveSlides";
import SetSlidesStyles from "./SetSlidesStyles";

export default VBSlider.prototype.SlideNext = function (pos:number, slidesCollection:any, activeSlidesCount:number, btnNext:any, btnPrev:any, lastSlidePos:number) {

    return function f() {
        pos++;
        const activeSlides = SetActiveSlides(slidesCollection, pos, activeSlidesCount)
        SetSlidesStyles(slidesCollection, activeSlides);
        btnPrev.removeAttribute('disabled');
        if (pos==lastSlidePos) {
            btnNext.setAttribute('disabled', 'true');
        }
    }
}