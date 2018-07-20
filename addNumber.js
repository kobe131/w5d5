const readline = require('readline');
reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft === 0) {
    completionCallback(sum);
  } else {
    reader.question("Please enter your input", (answer) => {
      let a = parseInt(answer);
      sum = sum + a;
      console.log(sum);
      numsLeft--;
      addNumbers(sum,numsLeft,completionCallback);
    });
  } 
}
addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));