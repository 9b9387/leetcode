class MyCalendarTwo {
    private calendar: Array<Array<number>> = new Array<Array<number>>();
    private overlaps: Array<Array<number>> = new Array<Array<number>>();

    constructor() {

    }

    book(start: number, end: number): boolean {
        // 如果新增的范围和重叠的区域重叠，判定为3重重叠，返回false
        for (const iv of this.overlaps) {
            if(iv[0] < end && start < iv[1]) return false;
        }

        for (const iv of this.calendar) {
            // 如果和之前的有重叠，将重叠区域添加到overlaps数组
            if(iv[0] < end && start < iv[1])
            {
                this.overlaps.push([Math.max(start, iv[0]), Math.min(end, iv[1])]);
            }
        }

        // 添加数组
        this.calendar.push([start, end]);
        return true;
    }
}

export { MyCalendarTwo }