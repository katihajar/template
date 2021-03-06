import { Component } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ClassRoomService} from '../controller/service/class-room.service';
import {Prof} from '../controller/Model/prof.model';
import {EtudiantClassRoom} from '../controller/Model/etudiant-class-room.model';
import {QuizClassRoom} from '../controller/Model/quiz-class-room.model';
import {ClassRoom} from '../controller/Model/class-room.model';

@Component({
  selector: 'app-login',
  templateUrl: './app.login.component.html',
})
export class AppLoginComponent {
  cols: any[];
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
              private service: ClassRoomService) {
  }
  get submittedProf(): boolean {
    return this.service.submittedProf;
  }

  set submittedProf(value: boolean) {
    this.service.submittedProf = value;
  }
  public FindClass(profs: Prof) {
    this.prof = profs;
    this.service.afficheClass().subscribe(
        data => {
          this.classRoomList = data;
        });
  }
  private initCol() {
    this.cols = [
      {field: 'id', header: 'Id'},
      {field: 'numero', header: 'Numero'},
      {field: 'nom', header: 'Nom'},
      {field: 'prenom', header: 'Prenom'},
      {field: 'etudiantList', header: 'EtudiantList'},
      {field: 'classRoomList', header: 'ClassRoomList'}
    ];
  }
  get etudiantClassRoom(): EtudiantClassRoom {
    return this.service.etudiantClassRoom;
  }

  set etudiantClassRoom(value: EtudiantClassRoom) {
    this.service.etudiantClassRoom = value;
  }

  get quizClassRoom(): QuizClassRoom {
    return this.service.quizClassRoom;
  }

  set quizClassRoom(value: QuizClassRoom) {
    this.service.quizClassRoom = value;
  }

  get etudiantClassRoomList(): Array<EtudiantClassRoom> {
    return this.service.etudiantClassRoomList;
  }

  set etudiantClassRoomList(value: Array<EtudiantClassRoom>) {
    this.service.etudiantClassRoomList = value;
  }

  get quizClassRoomList(): Array<QuizClassRoom> {
    return this.service.quizClassRoomList;
  }

  set quizClassRoomList(value: Array<QuizClassRoom>) {
    this.service.quizClassRoomList = value;
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

  set classRoomList(value: Array<ClassRoom>) {
    this.service.classRoomList = value;
  }


  get prof(): Prof {
    return this.service.prof;
  }

  set prof(value: Prof) {
    this.service.prof = value;
  }

  get profList(): Array<Prof> {
    return this.service.profList;
  }

  set profList(value: Array<Prof>) {
    this.service.profList = value;
  }
  get profLists(): Array<Prof> {
    return this.service.profLists;
  }

  set profLists(value: Array<Prof>) {
    this.service.profLists = value;
  }
}
