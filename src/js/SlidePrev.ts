import VBSlider from "./VBSlider";
import SetActiveSlides from "./SetActiveSlides";
import SetSlidesStyles from "./SetSlidesStyles";

export default VBSlider.prototype.SlideNext = function (pos:number, slidesCollection:any, activeSlidesCount:number, btnNext:any, btnPrev:any) {
    return function p() {
        pos--;
        const activeSlides = SetActiveSlides(slidesCollection, pos, activeSlidesCount)
        SetSlidesStyles(slidesCollection, activeSlides);
        btnNext.removeAttribute('disabled');
        if (pos==0) {
            btnPrev.setAttribute('disabled', 'true');
        }
    }
}