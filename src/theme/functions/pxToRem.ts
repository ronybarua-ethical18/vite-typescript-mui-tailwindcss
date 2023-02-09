export const pxToRem: any = (number:number, baseNumber = 16) => {
    return `${number / baseNumber}rem`;
}