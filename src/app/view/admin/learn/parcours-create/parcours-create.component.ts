import { Component, OnInit } from '@angular/core';
import {Commande} from '../../../../controller/Model/commande.model';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ParcoursService} from '../../../../controller/service/parcours.service';
import {Parcours} from '../../../../controller/Model/parcours.model';
import {Centre} from '../../../../controller/Model/centre.model';

@Component({
  selector: 'app-parcours-create',
  templateUrl: './parcours-create.component.html',
  styleUrls: ['./parcours-create.component.scss']
})
export class ParcoursCreateComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private service: ParcoursService ) { }

  ngOnInit(): void {
  }

  public hideCreateDialog() {
    this.createDialog = false;
    this.submitted = false;
  }

  public save() {
    this.submitted = true;
    if (this.parcours.id == null) {
      this.service.save().subscribe(data => {
        // @ts-ignore
        this.parcoursList.push({...data});
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Commande Created',
          life: 3000
        });
      });
      this.service.init().subscribe(data => this.parcoursList = data);
      this.createDialog = false;
      this.parcours = new Parcours();
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
  findAllCentre() {
    this.service.findAllCentre().subscribe(data => {
      this.centreList = data;
    });
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
  get createDialog(): boolean {
    return this.service.createDialog;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set centreList(value: Array<Centre>) {
    this.service.centreList = value;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set createDialog(value: boolean) {
    this.service.createDialog = value;
  }

  get submitted(): boolean {
    return this.service.submitted;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set parcoursList(value: Array<Parcours>) {
    this.service.parcoursList = value;
  }
}
