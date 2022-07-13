import("./styles/main.scss");
import VBSlider from "./js/VBSlider";

const slider = new (VBSlider as any)({
    pos: 0,
    activeSlidesCount: 3,
    isInfinite: true,
})

slider.render();
