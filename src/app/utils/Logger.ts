import { Injectable } from '@angular/core';

//this is allowing the class to be accessable in to root component
//can be passed/injected as a dependency
//i forgot what i was planning to do ---log
@Injectable({ providedIn: 'root' })
class Logger {
  public logger;
  constructor() {
    this.logger = (num: number) => {
      console.log(`Logged::${num}`);
    };
  }
}
export { Logger };
