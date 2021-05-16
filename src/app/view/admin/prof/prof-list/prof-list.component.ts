import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Prof} from '../../../../controller/Model/prof.model';
import {ClassRoom} from '../../../../controller/Model/class-room.model';
import {QuizClassRoom} from '../../../../controller/Model/quiz-class-room.model';
import {EtudiantClassRoom} from '../../../../controller/Model/etudiant-class-room.model';
import {ClassRoomService} from '../../../../controller/service/class-room.service';





@Component({
  selector: 'app-prof-list',
  templateUrl: './prof-list.component.html',
  styleUrls: ['./prof-list.component.scss']
})
export class ProfListComponent implements OnInit {
  cols: any[];
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
              private service: ClassRoomService) {
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
  ngOnInit(): void {
    this.initCol();
    this.service.findAllProf().subscribe(data => this.profList = data);
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
