import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ClassRoomService} from '../../../../controller/service/class-room.service';
import {ClassRoom} from '../../../../controller/Model/class-room.model';
import {QuizClassRoom} from '../../../../controller/Model/quiz-class-room.model';

@Component({
  selector: 'app-quiz-view',
  templateUrl: './quiz-view.component.html',
  styleUrls: ['./quiz-view.component.scss']
})
export class QuizViewComponent implements OnInit {

  cols: any[];
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
              private service: ClassRoomService) {
  }
  public hideViewDialog() {
    this.viewDialogQuiz = false;
  }
  get viewDialogQuiz(): boolean {
    return this.service.viewDialogQuiz;
  }
  get classRoom(): ClassRoom {
    return this.service.classRoom;
  }

  set classRoom(value: ClassRoom) {
    this.service.classRoom = value;
  }

  get classRoomList(): Array<ClassRoom> {
    return this.service.classRoomList;
  }
  private initCol() {
    this.cols = [
      {field: 'id', header: 'Id'},
      {field: 'quiz', header: 'Quiz'},
      {field: 'classRoom', header: 'ClassRoom'}
    ];
  }
  get quizClassRoomList(): Array<QuizClassRoom> {
    return this.service.quizClassRoomList;
  }

  set quizClassRoomList(value: Array<QuizClassRoom>) {
    this.service.quizClassRoomList = value;
  }
  get quizClassRoom(): QuizClassRoom {
    return this.service.quizClassRoom;
  }
  set quizClassRoomLists(value: Array<QuizClassRoom>) {
    this.service.quizClassRoomLists = value;
  }
  get quizClassRoomLists(): Array<QuizClassRoom> {
    return this.service.quizClassRoomLists;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set quizClassRoom(value: QuizClassRoom) {
    this.service.quizClassRoom = value;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set classRoomList(value: Array<ClassRoom>) {
    this.service.classRoomList = value;
  }
  get classRoomLists(): Array<ClassRoom> {
    return this.service.classRoomLists;
  }

  set classRoomLists(value: Array<ClassRoom>) {
    this.service.classRoomLists = value;
  }

  // tslint:disable-next-line:adjacent-overload-signatures
  set viewDialogQuiz(value: boolean) {
    this.service.viewDialogQuiz = value;
  }

  ngOnInit(): void {
  }

}
