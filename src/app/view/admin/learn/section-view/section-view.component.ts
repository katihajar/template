import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ParcoursService} from '../../../../controller/service/parcours.service';
import {Section} from '../../../../controller/Model/section.model';

@Component({
  selector: 'app-section-view',
  templateUrl: './section-view.component.html',
  styleUrls: ['./section-view.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class SectionViewComponent implements OnInit {
// tslint:disable-next-line:max-line-length
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private service: ParcoursService ) { }

  ngOnInit(): void {
  }
  public hideViewDialog() {
    this.viewDialogSection = false;
  }
  get section(): Section {
    return this.service.section;
  }

  set section(value: Section) {
    this.service.section = value;
  }
  get sectionList(): Array<Section> {
    return this.service.sectionList;
  }
  set sectionList(value: Array<Section>) {
    this.service.sectionList = value;
  }
  get viewDialogSection(): boolean {
    return this.service.viewDialogSection;
  }

  set viewDialogSection(value: boolean) {
    this.service.viewDialogSection = value;
  }
}
