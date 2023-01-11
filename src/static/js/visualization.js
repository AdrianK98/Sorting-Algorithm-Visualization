
// Set up the canvas
var canvas;
var barWidth;
var barSpacing=5;
var swapPos=[];
var comparePos=[];
var extraColors=[];
var ANIMATION_SPEED_MS = 50;

function setup() {
  canvas = createCanvas(800, 1000);
  barWidth = (width / array.length) - 10;  // decrease the width to add space between the bars
}

// Draw the bars
function draw() {
  background(105,105,105)
  for (var i = 0; i < array.length; i++) {

    if (swapPos.includes(i)){
      fill(255,0,0)
    }

    else if(comparePos.includes(i)){
      fill(0,255,0)
    }
	else if(extraColors.includes(i)){
		fill(0,0,255)
	}
    else{
      fill(0);
    }
    rect(i * (barWidth + barSpacing), 0, barWidth, array[i]*20);
    fill(255);  // change the fill color to white
    text(array[i], i * (barWidth + barSpacing) + barWidth / 2 -5, array[i] * 10 - 5);  // draw the text above the bar
  }
}



// Define the update function
function mergeSort(animations) {
	//Working splits
	splits=[];
  // Iterate over the animations
  for (var i = 0; i < animations.length; i++) {
    // Use a closure to preserve the value of i
    (function(i) {
      setTimeout(function() {

		//Split colors
        comparePos=[];

		//Merge colors
        swapPos=[]
        var animation = animations[i];

		if(animation[0]==='split'){
			//Working split colors
			extraColors=[];

			//Color split bars
			comparePos = animation[1];

			//Add split into array in order to use them as working split
			splits.push(animation[1]);
		}

		if(animation[0]==='merge'){

			//Color bars at actual merging split
			extraColors=splits.at(-1)

			var index = animation[1][0];
        	var value = animation[1][1];

			//Swap bars and color
			swapPos = [index];
			array[index] = value;

			//Delete last split if its same as merge index in order to change splits
			if(index===extraColors.at(-1)){
				splits.pop();
			}


		}

        // Clear colors after animations ends
        if(i+1 === animations.length){
			extraColors=[];
        	comparePos=[];
			swapPos=[];
        }
      }, ANIMATION_SPEED_MS*i);  // delay by milliseconds for each iteration
    })(i);
  }
}


function bubbleSort(animations) {
    // Iterate over the animations
    for (var i = 0; i < animations.length; i++) {
      // Use a closure to preserve the value of i
      (function(i) {
        setTimeout(function() {
          comparePos=[];
          swapPos=[]
          var animation = animations[i];


          //highligh bars that are being compared
          var a = animation[0];
          var b = animation[1];
          comparePos = [a,b];


          //Check if previous animation is the same, if it is swap bar places
          if (JSON.stringify(animations[i]) === JSON.stringify(animations[i-1])) {
            var temp = array[a];
            array[a] = array[b];
            array[b] = temp;
            swapPos = [a,b];


            console.log('The lists are the same');
          }

          // Clear colors after animations ends
          if(i+1 === animations.length){

            comparePos=[]
          }

        }, ANIMATION_SPEED_MS*i);  // delay by 250 milliseconds for each iteration
      })(i);
    }
  }