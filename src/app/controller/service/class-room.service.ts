import { Injectable } from '@angular/core';
import {ClassRoom} from '../Model/class-room.model';
import {SuperCategorieSection} from '../Model/super-categorie-section.model';
import {Prof} from '../Model/prof.model';
import {Parcours} from '../Model/parcours.model';
import {Cours} from '../Model/cours.model';
import {HttpClient} from '@angular/common/http';
import {EtudiantClassRoom} from '../Model/etudiant-class-room.model';
import {QuizClassRoom} from '../Model/quiz-class-room.model';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClassRoomService {

  constructor(private http: HttpClient) { }
  private _classRoom: ClassRoom;
  private _etudiantClassRoom: EtudiantClassRoom;
  private _quizClassRoom: QuizClassRoom;
  private _prof: Prof;
  private _classRoomList: Array<ClassRoom>;
  private _classRoomLists: Array<ClassRoom>;
  private _profList: Array<Prof>;
  private _profLists: Array<Prof>;
  private _etudiantClassRoomList: Array<EtudiantClassRoom>;
  private _etudiantClassRoomLists: Array<EtudiantClassRoom>;
  private _quizClassRoomList: Array<QuizClassRoom>;
  private _quizClassRoomLists: Array<QuizClassRoom>;
  private _viewDialogEtudiant: boolean;
  private _viewDialogQuiz: boolean;
  private _submittedProf: boolean;

  get submittedProf(): boolean {
    return this._submittedProf;
  }

  set submittedProf(value: boolean) {
    this._submittedProf = value;
  }

  get quizClassRoomLists(): Array<QuizClassRoom> {
    return this._quizClassRoomLists;
  }

  set quizClassRoomLists(value: Array<QuizClassRoom>) {
    this._quizClassRoomLists = value;
  }

  get etudiantClassRoomLists(): Array<EtudiantClassRoom> {
    return this._etudiantClassRoomLists;
  }

  set etudiantClassRoomLists(value: Array<EtudiantClassRoom>) {
    this._etudiantClassRoomLists = value;
  }

  get classRoomLists(): Array<ClassRoom> {
    return this._classRoomLists;
  }

  set classRoomLists(value: Array<ClassRoom>) {
    this._classRoomLists = value;
  }

  get profLists(): Array<Prof> {
    return this._profLists;
  }

  set profLists(value: Array<Prof>) {
    this._profLists = value;
  }

  get viewDialogEtudiant(): boolean {
    return this._viewDialogEtudiant;
  }

  set viewDialogEtudiant(value: boolean) {
    this._viewDialogEtudiant = value;
  }

  get viewDialogQuiz(): boolean {
    return this._viewDialogQuiz;
  }

  set viewDialogQuiz(value: boolean) {
    this._viewDialogQuiz = value;
  }

  get etudiantClassRoom(): EtudiantClassRoom {
    if (this._etudiantClassRoom == null) {
      this._etudiantClassRoom = new  EtudiantClassRoom();
    }
    return this._etudiantClassRoom;
  }

  set etudiantClassRoom(value: EtudiantClassRoom) {
    this._etudiantClassRoom = value;
  }

  get quizClassRoom(): QuizClassRoom {
    if (this._quizClassRoom == null) {
      this._quizClassRoom = new QuizClassRoom();
    }
    return this._quizClassRoom;
  }

  set quizClassRoom(value: QuizClassRoom) {
    this._quizClassRoom = value;
  }

  get etudiantClassRoomList(): Array<EtudiantClassRoom> {
    if (this._etudiantClassRoomList == null) {
      this._etudiantClassRoomList = new Array<EtudiantClassRoom>();
    }
    return this._etudiantClassRoomList;
  }

  set etudiantClassRoomList(value: Array<EtudiantClassRoom>) {
    this._etudiantClassRoomList = value;
  }

  get quizClassRoomList(): Array<QuizClassRoom> {
    if (this._quizClassRoomList == null) {
      this._quizClassRoomList = new Array<QuizClassRoom>();
    }
    return this._quizClassRoomList;
  }

  set quizClassRoomList(value: Array<QuizClassRoom>) {
    this._quizClassRoomList = value;
  }

  get classRoom(): ClassRoom {
      if (this._classRoom == null) {
        this._classRoom = new ClassRoom();
    }
      return this._classRoom;
  }

  set classRoom(value: ClassRoom) {
    this._classRoom = value;
  }

  get classRoomList(): Array<ClassRoom> {
    if (this._classRoomList == null){
      this._classRoomList = new Array<ClassRoom>();
    }
    return this._classRoomList;
  }

  set classRoomList(value: Array<ClassRoom>) {
    this._classRoomList = value;
  }


  get prof(): Prof {
    if (this._prof == null){
      this._prof = new Prof();
    }
    return this._prof;
  }

  set prof(value: Prof) {
    this._prof = value;
  }

  get profList(): Array<Prof> {
    if (this._profList == null){
      this._profList = new Array<Prof>();
    }
    return this._profList;
  }

  set profList(value: Array<Prof>) {
    this._profList = value;
  }
  public findAllProf(): Observable<Array<Prof>> {
   return  this.http.get< Array<Prof> >('http://localhost:8036/centre/prof/');
  }
  public findAllClass(): Observable<Array<ClassRoom>> {
    return this.http.get< Array<ClassRoom> >('http://localhost:8036/E-learning/classRoom/');

  }
  public afficheClass(): Observable<Array<ClassRoom>> {
   return  this.http.get<Array<ClassRoom>>('http://localhost:8036/E-learning/classRoom/Prof/id/' + this.prof.id );
  }
  public afficheEtudiant(): Observable<Array<EtudiantClassRoom>> {
  return   this.http.get<Array<EtudiantClassRoom>>('http://localhost:8036/E-learning/etudiant-classRoom/id/' + this.classRoom.id );
  }
  public afficheQuiz(): Observable<Array<QuizClassRoom>> {
   return  this.http.get<Array<QuizClassRoom>>('http://localhost:8036/E-learning/quiz-classRoom/id/' + this.classRoom.id );
  }
}
