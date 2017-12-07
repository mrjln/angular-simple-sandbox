import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations'
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('goals', [
      //this is were the animation specific function will reside
      transition('* => *',[
        query(':enter', style({ opacity:0 }), { optional: true }),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform:'translateY(-75%)', offset: 0}),
            style({opacity: 0.5, transform:'translateY(35px)', offset: .3}),
            style({opacity: 1, transform:'translateY(0)', offset: 1}),
          ]))]), {optional: true }),

          query(':leave', stagger('300ms', [
            animate('.6s ease-in', keyframes([
              style({opacity: 1, transform:'translateY(0)', offset: 0}),
              style({opacity: 0.5, transform:'translateY(35px)', offset: .3}),
              style({opacity: 0, transform:'translateY(-75%)', offset: 1}),
            ]))]), {optional: true })
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
itemCount: number;
goalText: string = 'My first lifegoal';
goals = [];


  constructor(private _data = DataService ) { }

  ngOnInit() {
  this.itemCount = this.goals.length;
  this._data.goal.subscribe(res => this.goals = res);
  this._data.changeGoal(this.goals);
  }

  addItem(){
    this.goals.push(this.goalText);
    this.goalText= "";
    //clear out the input after it is submitted
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);

  }

  removeItem(i){
    this.goals.splice(i,1);
    this._data.changeGoal(this.goals);
  }

}
