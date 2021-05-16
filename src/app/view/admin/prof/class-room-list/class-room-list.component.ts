import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ClassRoomService} from '../../../../controller/service/class-room.service';
import {EtudiantClassRoom} from '../../../../controller/Model/etudiant-class-room.model';
import {QuizClassRoom} from '../../../../controller/Model/quiz-class-room.model';
import {ClassRoom} from '../../../../controller/Model/class-room.model';
import {Prof} from '../../../../controller/Model/prof.model';



@Component({
  selector: 'app-class-room-list',
  templateUrl: './class-room-list.component.html',
  styleUrls: ['./class-room-list.component.scss']
})
export class ClassRoomListComponent implements OnInit {

  cols: any[];
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
              private service: ClassRoomService) {
  }
  ngOnInit(): void {
  }
  private initCol() {
    this.cols = [
      {field: 'id', header: 'Id'},
      {field: 'libelle', header: 'Libelle'},
      {field: 'description', header: 'Description'},
      {field: 'responsable', header: 'Responsable'},
      {field: 'etudiantClassRoomList', header: 'EtudiantClassRoomList'},
      {field: 'quizClassRoomList', header: 'QuizClassRoomList'}
    ];
  }
  public FindEtudiant(etudiantClassRoom1: ClassRoom) {
    this.classRoom = etudiantClassRoom1;
    this.service.afficheEtudiant().subscribe(
        data => {
          this.etudiantClassRoomList = data;
        });
  }
  public FindQuiz(etudiantClassRoom1: ClassRoom) {
    this.classRoom = etudiantClassRoom1;
    this.service.afficheQuiz().subscribe(
        data => {
          this.quizClassRoomList = data;
        });
  }
  public viewEtudiant(etudiantClassRoom1: ClassRoom) {
    this.classRoom = {...etudiantClassRoom1};
    this.viewDialogEtudiant = true;
  }
  public viewQuiz(quiz: ClassRoom) {
    this.classRoom = {...quiz};
    this.viewDialogQuiz = true;
  }
  get viewDialogEtudiant(): boolean {
    return this.service.viewDialogEtudiant;
  }

  set viewDialogEtudiant(value: boolean) {
    this.service.viewDialogEtudiant = value;
  }

  get viewDialogQuiz(): boolean {
    return this.service.viewDialogQuiz;
  }

  set viewDialogQuiz(value: boolean) {
    this.service.viewDialogQuiz = value;
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
  get classRoomLists(): Array<ClassRoom> {
    return this.service.classRoomLists;
  }

  set classRoomLists(value: Array<ClassRoom>) {
    this.service.classRoomLists = value;
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

}
