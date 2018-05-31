import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  diceValue:number = 0;
  
  throwDice(){
    this.diceValue = Math.floor(Math.random() * 6) + 1  
    console.log(this.diceValue);
  }
}
