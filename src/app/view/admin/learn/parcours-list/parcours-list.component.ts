import { Component, OnInit } from '@angular/core';
import {ParcoursService} from '../../../../controller/service/parcours.service';
import {Parcours} from '../../../../controller/Model/parcours.model';
import {Section} from '../../../../controller/Model/section.model';
import {Cours} from '../../../../controller/Model/cours.model';
import {Centre} from '../../../../controller/Model/centre.model';
import {ConfirmationService, MessageService} from 'primeng/api';




@Component({
  selector: 'app-parcours-list',
  templateUrl: './parcours-list.component.html',
  styleUrls: ['./parcours-list.component.scss']
})
export class ParcoursListComponent implements OnInit {
  cols: any[];
  // tslint:disable-next-line:max-line-length
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private service: ParcoursService ) { }
  ngOnInit(): void {
    this.initCol();
    this.service.init().subscribe(data => this.parcoursList = data);
  }
  private initCol() {
    this.cols = [
      {field: 'id', header: 'Id'},
      {field: 'libelle', header: 'Libelle'},
      {field: 'code', header: 'Code'},
      {field: 'description', header: 'Description'},
      {field: 'datePublication', header: 'DatePublication'},
      {field: 'dateCreation', header: 'DateCreation'},
      {field: 'numeroOrder', header: 'NumeroOrder'},
      {field: 'nombreCours', header: 'NombreCours'},
      {field: 'coursList', header: 'CoursList'},
      {field: 'centre', header: 'Centre'}
    ];
  }
  get submitted(): boolean {
    return this.service.submitted;
  }
  public openCreateParcours() {
    this.parcours = new Parcours();
    this.submitted = false;
    this.createDialog = true;
  }

  public editParcours(parcour: Parcours) {
    this.parcours = {...parcour};
    this.editDialog = true;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set submitted(value: boolean) {
    this.service.submitted = value;
  }

  get createDialog(): boolean {
    return this.service.createDialog;
  }

  set createDialog(value: boolean) {
    this.service.createDialog = value;
  }

  get editDialog(): boolean {
    return this.service.editDialog;
  }

  set editDialog(value: boolean) {
    this.service.editDialog = value;
  }

  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }
  get section(): Section {
    return this.service.section;
  }
  get cours(): Cours {
    return this.service.cours;
  }
  get parcoursList(): Array<Parcours> {
    return this.service.parcoursList;
  }
  get parcoursLists(): Array<Parcours> {
    return this.service.parcoursLists;
  }
  set parcoursLists(value: Array<Parcours>) {
    this.service.parcoursLists = value;
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
  get coursList(): Array<Cours> {
    return this.service.coursList;
  }
  public deleteCours(){
    this.service.deleteCours();
  }


  public save(): void {
    this.service.save();
  }
  public delete(parcour: Parcours) {
    this.parcours = parcour;
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + parcour.libelle + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteParcours().subscribe(data => {
          this.parcoursList = this.parcoursList.filter(val => val.id !== this.parcours.id);
          this.parcours = new Parcours();
          this.coursList = null;
          this.sectionList = null;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Parcours Deleted',
            life: 3000
          });
        });
      }
    });
  }
  set sectionList(value: Array<Section>) {
    this.service.sectionList = value;
  }

  get sectionList(): Array<Section> {
    return this.service.sectionList;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set coursList(value: Array<Cours>) {
    this.service.coursList = value;
  }
  public FindCours(parcour: Parcours) {
    this.parcours = parcour;
    this.service.afficheCours().subscribe(
        data => {
          this.coursList = data;
          this.sectionList = null;
        });
  }
  public deleteMultiple() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected commandes?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteMultipleParcoursByid().subscribe(data => {
          this.service.deleteMultipleParcoursIndexById();
          this.parcoursLists = null;
          this.coursList = null;
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
  // tslint:disable-next-line:adjacent-overload-signatures
  set parcoursList(value: Array<Parcours>) {
    this.service.parcoursList = value;
  }

}
