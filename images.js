class images {
	constructor() {
		this.preload()
		this.imgs.push("https://cdn.shopify.com/s/files/1/1265/2145/products/ggPl-lamp.jpg?v=1545438182")
		this.imgs.push("https://pbs.twimg.com/profile_images/471077573716217856/e26hoMx-.jpeg")
	}



	preload() {
		for (const key in this.imgs) {
			this.images.push(loadImage(this.imgs[key]))
		}
		this.setup()
	}

	setup() {
		createCanvas(300, 400);
		$('#defaultCanvas0').on('contextmenu', function () {
			return false
		})
		stroke(255)
		frameRate(30)
		ratio = width / height
		for (const key in this.images) {
			this.images[key].ratio = this.images[key].width / this.images[key].height
		}
	}

	draw() {
		background(255, 1)
		// if ()
		if (mouseX > 0 && mouseY > 0 && mouseX < width && mouseY < height && zoom) {
			let sx = map(mouseX, 0, width, 0, (this.images[pos].width > width) ? this.images[pos].width - width : 0)
			let sy = map(mouseY, 0, height, 0, (this.images[pos].height > height) ? this.images[pos].height - height : 0)
			image(this.images[pos], 0, 0, width, height, sx, sy, width, height)
		} else {
			image(this.images[pos],
				(this.images[pos].ratio < ratio) ? (width - height) / 2 : 0,
				(this.images[pos].ratio > ratio) ? (height - width) / 2 : 0,
				(this.images[pos].ratio >= ratio) ? width : height,
				(this.images[pos].ratio <= ratio) ? height : width)
		}
	}
	mouseClicked() {
		if (width / 2 > mouseX) {
			pos++
		} else {
			pos--
		}
		if (pos < 0) {
			pos = this.images.length - 1
		}
		if (pos > this.images.length - 1) {
			pos = 0
		}
	}
}

function test(params) {
	
}