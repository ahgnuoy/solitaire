const placeWidth = 1 / 12;
const placeHeight = placeWidth * (4/3);
const marginTop = 10;
const marginRight = 10;
const marginLeft = 10;

export function place2rect (place, wh) {
    const xywh = [
        placeWidth * place.pos + (6 - place.rank) * placeWidth / 2,
        placeHeight * (place.rank + 1),
        placeWidth,
        placeHeight,
    ]
    return [
        xywh[0] * wh[0] + marginLeft,
        xywh[1] * wh[1] + marginTop,
        xywh[2] * wh[0],
        xywh[3] * wh[1],
    ]
}

export function stock2rect (index, wh) {
    const xywh = [
        placeWidth * (8 + index % 3),
        placeHeight * (7 - Math.floor(index / 3)),
        placeWidth,
        placeHeight,
    ]
    return [
        xywh[0] * wh[0] - marginRight,
        xywh[1] * wh[1] + marginTop,
        xywh[2] * wh[0],
        xywh[3] * wh[1],
    ]
}