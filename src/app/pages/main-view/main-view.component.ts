import { Component } from '@angular/core';import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent{

  constructor(){}

  board: Board = new Board('Test Board', [
    new Column('Ideas', [
      "Some random idea",
      "This is another random idea", 
      "You guessed it, another random idea"
    ]),
    new Column('First phase', [
      "Idea in the first phase",
      "Another idea in the first phase",
      "You guessed it, another idea in the first phase"
    ]),
    new Column('Second phase', [
      "Idea in the second phase",
      "Another idea in the first phase",
      "You guessed it, another idea in the second phase"
    ]),
    new Column('Completed', [
      "Completed idea",
      "Completed project",
      "Completed task"
    ])
  ])

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  
}