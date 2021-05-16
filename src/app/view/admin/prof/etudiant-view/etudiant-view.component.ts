import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ClassRoomService} from '../../../../controller/service/class-room.service';
import {ClassRoom} from '../../../../controller/Model/class-room.model';
import {EtudiantClassRoom} from '../../../../controller/Model/etudiant-class-room.model';

@Component({
  selector: 'app-etudiant-view',
  templateUrl: './etudiant-view.component.html',
  styleUrls: ['./etudiant-view.component.scss']
})
export class EtudiantViewComponent implements OnInit {
  cols: any[];
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
              private service: ClassRoomService) {
  }
  public hideViewDialog() {
    this.viewDialogEtudiant = false;
  }
  get viewDialogEtudiant(): boolean {
    return this.service.viewDialogEtudiant;
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
      {field: 'etudiant', header: 'Etudiant'},
      {field: 'classRoom', header: 'ClassRoom'}
    ];
  }
  get etudiantClassRoomList(): Array<EtudiantClassRoom> {
    return this.service.etudiantClassRoomList;
  }

  set etudiantClassRoomList(value: Array<EtudiantClassRoom>) {
    this.service.etudiantClassRoomList = value;
  }
  get etudiantClassRoom(): EtudiantClassRoom {
    return this.service.etudiantClassRoom;
  }
  set etudiantClassRoomLists(value: Array<EtudiantClassRoom>) {
    this.service.etudiantClassRoomLists = value;
  }
  get etudiantClassRoomLists(): Array<EtudiantClassRoom> {
    return this.service.etudiantClassRoomLists;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set etudiantClassRoom(value: EtudiantClassRoom) {
    this.service.etudiantClassRoom = value;
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
  set viewDialogEtudiant(value: boolean) {
    this.service.viewDialogEtudiant = value;
  }
  ngOnInit(): void {
  }

}
