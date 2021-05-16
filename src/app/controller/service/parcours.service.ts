/* tslint:disable:adjacent-overload-signatures */
import { Injectable } from '@angular/core';
import {Parcours} from '../model/parcours.model';
import { HttpClient } from '@angular/common/http';
import {Cours} from '../model/cours.model';
import {Section} from '../Model/section.model';
import {CategorieSection} from '../Model/categorie-section.model';
import {SuperCategorieSection} from '../Model/super-categorie-section.model';
import {Centre} from '../Model/centre.model';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ParcoursService {
  private _parcours: Parcours;
  private _parcoursList: Array<Parcours>;
  private _parcoursLists: Array<Parcours>;
  private _coursLists: Array<Cours>;
  private _sectionLists: Array<Section>;
  private _cours: Cours;
  private _coursList: Array<Cours>;
  private _coursList2: Array<Cours>;
  private _section: Section;
  private _categoriesectionList: Array<CategorieSection>;
  private _categoriesection: CategorieSection;
  private _supercategoriesectionList: Array<SuperCategorieSection>;
  private _supercategoriesection: SuperCategorieSection;
  private _sectionList: Array<Section>;
  private _sectionListByLibelle: Array<Section>;
  private _centre: Centre;
  private _centreList: Array<Centre>;
  private _index: number;
  private _createDialog: boolean;
  private _editDialog: boolean;
  private _viewDialog: boolean;
  private _submitted: boolean;
  private _createDialogCours: boolean;
  private _editDialogCours: boolean;
  private _viewDialogCours: boolean;
  private _submittedCours: boolean;
  private _createDialogSection: boolean;
  private _editDialogSection: boolean;
  private _viewDialogSection: boolean;
  private _submittedSection: boolean;
  constructor(private http: HttpClient ) {  }


  get createDialogSection(): boolean {
    return this._createDialogSection;
  }

  set createDialogSection(value: boolean) {
    this._createDialogSection = value;
  }

  get editDialogSection(): boolean {
    return this._editDialogSection;
  }

  set editDialogSection(value: boolean) {
    this._editDialogSection = value;
  }

  get viewDialogSection(): boolean {
    return this._viewDialogSection;
  }

  set viewDialogSection(value: boolean) {
    this._viewDialogSection = value;
  }

  get submittedSection(): boolean {
    return this._submittedSection;
  }

  set submittedSection(value: boolean) {
    this._submittedSection = value;
  }

  get createDialogCours(): boolean {
    return this._createDialogCours;
  }

  set createDialogCours(value: boolean) {
    this._createDialogCours = value;
  }

  get editDialogCours(): boolean {
    return this._editDialogCours;
  }

  set editDialogCours(value: boolean) {
    this._editDialogCours = value;
  }

  get viewDialogCours(): boolean {
    return this._viewDialogCours;
  }

  set viewDialogCours(value: boolean) {
    this._viewDialogCours = value;
  }

  get submittedCours(): boolean {
    return this._submittedCours;
  }

  set submittedCours(value: boolean) {
    this._submittedCours = value;
  }

  public deleteMultipleParcoursByid(): Observable<number> {
    return this.http.post<number>('http://localhost:8036/E-learning/parcours/delete-multiple-by-id' , this.parcoursLists);
  }
  public deleteMultipleCoursByid(): Observable<number> {
    return this.http.post<number>('http://localhost:8036/E-learning/cours/delete-multiple-by-id' , this.coursLists);
  }
  public deleteMultipleSectionByid(): Observable<number> {
    return this.http.post<number>('http://localhost:8036/E-learning/section/delete-multiple-by-id' , this.sectionLists);
  }
  get parcoursLists(): Array<Parcours> {
    if (this._parcoursLists == null ) {
      this._parcoursLists = new Array<Parcours>();
    }
    return this._parcoursLists;
  }

  set parcoursLists(value: Array<Parcours>) {
    this._parcoursLists = value;
  }

  get createDialog(): boolean {
    return this._createDialog;
  }

  set createDialog(value: boolean) {
    this._createDialog = value;
  }

  get editDialog(): boolean {
    return this._editDialog;
  }

  set editDialog(value: boolean) {
    this._editDialog = value;
  }

  get viewDialog(): boolean {
    return this._viewDialog;
  }

  set viewDialog(value: boolean) {
    this._viewDialog = value;
  }

  get submitted(): boolean {
    return this._submitted;
  }

  set submitted(value: boolean) {
    this._submitted = value;
  }

  get coursLists(): Array<Cours> {
    return this._coursLists;
  }

  set coursLists(value: Array<Cours>) {
    this._coursLists = value;
  }

  get sectionLists(): Array<Section> {
    return this._sectionLists;
  }

  set sectionLists(value: Array<Section>) {
    this._sectionLists = value;
  }


  public validateSaveParcours(): boolean{
    return this.parcours.code != null;
  }
  public validateSaveCours(): boolean{
    return this.cours.code != null;
  }
  public validateSaveSection(): boolean{
    return this.section.code != null;
  }
  public updateCours(): Observable<Cours> {
    return this.http.put<Cours>('http://localhost:8036/E-learning/cours/', this.cours);
  }
  public SaveCours(): Observable<number> {
    if (this.cours.id == null){
      return this.http.post<number>('http://localhost:8036/E-learning/cours/', this.cours);
    }
  }
  public AjoutSection(id: number): Observable<number> {
      return this.http.get<number>('http://localhost:8036/E-learning/cours/id/' + id);
  }
  public updateSection(): Observable<Section> {
    return this.http.put<Section>('http://localhost:8036/E-learning/section/', this.section);

  }
  public updateParcours(): Observable<Parcours>  {
    return this.http.put<Parcours>('http://localhost:8036/E-learning/parcours/', this.parcours);
  }
  public save(): Observable<number> {
    if (this.parcours.id == null){
      return this.http.post<number>('http://localhost:8036/E-learning/parcours/', this.parcours); }
  }

  public init(): Observable<Array<Parcours>> {
    return this.http.get< Array<Parcours> >('http://localhost:8036/E-learning/parcours/');

  }
  public findAllCentre(): Observable<Array<Centre>> {
    return this.http.get< Array<Centre> >('http://localhost:8036/learn/centre/');
  }

  public findAllCours(): Observable<Array<Cours>> {
    return this.http.get< Array<Cours> >('http://localhost:8036/E-learning/cours/');
  }
  public findAllSection(): Observable<Array<Section>> {
   return this.http.get< Array<Section> >('http://localhost:8036/E-learning/section/');
  }
  public findAllCategorieSection(): Observable< Array<CategorieSection> > {
   return this.http.get< Array<CategorieSection> >('http://localhost:8036/E-learning/categoriesection/');

  }
  public findAllSuperCategorieSection(): Observable< Array<SuperCategorieSection> > {
   return this.http.get< Array<SuperCategorieSection> >('http://localhost:8036/E-learning/supercategoriesection/');
  }
  public deleteSection(): Observable<number> {
   return this.http.delete<number>('http://localhost:8036/E-learning/section/id/' + this.section.id);
  }
  public deleteCours(): Observable<number>{
    return this.http.delete<number >('http://localhost:8036/E-learning/cours/id/' + this.cours.id );

  }
  public deleteParcours(): Observable<number>{
   return  this.http.delete<number>('http://localhost:8036/E-learning/parcours/id/' + this.parcours.id);
  }

  get categoriesectionList(): Array<CategorieSection> {
    if (this._categoriesectionList == null){
      this._categoriesectionList = new Array<CategorieSection>();
    }
    return this._categoriesectionList;
  }

  set categoriesectionList(value: Array<CategorieSection>) {
    this._categoriesectionList = value;
  }

  get supercategoriesectionList(): Array<SuperCategorieSection> {
    if (this._supercategoriesectionList == null){
      this._supercategoriesectionList = new Array<SuperCategorieSection>();
    }
    return this._supercategoriesectionList;
  }

  set supercategoriesectionList(value: Array<SuperCategorieSection>) {
    this._supercategoriesectionList = value;
  }

  get supercategoriesection(): SuperCategorieSection {
    if (this._supercategoriesection == null) {
      this._supercategoriesection = new SuperCategorieSection();
    }
    return this._supercategoriesection;
  }

  set supercategoriesection(value: SuperCategorieSection) {
    this._supercategoriesection = value;
  }

  get categoriesection(): CategorieSection {
    if (this._categoriesection == null) {
      this._categoriesection = new CategorieSection();
    }
    return this._categoriesection;
  }

  set categoriesection(value: CategorieSection) {
    this._categoriesection = value;
  }

  get centre(): Centre {
    if (this._centre == null) {
      this._centre = new Centre();
    }
    return this._centre;
  }

  set centre(value: Centre) {
    this._centre = value;
  }

  get sectionListByLibelle(): Array<Section> {
    if (this._sectionListByLibelle == null){
      this._sectionListByLibelle = new Array<Section>();
    }
    return this._sectionListByLibelle;
  }

  set sectionListByLibelle(value: Array<Section>) {
    this._sectionListByLibelle = value;
  }

  get section(): Section {
    if (this._section == null) {
      this._section = new Section();
    }
    return this._section;
  }

  get sectionList(): Array<Section> {
    if (this._sectionList == null){
      this._sectionList = new Array<Section>();
    }
    return this._sectionList;
  }

  get centreList(): Array<Centre> {
    if (this._centreList == null){
      this._centreList = new Array<Centre>();
    }
    return this._centreList;
  }

  set centreList(value: Array<Centre>) {
    this._centreList = value;
  }

  get cours(): Cours{
    if (this._cours == null){
      this._cours = new Cours();
    }
    return this._cours;
  }

  get coursList2(): Array<Cours> {
    if (this._coursList2 == null){
      this._coursList2 = new Array<Cours>() ;
    }
    return this._coursList2;
  }
  get coursList(): Array<Cours> {
    if (this._coursList == null){
      this._coursList = new Array<Cours>() ;
    }
    return this._coursList;
  }
  get parcours(): Parcours {
    if (this._parcours == null) {
      this._parcours = new Parcours();
    }
    return this._parcours;
  }
  public findSectionIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.sectionList.length; i++) {
      if (this.sectionList[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }

  public deleteSectionIndexById(id: number) {
    this.sectionList.splice(this.findSectionIndexById(id), 1);
  }

  public deleteMultipleSectionIndexById() {
    for (const item of this.sectionLists){
      this.deleteSectionIndexById(item.id);
    }
  }
  public findCoursIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.coursList.length; i++) {
      if (this.coursList[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }

  public deleteCoursIndexById(id: number) {
    this.coursList.splice(this.findCoursIndexById(id), 1);
  }

  public deleteMultipleCoursIndexById() {
    for (const item of this.coursLists){
      this.deleteCoursIndexById(item.id);
    }
  }
  public findParcoursIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.parcoursList.length; i++) {
      if (this.parcoursList[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }

  public deleteParcoursIndexById(id: number) {
    this.parcoursList.splice(this.findParcoursIndexById(id), 1);
  }

  public deleteMultipleParcoursIndexById() {
    for (const item of this.parcoursLists){
      this.deleteParcoursIndexById(item.id);
    }
  }

  // tslint:disable-next-line:adjacent-overload-signatures
  set parcours(value: Parcours) {
    this._parcours = value;
  }

  set parcoursList(value: Array<Parcours>) {
    this._parcoursList = value;
  }

  set cours(value: Cours) {
    this._cours = value;
  }

  set coursList(value: Array<Cours>) {
    this._coursList = value;
  }

  set coursList2(value: Array<Cours>) {
    this._coursList2 = value;
  }

  set section(value: Section) {
    this._section = value;
  }

  set sectionList(value: Array<Section>) {
    this._sectionList = value;
  }

  get parcoursList(): Array<Parcours> {
    if (this._parcoursList == null ) {
      this._parcoursList = new Array<Parcours>();
    }
    return this._parcoursList;
  }

  public clone(parcours: Parcours): Parcours {
    const clone = new Parcours();
    clone.id = parcours.id;
    clone.code = parcours.code;
    clone.libelle = parcours.libelle;
    clone.numeroOrder = parcours.numeroOrder;
    clone.nombreCours = parcours.nombreCours;
    clone.description = parcours.description;
    clone.dateCreation = parcours.dateCreation;
    clone.datePublication = parcours.datePublication;
    clone.coursList = parcours.coursList;
    clone.centre = parcours.centre;
    return clone;
  }
  public clonecours(cours: Cours): Cours {
    const myClone = new  Cours();
    myClone.id = cours.id;
    myClone.code = cours.code;
    myClone.libelle = cours.libelle;
    myClone.numeroOrder = cours.numeroOrder;
    myClone.description = cours.description;
    myClone.image = cours.image;
    myClone.nombreLinkFinalise = cours.nombreLinkFinalise;
    myClone.nombreLinkEnCours = cours.nombreLinkEnCours;
    myClone.nombreSectionEnCours = cours.nombreSectionEnCours;
    myClone.nombreSectionFinalise = cours.nombreSectionFinalise;
    myClone.sectionList = cours.sectionList;
    myClone.parcours = cours.parcours;
    return myClone;
  }

  public clonesection(section: Section): Section{
    const myClone = new  Section();
    myClone.id = section.id;
    myClone.code = section.code;
    myClone.libelle = section.libelle;
    myClone.urlImage = section.urlImage;
    myClone.urlImage2 = section.urlImage2;
    myClone.urlImage3 = section.urlImage3;
    myClone.urlVideo = section.urlVideo;
    myClone.cours = section.cours;
    myClone.categorieSection = section.categorieSection;
    myClone.indicationProf = section.indicationProf;
    myClone.questions = section.questions;
    myClone.contenu = section.contenu;
    myClone.url = section.url;
    myClone.content = section.content;
    return myClone;
  }

  public afficheCours(): Observable<Array<Cours>> {
   return this.http.get<Array<Cours>>('http://localhost:8036/E-learning/cours/parcours/id/' + this.parcours.id );
  }

  affichelistSection(): Observable<Array<Section>> {
    return this.http.get<Array<Section>>('http://localhost:8036/E-learning/section/cours/id/' + this.cours.id  );
  }

  public findSectionByLibelle(libel: string): Observable<Array<Section>> {
   return this.http.get<Array<Section>>('http://localhost:8036/E-learning/section/libelle/' + libel );
  }
  public findCoursByLibelle(libel: string): Observable<Array<Cours>> {
    return this.http.get<Array<Cours>>('http://localhost:8036/E-learning/cours/libelle/' + libel );
  }

  public findParcoursByLibelle(libel: string): Observable<Array<Parcours>> {
    return this.http.get<Array<Parcours>>('http://localhost:8036/E-learning/parcours/libelle/' + libel );
  }
  public findCategorieSectionByLibelle(libel: string): Observable<Array<CategorieSection>> {
    return this.http.get<Array<CategorieSection>>('http://localhost:8036/E-learning/categoriesection/libelle/' + libel );
  }

  public findSuperCategorieSectionByLibelle(libel: string): Observable<Array<SuperCategorieSection>> {
    return this.http.get<Array<SuperCategorieSection>>('http://localhost:8036/E-learning/supercategoriesection/libelle/' + libel );
  }

  public findCoursByid(id: number): Observable<Array<Cours>> {
   return  this.http.get<Array<Cours>>('http://localhost:8036/E-learning/cours/cours/id/' + id );
  }

  public findSectionByid(id: number): Observable<Section> {
    return this.http.get<Section>('http://localhost:8036/E-learning/section/section/id/' + id );
  }
}
