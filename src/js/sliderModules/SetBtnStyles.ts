import VBSlider from "../VBSlider";

export default VBSlider.prototype.SetBtnStyles = function(btnState:string, btnPrev:any, btnNext:any) {
    if (btnState == 'disableBoth') {
        btnPrev.setAttribute('disabled', 'true');
        btnNext.setAttribute('disabled', 'true');
    }
    else if (btnState == 'disablePrev') {
        btnPrev.setAttribute('disabled', 'true');
    }
    else if (btnState == 'disableNext') {
        btnNext.setAttribute('disabled', 'true');
    }
}