
// let images = []
// let pos = 0

// let imgs = []
// let ratio = 0
// let zoom = false
// imgs.push("https://cdn.shopify.com/s/files/1/1265/2145/products/ggPl-lamp.jpg?v=1545438182")
// imgs.push("https://pbs.twimg.com/profile_images/471077573716217856/e26hoMx-.jpeg")
// function preload() {
// 	for (const key in imgs) {
// 		images.push(loadImage(imgs[key]))
// 	}
// }

// function setup() {
// 	angleMode(DEGREES)
// 	createCanvas(300, 400);
// 	$('#defaultCanvas0').on('contextmenu', function () {
// 		return false
// 	})
// 	stroke(255)
// 	frameRate(30)
// 	ratio = width / height
// 	for (const key in images) {
// 		images[key].ratio = images[key].width / images[key].height
// 	}

// }

// function draw() {
// 	background(255, 1)
// 	// if ()
// 	if (mouseX > 0 && mouseY > 0 && mouseX < width && mouseY < height && zoom) {
// 		let sx = map(mouseX, 0, width, 0, (images[pos].width > width) ? images[pos].width - width : 0)
// 		let sy = map(mouseY, 0, height, 0, (images[pos].height > height) ? images[pos].height - height : 0)
// 		image(images[pos], 0, 0, width, height, sx, sy, width, height)
// 	} else {
// 		image(images[pos],
// 			( images[pos].ratio < ratio)	?	(width - height) / 2	: 0,
// 			( images[pos].ratio > ratio)	?	(height - width) / 2	: 0,
// 			( images[pos].ratio >= ratio)	?	width					: height,
// 			( images[pos].ratio <= ratio)	?	height					: width)
// 	}
// }
// function mouseClicked() {
// 	if (width / 2 > mouseX) {
// 		pos++
// 	} else {
// 		pos--
// 	}
// 	if (pos < 0) {
// 		pos = images.length - 1
// 	}
// 	if (pos > images.length - 1) {
// 		pos = 0
// 	}
// }

// function make_pos(x, y, z = false) {
// 	let pos = []
// 	pos.x = x
// 	pos.y = y
// 	pos.z = z
// 	return pos
// }

// function dis(p, p2) {
// 	return dist(p.x, p.y, p2.x, p2.y)
// }
