function peakIndexInMountainArray(arr: number[]): number {
    let i: number = 0;
    while (arr[i] < arr[i + 1]) i++;
    return i;
};

export { peakIndexInMountainArray }