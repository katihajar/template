import { Component, OnInit } from '@angular/core';
import {Section} from '../../../../controller/Model/section.model';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ParcoursService} from '../../../../controller/service/parcours.service';


@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class SectionListComponent implements OnInit {

  cols: any[];
  // tslint:disable-next-line:max-line-length
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private service: ParcoursService ) { }
  ngOnInit(): void {
    this.initCol();
  }
  private initCol() {
    this.cols = [
      {field: 'id', header: 'Id'},
      {field: 'libelle', header: 'Libelle'},
      {field: 'code', header: 'Code'},
      {field: 'questions', header: 'Questions'},
      {field: 'urlVideo', header: 'UrlVideo'},
      {field: 'urlImage3', header: 'UrlImage3'},
      {field: 'urlImage2', header: 'UrlImage2'},
      {field: 'urlImage', header: 'UrlImage'},
      {field: 'contenu', header: 'Contenu'},
      {field: 'content', header: 'Content'},
      {field: 'indicationProf', header: 'IndicationProf'},
      {field: 'cours', header: 'Cours'},
      {field: 'categorieSection', header: 'CategorieSection'},
      {field: 'url', header: 'Url'},
      {field: 'superCategorieSection', header: 'SuperCategorieSection'}
    ];
  }
  set section(value: Section) {
    this.service.section = value;
  }

  set sectionList(value: Array<Section>) {
    this.service.sectionList = value;
  }

  get sectionList(): Array<Section> {
    return this.service.sectionList;
  }
  get sectionLists(): Array<Section> {
    return this.service.sectionLists;
  }

  set sectionLists(value: Array<Section>) {
    this.service.sectionLists = value;
  }
  public editSection(sections: Section) {
    this.section = {...sections};
    this.editDialogSection = true;
  }
  public view(sections: Section) {
    this.section = {...sections};
    this.viewDialogSection = true;
  }
  get createDialogSection(): boolean {
    return this.service.createDialogSection;
  }

  set createDialogSection(value: boolean) {
    this.service.createDialogSection = value;
  }

  get editDialogSection(): boolean {
    return this.service.editDialogSection;
  }

  set editDialogSection(value: boolean) {
    this.service.editDialogSection = value;
  }

  get viewDialogSection(): boolean {
    return this.service.viewDialogSection;
  }

  set viewDialogSection(value: boolean) {
    this.service.viewDialogSection = value;
  }

  get submittedSection(): boolean {
    return this.service.submittedSection;
  }

  set submittedSection(value: boolean) {
    this.service.submittedSection = value;
  }

  // tslint:disable-next-line:adjacent-overload-signatures
  get section(): Section {
    return this.service.section;
  }

  public delete(sections: Section) {
    this.section = sections;
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + sections.libelle + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteSection().subscribe(data => {
          this.sectionList = this.sectionList.filter(val => val.id !== this.section.id);
          this.section = new Section();
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


  public deleteMultiple() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected commandes?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteMultipleSectionByid().subscribe(data => {
          this.service.deleteMultipleSectionIndexById();
          this.sectionLists = null;
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
