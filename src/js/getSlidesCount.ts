import VBSlider from "./VBSlider";

//that method should be called immedeatly
export default VBSlider.prototype.getSlidesCount = function() {
        let slidesCount = document.getElementsByClassName('slide').length;
        switch (slidesCount) {
                case 0: throw "your slider hasn't contain any slides";
                default: return slidesCount;
        }
}