export default function posIncrease(pos:number, scrollingCount:number, lastSlidePos:number, isInfinite:boolean, activeSlidesCount:number) {

    if (pos+scrollingCount>lastSlidePos && !isInfinite) {
        return lastSlidePos;
    }
    if ((pos-activeSlidesCount)==lastSlidePos) return 0;
    else return pos+scrollingCount;
}




