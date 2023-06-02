export default function drawPyramid (ctx, wh, board) {
    drawPlaces(ctx, board.places)
    drawStock(ctx, board.stock)
    drawUI(ctx, wh)
}

const buttonWidth = 50
const buttonHeight = 50
const marginLeft = 10
const marginBottom = 10
function drawUI(ctx, wh) {
    console.log(ctx, wh)
    ctx.strokeRect(
        wh[0] - buttonWidth - marginLeft,
        wh[1] - buttonHeight - marginBottom,
        buttonWidth,
        buttonHeight
    )
}

function drawPlaces(ctx, places) {
    places.forEach(place => {
        if(place.card) {
            place.card.sort.image.onload = function () {
                drawPlace(ctx, place)
            }
            drawPlace(ctx, place)
        }
    })
}

function drawPlace(ctx, place) {
    const margin = 1
    const cardRect = [ place.card.rect[0] + margin, place.card.rect[1] + margin, place.card.rect[2] - 2 * margin, place.card.rect[3] - 2 * margin ]
    const cardInnerRect = [ place.card.rect[0] - margin, place.card.rect[1] - margin, place.card.rect[2] + 2 * margin, place.card.rect[3] + 2 * margin ]

    ctx.drawImage(place.card.sort.image, ...cardRect) 
    if(place.card.isSelected) {
        ctx.lineWidth = 1
        ctx.strokeStyle = 'red'
        ctx.strokeRect(...cardRect)
    } 
    place.setSelectable()
    if(place.selectable) {
        ctx.lineWidth = 2
        ctx.strokeStyle = 'green'
        ctx.strokeRect(...cardInnerRect)
    }
}

function drawStock(ctx, stock) {
    stock.forEach(reserve => {
        if(reserve.card) {
            reserve.card.sort.image.onload = function () {
                drawReserve(ctx, reserve)
            }
            drawReserve(ctx, reserve)
        }
    })
}

function drawReserve(ctx, reserve) {
    const margin = 1
    const cardRect = [ reserve.card.rect[0] + margin, reserve.card.rect[1] + margin, reserve.card.rect[2] - 2 * margin, reserve.card.rect[3] - 2 * margin ]
    const cardInnerRect = [ reserve.card.rect[0] - margin, reserve.card.rect[1] - margin, reserve.card.rect[2] + 2 * margin, reserve.card.rect[3] + 2 * margin ]

    ctx.drawImage(reserve.card.sort.image, ...cardRect) 
    if(reserve.card.isSelected) {
        ctx.lineWidth = 1
        ctx.strokeStyle = 'red'
        ctx.strokeRect(...cardRect)
    } 
    reserve.setSelectable()
    if(reserve.selectable) {
        ctx.lineWidth = 2
        ctx.strokeStyle = 'green'
        ctx.strokeRect(...cardInnerRect)
    }
}
