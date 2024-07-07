const canvas = document.getElementById('canvas');

// { x,y, height, width, handler)
const handlers = []

export function onClick(x, width, y, height, handler) {
    handlers.push({
        x,
        width,
        y,
        height,
        handler
    })
}

export function resetOnClicks() {
    handlers.splice(0, handlers.length)
}

const elemLeft = canvas.offsetLeft + canvas.clientLeft
const elemTop = canvas.offsetTop + canvas.clientTop

const debug = false
canvas.addEventListener('click', function (event) {
    const x = event.pageX - elemLeft
    const y = event.pageY - elemTop

    if (debug) {
        console.log(`received click on x: ${x}, y: ${y}`)
    }
    let called = false

    // Collision detection between clicked offset and element.
    handlers.forEach(function (element) {
        if (y > element.y && y < element.y + element.height && x > element.x && x < element.z + element.width) {
            called = true
            if (debug) {
                console.log(`calling handler for x: ${x}, y: ${y}, with bounds x: ${element.x}, y: ${element.y}, width: ${element.width}, height: ${element.height}`)
            }
            element.handler()
        }
    })

    if (!called && debug) {
        console.log(`no handler for x: ${x}, y: ${y} found, ignoting click`)
    }
}, false);