import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  miliseconds: number = 0;
  interval: any;
  running = false;


  constructor() { }

  ngOnInit(): void {
  }

  start() {
    if (!this.running) {
      this.interval = setInterval(() => {
        this.miliseconds += 50;
      }, 50);
      this.running = true;
    }
  }

  stop() {
    if (this.running) {
      clearInterval(this.interval);
      this.running = false;
    }
  }

  clear() {
    this.miliseconds = 0;
  }

  round(n: number): number {
    return Math.round(n);
  }

  // private round(n: number): number {
  //   return Math.round(n);
  // }

  // getRound(n: number): number {
  //   return this.round(n);
  // }

  // getMiliSeconds() {
  //   return this.miliseconds;
  // }

  // getRunning() {
  //   return this.running;
  // }

}
