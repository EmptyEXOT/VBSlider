import VBSlider from "./VBSlider";

export default VBSlider.prototype.SliderInitCheck = function (slidesCount:number, pos:number, lastSlidePos:number, activeSlidesCount:number) {
        if (pos > lastSlidePos || pos < 0) throw "'sliderPos' should be less or equal then 'sliderLastPos' and more or equal '0'"
        if (activeSlidesCount>slidesCount) throw "'SliderActiveCount should be less or equal 'sliderCount'";
}

