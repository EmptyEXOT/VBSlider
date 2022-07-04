type Options = {
    slidesActiveCount:number;
    sliderPos:number;
}

/*
* That class provides methods for
* generation slider properties and
* it's validation
 */

export default class SliderInit {
    slidesCount_m: number;
    slidesActiveCount_m:number;
    sliderPos_m:number;
    sliderLastPos_m:number;
    id_m: string

    constructor(id:string, options:Options) {
        this.id_m = id;
        this.slidesActiveCount_m = options.slidesActiveCount;
        this.sliderPos_m = options.sliderPos;
        this.slidesCount_m = this.getSlidesCount();
        this.sliderLastPos_m = this.getLastPos();
    }

    getSlidesCount():number {
        const sliderObj = document.getElementById(this.id_m);
        return sliderObj.getElementsByClassName('slide').length;
    }

    getLastPos():number {
        return this.slidesCount_m - this.slidesActiveCount_m;
    }

    sliderValidation():any {
        let errors: any;
        if (this.sliderPos_m>this.sliderLastPos_m || this.sliderPos_m<0) errors.push("'sliderPos' should be less or equal then 'sliderLastPos' and more or equal '0'");
        if (this.slidesActiveCount_m>this.slidesCount_m) errors.push ("'SliderActiveCount should be less or equal 'sliderCount'");
        if (errors.length==0) return 0;
        else return errors;
    }
}