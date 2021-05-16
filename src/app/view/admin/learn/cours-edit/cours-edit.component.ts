import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ParcoursService} from '../../../../controller/service/parcours.service';
import {Parcours} from '../../../../controller/Model/parcours.model';
import {Centre} from '../../../../controller/Model/centre.model';
import {Cours} from '../../../../controller/Model/cours.model';

@Component({
  selector: 'app-cours-edit',
  templateUrl: './cours-edit.component.html',
  styleUrls: ['./cours-edit.component.scss']
})
export class CoursEditComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private service: ParcoursService ) { }

  ngOnInit(): void {
  }
  public edit() {
    this.submittedCours = true;
    if (this.cours.id) {
      this.coursList[this.service.findCoursIndexById(this.cours.id)] = this.cours;
      this.service.updateCours().subscribe(data => {
        this.cours = data;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Commande Updated',
          life: 3000
        });
      });
    }
    this.editDialogCours = false;
    this.cours = new Cours();

  }
  get cours(): Cours {
    return this.service.cours;
  }
  set cours(value: Cours) {
    this.service.cours = value;
  }
  set coursList(value: Array<Cours>) {
    this.service.coursList = value;
  }

  get coursList(): Array<Cours> {
    return this.service.coursList;
  }
  public hideEditDialog() {
    this.editDialogCours = false;
  }
  get editDialogCours(): boolean {
    return this.service.editDialogCours;
  }

  set editDialogCours(value: boolean) {
    this.service.editDialogCours = value;
  }

  get submittedCours(): boolean {
    return this.service.submittedCours;
  }

  set submittedCours(value: boolean) {
    this.service.submittedCours = value;
  }
  findAllParcours() {
    this.service.init().subscribe(data => {
      this.parcoursList = data;
    });
  }
  set parcoursList(value: Array<Parcours>) {
    this.service.parcoursList = value;
  }

  get parcoursList(): Array<Parcours> {
    return this.service.parcoursList;
  }

}
