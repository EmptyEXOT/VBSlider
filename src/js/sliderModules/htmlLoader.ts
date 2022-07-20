export default function renderHtml(id:string) {
    const slider = document.getElementById(id);
    let activeSlidesContainer = document.createElement('div');
    activeSlidesContainer.classList.add('activeSlidesContainer');
    //need to find the way for pushing activeSlidesContainer between btnPrev and sliderContent elements
    //slider.prepend(activeSlidesContainer);
}