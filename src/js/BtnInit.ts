import VBSlider from "./VBSlider";

export default VBSlider.prototype.BtnInit = function() {
    this.btnNext = document.getElementsByClassName('btn-prev');
    this.btnPrev = document.getElementsByClassName('btn-next');
    console.log('BtnInit');
}