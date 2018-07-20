class Clock {
  constructor() {
    const date1 = new Date();
    this.hours = date1.getHours();
    this.minutes = date1.getMinutes();
    this.seconds = date1.getSeconds();
    this.printTime();
    setInterval(this._tick.bind(this), 1000);    
  }
  
  printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }


  _tick() {
    this.seconds = this.seconds + 1;
    console.log(this);
    this.printTime();
  }
}

const clock = new Clock();
