var img = [];
var imageWidth = 600;
var imageHeight = 400;
var dayOfMonth;
var imagePath;
function preload(){
		//var currentimage = images[dayOfMonth-1];
		//dayOfMonth = day() -1;
		var imagePath = [
			"traveling.jpg",
			"star wars.jpg",
			"airport.jpg",
			"the steps.jpg",
			"grey waters.jpg",
			"double orange.jpg",
			"mini golf.jpg",
			"yellow leaves.jpg",
			"checkered tiles.jpg",
			"brownstone blue.jpg",
			"pjs.jpg",
			"mets orange.jpg",
			"red white and blue.jpg",
			"midnight snack.jpg",
			"sandals.jpg",
			"stool.jpg",
			"sneakers.jpg",
			"train.jpg",
			"games.jpg",
			"hockey.jpg",
			"traveling.jpg",
			"star wars.jpg",
			"airport.jpg",
			"the steps.jpg",
			"grey waters.jpg",
			"double orange.jpg",
			"mini golf.jpg",
			"yellow leaves.jpg",
			"checkered tiles.jpg",
			"brownstone blue.jpg",
			"pjs.jpg",
	];

// manually change dayOfMonth to test
	// dayOfMonth = 10;
	//
	// if(dayOfMonth == 1) {
	// 	 imagePath = "games.jpg";
	// } else if (dayOfMonth == 2){
	// imagePath = "traveling.jpg";
	// } else if (dayOfMonth == 3){
	//  imagePath = "hockey.jpg";
	//  } else if (dayOfMonth == 4){
	// imagePath = "star wars.jpg";
	// } else if (dayOfMonth == 5){
	//  imagePath = "airport.jpg";
	//  } else if (dayOfMonth == 6){
	// imagePath = "the steps.jpg";
	// } else if (dayOfMonth == 7){
	// imagePath = "grey waters.jpg";
	//  } else if (dayOfMonth == 8){
	//  imagePath = "double orange.jpg";
	//  } else if (dayOfMonth == 9){
	//  imagePath = "mini golf.jpg";
	//  } else if (dayOfMonth == 10){
	//  imagePath = "yellow leaves.jpg";
	//  } else if (dayOfMonth == 11){
	// imagePath = "brownstone blue.jpg";
	//  } else if (dayOfMonth == 12){
	// imagePath = "checkered tiles.jpg";
	//  } else if (dayOfMonth >= 13){
	//  imagePath = "pjs.jpg";
	//  }

	for(var i = 0; i<31; i++) {
	img[i] = loadImage("Feet/"+imagePath[i]);
}
}
/**
 * Setup the sketch
 */
function setup() {
	createCanvas(windowWidth, windowHeight);

	// text("Current day: \n"+day, 5, 50);

	// manually change dayOfMonth to test
	// dayOfMonth = 12;
}

/**
 * Main animation loop
 */
function draw() {
	dayOfMonth = day();
	// draw image from top-left corner
	// image(img, 0, 0, 600, 400);
	var red = map(hour(), 0, 45, 0, 255);
	var green = map(minute(), 0, 90, 0, 255);
	var blue = map(second(), 0, 90, 0, 255);

	background(red, green, blue);
	// console.log(blue);
	//console.log(hour()+':'+minute()+':'+second());
	// draw centered image
	image(img[dayOfMonth], width/2 -150, height/2 -150, 300, 300);
}


function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
/**
 * Setup the sketch
 */

/**
 * Main animation loop
 */
