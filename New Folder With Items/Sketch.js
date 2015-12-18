var img = [];
var imageWidth = 600;
var imageHeight = 400;
var month;
var imagePath;
function preload(){
		//var currentimage = images[dayOfMonth-1];
		//dayOfMonth = day() -1;
		var imagePath = [
"SymbolBlack.pdf",
"SymbolRed.pdf",
"SymbolTeal.pdf",
"SymbolGreyTan.pdf",
"SymbolNavy.pdf",
"SymbolCherry.pdf",
"SymbolGreen.pdf",
"SymbolNeonYellow",
"SymbolOrange.pdf",
"SymbolPink.pdf",
"SymbolYellow.pdf",
"SymbolPurple.pdf",
	];
};
function setup(){
manually change month to test
	dayOfMonth = 10;

	if(month == 1) {
		 imagePath = "SymbolBlack.pdf";
	} else if (month == 2){
	imagePath = "SymbolRed.pdf";
	} else if (month == 3){
	 imagePath = "SymbolPink.pdf";
	 } else if (month == 4){
	imagePath = "SymbolGreen.pdf";
	} else if (month == 5){
	 imagePath = "SymbolPurple.pdf";
	 } else if (month == 6){
	imagePath = "SymbolYellow.pdf";
	} else if (month == 7){
	imagePath = "SymbolOrange.pdf";
	 } else if (month == 8){
	 imagePath = "SymbolNeonYellow.pdf";
	 } else if (month == 9){
	 imagePath = "SymbolCherry.pdf";
	 } else if (month == 10){
	 imagePath = "SymbolGreyTan.pdf";
	 } else if (month == 11){
	imagePath = "SymbolTeal.pdf";
	 } else if (month == 12){
	imagePath = "SymbolNeonYellow.pdf";
};

	for(var i = 0; i<12; i++) {
	img[i] = loadImage("images/"+imagePath[i]);
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
	monthofYear = month();
	// draw image from top-left corner
	// image(img, 0, 0, 600, 400);

	image(img[month], width/2 -150, height/2 -150, 300, 300);
}

// var img;
// var imageWidth = 600;
// var imageHeight = 400;
// var mainText;
// var imagePath = '';
// var bodyElement;
// var mainTextElement;
// var month;
//
// var w = womanOfTheMonth [
// 	{
// 		text: "hang in there, buddy",
// 		path: "SymbolRed.pdf"
// 	},
// 	{
// 		text:  "why do you keep staring at me?",
// 		path: "images/cat_looking.jpg"
// 	},
// 	{
// 		text: "stop and smell the roses!",
// 		path: "images/cat3.jpg"
// 	},
// 	{
// 		text: "tastes like chicken",
// 		path: "images/cat4.jpg"
// 	},
// 	{
// 		text: "anyone have a breath mint?",
// 		path: "images/cat5.jpg"
// 	},
// 	{
// 		text: "i'm sleepy",
// 		path: "images/cat6.jpg"
// 	},
// 	{
// 		text: "why do you keep staring at me?",
// 		path: "images/cat7.jpg"
// 	},
// 	{
// 		text: "why do you keep staring at me?",
// 		path: "images/cat8.jpg"
// 	},
// 	{
// 		text: "why do you keep staring at me?",
// 		path: "images/cat9.jpg"
// 	},
// 	{
// 		text: "why do you keep staring at me?",
// 		path: "images/cat10.jpg"
// 	},
// 	{
// 		text: "why do you keep staring at me?",
// 		path: "images/cat11.jpg"
// 	},
// 	{
// 		text: "why do you keep staring at me?",
// 		path: "images/cat12.jpg"
// 	},
// 	{
// 		text: "why do you keep staring at me?",
// 		path: "images/cat13.jpg"
// 	}
// ];
// var womanOfTheMonth = w[month-1];
// 	console.log("womanOfTheMonth", womanOfTheMonth);
// 	mainText = w.text;
// 	img = loadImage(currentW.path);
//
// function setup() {
// 	createCanvas(windowWidth, windowHeight);
//
// 	bodyElement = select('body');
//
// 	console.log(bodyElement);
//
// mainTextElement = createElement('h3', mainText);
// mainTextElement.style('width', '100%');
// mainTextElement.style('text-align', 'center');
// mainTextElement.style('font-weight', 'normal');
// mainTextElement.parent(bodyElement);
// };
