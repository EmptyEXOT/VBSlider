import VBSlider from "../VBSlider";

export default VBSlider.prototype.BtnStateInit = function(pos:number, lastSlidePos:number, ) {
    if (pos==0 && pos==lastSlidePos) return 'disableBoth';
    else if (pos == 0) return 'disablePrev';
    else if (pos == lastSlidePos) return 'disableNext';

}