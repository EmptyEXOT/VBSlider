import("./styles/sliderStyles.scss");

import VBSlider from "./js/VBSlider";

const slider = new (VBSlider as any)({
    activeSlidesCount: 3,
    pos: 0,
})

slider.render();
