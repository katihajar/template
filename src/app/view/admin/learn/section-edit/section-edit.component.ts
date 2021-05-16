import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ParcoursService} from '../../../../controller/service/parcours.service';
import {Cours} from '../../../../controller/Model/cours.model';
import {Section} from '../../../../controller/Model/section.model';
import {CategorieSection} from '../../../../controller/Model/categorie-section.model';

@Component({
  selector: 'app-section-edit',
  templateUrl: './section-edit.component.html',
  styleUrls: ['./section-edit.component.scss']
})
export class SectionEditComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private service: ParcoursService ) { }

  ngOnInit(): void {
  }
  public editSection() {
    this.submittedSection = true;
    if (this.section.id) {
      this.sectionList[this.service.findSectionIndexById(this.section.id)] = this.section;
      this.service.updateSection().subscribe(data => {
        this.section = data;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Commande Updated',
          life: 3000
        });
      });
    }
    this.editDialogSection = false;
    this.section = new Section();

  }
  get section(): Section {
    return this.service.section;
  }
  set section(value: Section) {
    this.service.section = value;
  }
  public hideEditDialog() {
    this.editDialogSection = false;
  }
  get editDialogSection(): boolean {
    return this.service.editDialogSection;
  }

  set editDialogSection(value: boolean) {
    this.service.editDialogSection = value;
  }

  get submittedSection(): boolean {
    return this.service.submittedSection;
  }

  set submittedSection(value: boolean) {
    this.service.submittedSection = value;
  }
  findAllCours() {
    this.service.findAllCours().subscribe(data => {
      this.coursList = data;
    });
  }
  findAllCategorie() {
    this.service.findAllCategorieSection().subscribe(data => {
      this.categoriesectionList = data;
    });
  }

  get categoriesectionList(): Array<CategorieSection> {
    return this.service.categoriesectionList;
  }

  set categoriesectionList(value: Array<CategorieSection>) {
    this.service.categoriesectionList = value;
  }
  get categoriesection(): CategorieSection {
    return this.service.categoriesection;
  }

  set categoriesection(value: CategorieSection) {
    this.service.categoriesection = value;
  }
  get coursList(): Array<Cours> {
    return this.service.coursList;
  }
  set coursList(value: Array<Cours>) {
    this.service.coursList = value;
  }
  get sectionList(): Array<Section> {
    return this.service.sectionList;
  }
  set sectionList(value: Array<Section>) {
    this.service.sectionList = value;
  }
}
