import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ParcoursService} from '../../../../controller/service/parcours.service';
import {Cours} from '../../../../controller/Model/cours.model';
import {Parcours} from '../../../../controller/Model/parcours.model';
import {Section} from '../../../../controller/Model/section.model';

@Component({
  selector: 'app-cours-list',
  templateUrl: './cours-list.component.html',
  styleUrls: ['./cours-list.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class CoursListComponent implements OnInit {
  cols: any[];
  // tslint:disable-next-line:max-line-length
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private service: ParcoursService ) { }
  ngOnInit(): void {
    this.initCol();
  }
  public openCreateCours() {
    this.cours = new Cours();
    this.submittedCours = false;
    this.createDialogCours = true;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set submittedCours(value: boolean) {
    this.service.submittedCours = value;
  }

  public editCours(cour: Cours) {
    this.cours = {...cour};
    this.editDialogCours = true;
  }
  public FindSection(cour: Cours) {
    this.cours = cour;
    this.service.affichelistSection().subscribe(
        data => {
          this.sectionList = data;
        });
  }
  set sectionList(value: Array<Section>) {
    this.service.sectionList = value;
  }
  get createDialogCours(): boolean {
    return this.service.createDialogCours;
  }

  set createDialogCours(value: boolean) {
    this.service.createDialogCours = value;
  }

  get editDialogCours(): boolean {
    return this.service.editDialogCours;
  }

  set editDialogCours(value: boolean) {
    this.service.editDialogCours = value;
  }

  get viewDialogCours(): boolean {
    return this.service.viewDialogCours;
  }

  set viewDialogCours(value: boolean) {
    this.service.viewDialogCours = value;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  get sectionList(): Array<Section> {
    return this.service.sectionList;
  }
  get cours(): Cours{
    return this.service.cours;
  }
  set cours(value: Cours) {
    this.service.cours = value;
  }
  get coursList(): Array<Cours> {
    return this.service.coursList;
  }
  get coursLists(): Array<Cours> {
    return this.service.coursLists;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set coursList(value: Array<Cours>) {
    this.service.coursList = value;
  }

  // tslint:disable-next-line:adjacent-overload-signatures
  set coursLists(value: Array<Cours>) {
    this.service.coursLists = value;
  }
  private initCol() {
    this.cols = [
      {field: 'id', header: 'Id'},
      {field: 'libelle', header: 'Libelle'},
      {field: 'code', header: 'Code'},
      {field: 'description', header: 'Description'},
      {field: 'nombreSectionFinalise', header: 'NombreSectionFinalise'},
      {field: 'image', header: 'Image'},
      {field: 'nombreSectionEnCours', header: 'NombreSectionEnCours'},
      {field: 'nombreLinkEnCours', header: 'NombreLinkEnCours'},
      {field: 'nombreLinkFinalise', header: 'NombreLinkFinalise'},
      {field: 'numeroOrder', header: 'NumeroOrder'},
      {field: 'parcours', header: 'Parcours'}
    ];
  }
  public delete(cour: Cours) {
    this.cours = cour;
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + cour.libelle + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteCours().subscribe(data => {
          this.coursList = this.coursList.filter(val => val.id !== this.cours.id);
          this.cours = new Cours();
          this.sectionList = null;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Cours Deleted',
            life: 3000
          });
        });
      }
    });
  }
  public AjoutSection(cour: Cours) {
    this.cours = cour;
    this.confirmationService.confirm({
      message: 'Are you sure you want to add sections of '  + cour.libelle + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.AjoutSection(cour.id).subscribe(data => {
          console.log(' save section');
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Section ajouter',
            life: 3000
          });
        });
      }
    });
  }
  public deleteMultiple() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected commandes?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteMultipleCoursByid().subscribe(data => {
          this.service.deleteMultipleCoursIndexById();
          this.coursLists = null;
          this.sectionList = null;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Commandes Deleted',
            life: 3000
          });
        });
      }
    });
  }
}
