import("./styles/main.scss");
import VBSlider from "./js/VBSlider";

const slider = new (VBSlider as any)({
    pos: 1,
    activeSlidesCount: 3,
    isInfinite: false,
    scrollingCount: 4,
})

slider.render();
