import { Component, EventEmitter, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  start: boolean = false;
  val: number = 0;
  interval;
  @Output() updateNumber = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  startGame() {
    this.start = !this.start;
    this.interval = setInterval(() => {
      this.updateNumber.emit(this.val + 1);
      this.val++;
    }, 1000);
  }

  pauseGame() {
    this.start = !this.start;
    clearInterval(this.interval);
  }

}
