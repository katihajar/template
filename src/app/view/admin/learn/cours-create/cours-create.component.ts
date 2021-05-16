import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ParcoursService} from '../../../../controller/service/parcours.service';
import {Parcours} from '../../../../controller/Model/parcours.model';
import {Centre} from '../../../../controller/Model/centre.model';
import { Cours } from 'src/app/controller/model/cours.model';

@Component({
  selector: 'app-cours-create',
  templateUrl: './cours-create.component.html',
  styleUrls: ['./cours-create.component.scss']
})
export class CoursCreateComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private service: ParcoursService ) { }

  ngOnInit(): void {
  }

  public hideCreateDialog() {
    this.createDialogCours = false;
    this.submittedCours = false;
  }
  findAllParcours() {
    this.service.init().subscribe(data => {
      this.parcoursList = data;
    });
  }
  public saveCours() {
    this.submittedCours = true;
    if (this.cours.id == null) {
      this.service.SaveCours().subscribe(data => {
        // @ts-ignore
        this.coursList.push({...data});
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Cours Update',
          life: 3000
        });
      });
      this.createDialogCours = false;
      this.cours = new Cours();
    }
  }
  get centreList(): Array<Centre> {
    return this.service.centreList;
  }
  get parcours(): Parcours {
    return this.service.parcours;
  }
  set parcours(value: Parcours) {
    this.service.parcours = value;
  }
  get cours(): Cours {
    return this.service.cours;
  }
  set cours(value: Cours) {
    this.service.cours = value;
  }
  set parcoursList(value: Array<Parcours>) {
    this.service.parcoursList = value;
  }

  get parcoursList(): Array<Parcours> {
    return this.service.parcoursList;
  }
  get createDialogCours(): boolean {
    return this.service.createDialogCours;
  }
  set coursList(value: Array<Cours>) {
    this.service.coursList = value;
  }

  get coursList(): Array<Cours> {
    return this.service.coursList;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set createDialogCours(value: boolean) {
    this.service.createDialogCours = value;
  }

  get submittedCours(): boolean {
    return this.service.submittedCours;
  }

  set submittedCours(value: boolean) {
    this.service.submittedCours = value;
  }

}
