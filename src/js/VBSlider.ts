import SliderInitCheck from "./SliderInitCheck";
import BtnStateInit from "./BtnStateInit";
import InitSlidesCollection from "./InitSlidesCollection";
import SetActiveSlides from "./SetActiveSlides";
import SetSlidesStyles from "./SetSlidesStyles";
import SetBtnStyles from "./SetBtnStyles";
import getSlidesCount from "./getSlidesCount";
import getLastPos from "./getLastPos";

interface Options {
    activeSlidesCount?: number,
    pos?:number,
    lastSlidePos?:number,
    slidesCount?:number,
    slidesCollection?:any,
    btnNext?:object,
    btnPrev?:object,
}

const defaultOptions:Options = {
    activeSlidesCount: 3,
    pos: 0,
    lastSlidePos: 1,
    slidesCount: 0,
    slidesCollection: undefined,
}

export default function VBSlider(options:Options = defaultOptions) {
    if (!options) {
        this.activeSlidesCount = defaultOptions.activeSlidesCount;
    } else this.activeSlidesCount = options.activeSlidesCount;

    this.pos = options.pos;
    this.btnNext = document.querySelector('.btn-next');
    this.btnPrev = document.querySelector('.btn-prev');

}

VBSlider.prototype.render = function() {
    try {
        //initializing collection of slides
        this.slidesCollection = InitSlidesCollection();

        //initializing lastSlidePos and slidesCount
        this.slidesCount = getSlidesCount();
        this.lastSlidePos = getLastPos(this.slidesCount, this.activeSlidesCount);

        //checking properties validity
        SliderInitCheck(this.slidesCount, this.pos, this.lastSlidePos, this.activeSlidesCount);

        //buttons initialization
        //        BtnInit.call(this);

        //initializing properties of buttons
        const btnState = BtnStateInit(this.pos, this.lastSlidePos);

        //setting btn styles
        SetBtnStyles(btnState, this.btnPrev, this.btnNext);

        //initializing active slides
        let activeSlides = SetActiveSlides(this.slidesCollection, this.pos, this.activeSlidesCount);

        //setting slides styles
        SetSlidesStyles(this.slidesCollection, activeSlides);

        this.btnNext.onclick = () => {
            this.pos++;
            activeSlides = SetActiveSlides(this.slidesCollection, this.pos, this.activeSlidesCount)
            SetSlidesStyles(this.slidesCollection, activeSlides)
            this.btnPrev.removeAttribute('disabled');
            if (this.pos==this.lastSlidePos) {
                this.btnNext.setAttribute('disabled', 'true');
            }
        }

        this.btnPrev.onclick = () => {
            this.pos--;
            activeSlides = SetActiveSlides(this.slidesCollection, this.pos, this.activeSlidesCount)
            SetSlidesStyles(this.slidesCollection, activeSlides)
            this.btnNext.removeAttribute('disabled');
            if (this.pos==0) {
                this.btnPrev.setAttribute('disabled', 'true');
            }
        }

    } catch (err) {
        console.log(err)
    }

};