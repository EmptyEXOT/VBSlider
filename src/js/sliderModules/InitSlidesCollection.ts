import VBSlider from "./VBSlider";

export default VBSlider.prototype.InitSlidesCollection = function () {
    let slidesCollection = document.getElementsByClassName('slide');
    switch (slidesCollection.length) {
        case 0: throw "your slider hasn't contain any slides";
        default: return slidesCollection;
    }
}