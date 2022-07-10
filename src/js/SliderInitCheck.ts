import VBSlider from "./VBSlider";

export default VBSlider.prototype.SliderInitCheck = function (slidesCount:number, pos:number, lastSlidePos:number, activeSlidesCount:number) {
        if (pos > lastSlidePos || pos < 0) throw "pos>lastSlidePos || pos<0"
        if (activeSlidesCount>slidesCount) throw "'SliderActiveCount should be less or equal 'sliderCount'";
}

