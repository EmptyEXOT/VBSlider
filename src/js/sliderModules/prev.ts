export default function posReduce(pos:number, scrollingCount:number) {
    if (pos-scrollingCount<0) {
        return 0;
    } else return pos-scrollingCount;
}