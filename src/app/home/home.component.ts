import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframe, query, stagger} from '@angular/animations'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('goals', [
      //this is were the animation specific function will reside
      transition('*=>*',[
        query(':enter', style({opacity:0}), {optional: true})

      ])
    ])
  ]
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
