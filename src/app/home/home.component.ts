import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
itemCount: number;
goalText: string = 'My first lifegoal';
goals = [];

  constructor() { }

  ngOnInit() {
  this.itemCount = this.goals.length;

  }

  addItem(){
    this.goals.push(this.goalText);
    this.goalText= "";
    //clear out the input after it is submitted
    this.itemCount = this.goals.length;
  }

}
