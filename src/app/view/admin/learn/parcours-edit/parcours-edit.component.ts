import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ParcoursService} from '../../../../controller/service/parcours.service';
import {Parcours} from '../../../../controller/Model/parcours.model';
import {Centre} from '../../../../controller/Model/centre.model';

@Component({
  selector: 'app-parcours-edit',
  templateUrl: './parcours-edit.component.html',
  styleUrls: ['./parcours-edit.component.scss']
})
export class ParcoursEditComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private service: ParcoursService ) { }

  ngOnInit(): void {
  }
  public editParcours() {
    this.submitted = true;
    if (this.parcours.id) {
        this.parcoursList[this.service.findParcoursIndexById(this.parcours.id)] = this.parcours;
        this.service.updateParcours().subscribe(data => {
          this.parcours = data;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Commande Updated',
            life: 3000
          });
        });
      }
    this.editDialog = false;
    this.parcours = new Parcours();

  }
  get parcours(): Parcours {
    return this.service.parcours;
  }
  set parcours(value: Parcours) {
    this.service.parcours = value;
  }
  set parcoursList(value: Array<Parcours>) {
    this.service.parcoursList = value;
  }

  get parcoursList(): Array<Parcours> {
    return this.service.parcoursList;
  }
  public hideEditDialog() {
    this.editDialog = false;
  }
  get editDialog(): boolean {
    return this.service.editDialog;
  }

  set editDialog(value: boolean) {
    this.service.editDialog = value;
  }

  get submitted(): boolean {
    return this.service.submitted;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
  }
  findAllCentre() {
    this.service.findAllCentre().subscribe(data => {
      this.centreList = data;
    });
  }
  get centreList(): Array<Centre> {
    return this.service.centreList;
  }

  set centreList(value: Array<Centre>) {
    this.service.centreList = value;
  }
}
