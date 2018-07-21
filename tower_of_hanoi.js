const readline = require('readline');
reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class towersOfHanoi {
 constructor () {
   this.towers = [[3, 2, 1], [], []];
 }
 
 promptMove (startTowerIdx, endTowerIdx, callback) {
   for (let i = 0; i < this.towers.length; i ++) {
     console.log(this.towers[i]);
   }
   reader.question("Where would like to move, ex:(startIndex,endIndex)?", (answer) => {
     let tower1 = parseInt(answer.split(',')[0]);
     let tower2 = parseInt(answer.split(',')[1]);
     
    let pop = this.towers[tower1].pop();
    this.towers[tower2].push(pop);
    } );
    reader.close();
 }
 
   isValidMove(startTowerIdx, endTowerIdx) {
    if (((startTowerIdx || endTowerIdx) < 0) || ((startTowerIdx || endTowerIdx) > 2)) {
      return false;
    }
    else {
      if (this.towers[endTowerIdx].length === 3 || (this.towers[startTowerIdx].pop() > this.towers[endTowerIdx].pop())){
        return false;
      }
      else if (this.towers[startTowerIdx].length === 0) {
        return false;
      }
      else {
        return true;
      }
    }
  }
  
  move(startTowerIdx, endTowerIdx) {
    
    if (this.isValidMove(startTowerIdx, endTowerIdx)) {
      console.log(this);
      let pop = this.towers[startTowerIdx].pop();
      this.towers[endTowerIdx].push(pop);
      return true;
    } else {
      return false;
    }
  }
  
  print () {
    JSON.stringify(this.towers);
  }
  
  isWon () {
    return ((this.towers[1].length === 3) || (this.towers[2].length === 3));
  }
}


game1 = new towersOfHanoi();
// game1.isValidMove(10,10);
game1.move(0, 1);
game1.move(0, 2);
console.log(game1.isWon());





