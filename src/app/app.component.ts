import { Component } from '@angular/core';
import { Question } from './question/question.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Would you rather...';
  questions: Question[];

  constructor() {
    this.questions = [
      new Question(
        'be a penguin, a bird that can swim but cannot fly', 'a flying fish that can swim and fly', 'reason' , 5)

    ];
  }
}
