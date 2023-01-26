
// Set up the canvas
var canvas;
var barWidth;
var barSpacing=5;
var swapPosition=[];
var comparePosition=[];
var extraColors=[];
var ANIMATION_SPEED_MS = 5;

function setup() {
  canvas = createCanvas(1200, 1000);
  barWidth = (width / array.length);  // decrease the width to add space between the bars
}

// Draw the bars
function draw() {
  background(105,105,105)
  for (var i = 0; i < array.length; i++) {

    if (swapPosition.includes(i)){
      fill(255,0,0)
    }

    else if(comparePosition.includes(i)){
      fill(0,255,0)
    }
	else if(extraColors.includes(i)){
		fill(0,0,255)
	}
    else{
      fill(0);
    }
    rect(i * barWidth , 0, barWidth, array[i]/10);
    fill(255);  // change the fill color to white
    //text(array[i], i * (barWidth + barSpacing) + barWidth / 2 -5, array[i] * 10 - 5);  // draw the text above the bar
  }
}




// Call the checkTaskStatus function when the page loads
$(document).ready(function() {
  checkTaskStatus("{{ task_id }}");
});

function testSort(animations) {
  // Iterate over the animations
  for (var i = 0; i < animations.length; i++) {
    // Use a closure to preserve the value of i
    (function(i) {
      setTimeout(function() {
        comparePosition=[];
        swapPosition=[]
        var animation = animations[i];


        //highligh bars that are being compared
        var firstIndex = animation[0];
        var secondIndex = animation[1];
        comparePosition = [firstIndex,secondIndex];


        //Check if previous animation is the same, if it is swap bar places
        if (JSON.stringify(animations[i]) === JSON.stringify(animations[i-1])) {
          var temp = array[firstIndex];
          array[firstIndex] = array[secondIndex];
          array[secondIndex] = temp;
          swapPosition = [firstIndex,secondIndex];


          console.log('The lists are the same');
        }

        // Clear colors after animations ends
        if(i+1 === animations.length){

          comparePosition=[]
        }

      }, ANIMATION_SPEED_MS*i);  // delay by 250 milliseconds for each iteration
    })(i);
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
        comparePosition=[];

		//Merge colors
        swapPosition=[]
        var animation = animations[i];

		if(animation[0]==='split'){
			//Working split colors
			extraColors=[];

			//Color split bars
			comparePosition = animation[1];

			//Add split into array in order to use them as working split
			splits.push(animation[1]);
		}

		if(animation[0]==='merge'){

			//Color bars at actual merging split
			extraColors=splits.at(-1)

			var index = animation[1][0];
        	var value = animation[1][1];

			//Swap bars and color
			swapPosition = [index];
			array[index] = value;

			//Delete last split if its same as merge index in order to change splits
			if(index===extraColors.at(-1)){
				splits.pop();
			}


		}

        // Clear colors after animations ends
        if(i+1 === animations.length){
			extraColors=[];
        	comparePosition=[];
			swapPosition=[];
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
          comparePosition=[];
          swapPosition=[]
          var animation = animations[i];


          //highligh bars that are being compared
          var firstIndex = animation[0];
          var secondIndex = animation[1];
          comparePosition = [firstIndex,secondIndex];


          //Check if previous animation is the same, if it is swap bar places
          if (JSON.stringify(animations[i]) === JSON.stringify(animations[i-1])) {
            var temp = array[firstIndex];
            array[firstIndex] = array[secondIndex];
            array[secondIndex] = temp;
            swapPosition = [firstIndex,secondIndex];
          }

          // Clear colors after animations ends
          if(i+1 === animations.length){

            comparePosition=[]
          }

        }, ANIMATION_SPEED_MS*i);  // delay by 250 milliseconds for each iteration
      })(i);
    }
  }


function selectionSort(animations){
  // Iterate over the animations
  for (var i = 0; i < animations.length; i++) {
    // Use a closure to preserve the value of i
    (function(i) {
      setTimeout(function() {
        var animation = animations[i];
        var firstIndex = animation[1];
        var secondIndex = animation[2];

        comparePosition=[];
        swapPosition=[]


		if(animation[0]==='compare'){
			comparePosition = [firstIndex];
            extraColors=[secondIndex]
		}

		if(animation[0]==='swap'){
            swapPosition=[firstIndex];
            [array[secondIndex],array[firstIndex]] = [array[firstIndex],array[secondIndex]];
            swapPosition=[firstIndex];

		}

        // Clear colors after animations ends
        if(i+1 === animations.length){
			extraColors=[];
        	comparePosition=[];
			swapPosition=[];
        }
      }, ANIMATION_SPEED_MS*i);  // delay by milliseconds for each iteration
    })(i);
  }
}


function radixSort(animations){
  // Iterate over the animations
  for (var i = 0; i < animations.length; i++) {
    // Use a closure to preserve the value of i
    (function(i) {
      setTimeout(function() {
        var animation = animations[i];
        var firstIndex = animation[1];
        var valueToSwap = animation[2];

        comparePosition=[];
        swapPosition=[];


		if(animation[0]==='compare'){
			comparePosition = [firstIndex];

		}

		if(animation[0]==='swap'){
      oldIndex = animation[3];
      swapPosition = [firstIndex];
      array[firstIndex] = valueToSwap;


		}

        // Clear colors after animations ends
        if(i+1 === animations.length){
			extraColors=[];
        	comparePosition=[];
			swapPosition=[];
        }
      }, ANIMATION_SPEED_MS*i);  // delay by milliseconds for each iteration
    })(i);
  }
}

function quickSort(animations){
  // Iterate over the animations
  for (var i = 0; i < animations.length; i++) {
    // Use a closure to preserve the value of i
    (function(i) {
      setTimeout(function() {
        var animation = animations[i];
        var firstIndex = animation[1];
        var secondIndex = animation[2];

        comparePosition=[];
        swapPosition=[];

    if(animation[0]==='pivot'){
          extraColors = [firstIndex];

    }

		if(animation[0]==='compare'){
			comparePosition = [firstIndex,secondIndex];

		}

		if(animation[0]==='swap'){
      swapPosition = [firstIndex,secondIndex];
      [array[firstIndex],array[secondIndex]] = [array[secondIndex],array[firstIndex]];


		}

        // Clear colors after animations ends
        if(i+1 === animations.length){
			extraColors=[];
        	comparePosition=[];
			swapPosition=[];
        }
      }, ANIMATION_SPEED_MS*i);  // delay by milliseconds for each iteration
    })(i);
  }
}
