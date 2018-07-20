const readline = require('readline');
reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  reader.question("Is el1 greater than el2?", (answer) => {
    if (answer === "yes") {
      callback(true);
    }
    else {
      callback(false);
    }
  });
}

function innerBubbleSortLoop (arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i == (arr.length - 1)) {
    outerBubbleSortLoop(madeAnySwaps);
  }
  else {
    askIfGreaterThan(arr[i], arr[i + 1], function(isGreaterThan) {
      if (isGreaterThan == true) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        console.log(arr);
        madeAnySwaps = true;
      }
      else {
        madeAnySwaps = false;
        console.log(arr);
      }
      innerBubbleSortLoop(arr,i+1,madeAnySwaps,outerBubbleSortLoop);
    });
  }
}

function absurdBubbleSort(arr, sortCompletionCallback){
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps == true) {
      innerBubbleSortLoop(arr,0,false,outerBubbleSortLoop);
    }
    else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
}

absurdBubbleSort([5, 4, 3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});

// askIfGreaterThan(10, 2, function(input) {if (input == true) {console.log("you're right");}
// else {console.log("you're wrong!");}});