import SliderInitCheck from "./sliderModules/SliderInitCheck";
import BtnStateInit from "./sliderModules/BtnStateInit";
import InitSlidesCollection from "./sliderModules/InitSlidesCollection";
import SetActiveSlides from "./sliderModules/SetActiveSlides";
import SetSlidesStyles from "./sliderModules/SetSlidesStyles";
import SetBtnStyles from "./sliderModules/SetBtnStyles";
import getSlidesCount from "./sliderModules/getSlidesCount";
import getLastPos from "./sliderModules/getLastPos";

interface Options {
    activeSlidesCount?: number,
    pos?:number,
    isInfinite?:boolean,
    scrollingCount?: number,
    lastSlidePos?:number,
    slidesCount?:number,
    slidesCollection?:any,
    btnNext?:object,
    btnPrev?:object,
}

const defaultOptions:Options = {
    activeSlidesCount: 3,
    pos: 1,
    isInfinite: false,
    scrollingCount: 1,
    lastSlidePos: 1,
    slidesCount: 0,
    slidesCollection: undefined,
}

export default function VBSlider(options:Options = defaultOptions) {
    if (!options.activeSlidesCount) {
        this.activeSlidesCount = defaultOptions.activeSlidesCount;
    } else this.activeSlidesCount = options.activeSlidesCount;

    if (options.pos==undefined) {
        this.pos = defaultOptions.pos;
    } else this.pos = options.pos;

    if (!options.isInfinite) {
        this.isInfinite = defaultOptions.isInfinite;
    } else this.isInfinite = options.isInfinite;

    if (!options.scrollingCount) {
        this.scrollingCount = defaultOptions.scrollingCount;
    } else this.scrollingCount = options.scrollingCount;

    this.btnNext = document.querySelector('.btn-next');
    this.btnPrev = document.querySelector('.btn-prev');

}

VBSlider.prototype.render = function() {
    try {
        //initializing collection of slides
        let slidesCollection = InitSlidesCollection();

        //initializing lastSlidePos and slidesCount
        this.slidesCount = getSlidesCount();
        this.lastSlidePos = getLastPos(this.slidesCount, this.activeSlidesCount);

        //checking properties validity
        //not necessary for infinite mode
        SliderInitCheck(this.slidesCount, this.pos, this.lastSlidePos, this.activeSlidesCount);

        //initializing properties of buttons
        const btnState = BtnStateInit(this.pos, this.lastSlidePos, this.isInfinite);

        //setting btn styles
        SetBtnStyles(btnState, this.btnPrev, this.btnNext);

        //initializing active slides
        let activeSlides = SetActiveSlides(slidesCollection, this.pos, this.activeSlidesCount);

        //setting slides styles
        SetSlidesStyles(slidesCollection, activeSlides);

        this.btnNext.onclick = () => {
            if (this.pos+this.scrollingCount>this.lastSlidePos) {
                this.pos = this.lastSlidePos;
            } else this.pos = this.pos+this.scrollingCount;
            activeSlides = SetActiveSlides(slidesCollection, this.pos, this.activeSlidesCount)
            SetSlidesStyles(slidesCollection, activeSlides)
            this.btnPrev.removeAttribute('disabled');
            if (this.pos==this.lastSlidePos) {
                this.btnNext.setAttribute('disabled', 'true');
            }
        }
        this.btnPrev.onclick = () => {
            if (this.pos-this.scrollingCount<0) {
                this.pos = 0;
            } else this.pos = this.pos-this.scrollingCount;
            activeSlides = SetActiveSlides(slidesCollection, this.pos, this.activeSlidesCount)
            SetSlidesStyles(slidesCollection, activeSlides)
            this.btnNext.removeAttribute('disabled');
            if (this.pos==0) {
                this.btnPrev.setAttribute('disabled', 'true');
            }
        }

    } catch (err) {
        console.log(err)
    }

};