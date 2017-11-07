import { QuestionServer } from './questionServer';
import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { Question } from './question';
import { NavigaterService } from '../navigaterService';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls  : ['./question.component.css'],
  providers: [QuestionServer]
})
export class QuetionComponent implements OnInit {
  questions: [Question]

  constructor(private el: ElementRef, private navigaterService: NavigaterService, private questionServer: QuestionServer, private renderer2: Renderer2) {
    this.questions = questionServer.getQuestionList()
  }

  ngOnInit() {
    this.navigaterService.scrollObservable.subscribe((event) => {
      let len =  event['target'].scrollingElement.scrollTop - this.el.nativeElement.offsetTop
      if (len > -100 && len < 100) {
        this.navigaterService.announceNavigater('questionLink')
      }
    })
  }
}

