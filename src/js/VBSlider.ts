import SliderPropertiesInit from "./SliderPropertiesInit";

interface Options {
    activeSlides?: number,
    startPos?:number,
}

const defaultOptions:Options = {
    activeSlides: 3,
    startPos: 1,
}

export default function VBSlider(options:Options = defaultOptions) {
    this.activeSlides = options.activeSlides;
    this.startPos = options.startPos;

    this.render = function() {
        SliderPropertiesInit.call(this);
    };
}
