export const getAverage = (arr) => {
    return Math.round(arr.reduce((acc, number) => acc + number, 0) / arr.length)
}