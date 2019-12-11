import {Component, OnInit} from '@angular/core';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-config',
    template: `
        <div class="layout-config" [ngClass]="{'layout-config-active': app.configActive}" (click)="app.onConfigClick($event)">
            <div class="layout-config-content">
                <a style="cursor: pointer" id="layout-config-button" class="layout-config-button" (click)="onConfigButtonClick($event)">
                    <i class="pi pi-cog"></i>
                </a>
                <a style="cursor: pointer" class="layout-config-close" (click)="onConfigCloseClick($event)">
                    <i class="pi pi-times"></i>
                </a>
                <p-tabView>
                    <p-tabPanel header="Menu">
                        <h1>Menu Modes</h1>
                        <div class="panel-items">
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="app.menuMode = 'static'">
                                    <img src="assets/layout/images/configurator/menu/placeholder.png" alt="roma"/>
                                    <i class="pi pi-check" *ngIf="app.menuMode === 'static'"></i>
                                </a>
                                <span>Static</span>
                            </div>
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="app.menuMode = 'overlay'">
                                    <img src="assets/layout/images/configurator/menu/placeholder.png" alt="roma"/>
                                    <i class="pi pi-check" *ngIf="app.menuMode === 'overlay'"></i>
                                </a>
                                <span>Overlay</span>
                            </div>
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="app.menuMode = 'horizontal'">
                                    <img src="assets/layout/images/configurator/menu/placeholder.png" alt="roma"/>
                                    <i class="pi pi-check" *ngIf="app.menuMode === 'horizontal'"></i>
                                </a>
                                <span>Horizontal</span>
                            </div>
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="app.menuMode = 'slim'">
                                    <img src="assets/layout/images/configurator/menu/placeholder.png" alt="roma"/>
                                    <i class="pi pi-check" *ngIf="app.menuMode === 'slim'"></i>
                                </a>
                                <span>Slim</span>
                            </div>
                        </div>
                        <h1>Menu Colors</h1>
                        <div class="panel-items">
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="this.app.lightMenu = false">
                                    <img src="assets/layout/images/configurator/menu/placeholder.png" alt="roma"/>
                                    <i class="pi pi-check" *ngIf="!this.app.lightMenu"></i>
                                </a>
                                <span>Dark</span>
                            </div>
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="this.app.lightMenu = true">
                                    <img src="assets/layout/images/configurator/menu/placeholder.png" alt="roma"/>
                                    <i class="pi pi-check" *ngIf="app.lightMenu"></i>
                                </a>
                                <span>Light</span>
                            </div>
                        </div>
                    </p-tabPanel>
                    <p-tabPanel header="Orientation">
                        <div class="panel-items">
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="this.app.isRTL = false">
                                    <img src="assets/layout/images/configurator/menu/placeholder.png" alt="roma"/>
                                    <i class="pi pi-check" *ngIf="!app.isRTL"></i>
                                </a>
                                <span>LTR</span>
                            </div>
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="this.app.isRTL = true">
                                    <img src="assets/layout/images/configurator/menu/placeholder.png" alt="roma"/>
                                    <i class="pi pi-check" *ngIf="app.isRTL"></i>
                                </a>
                                <span>RTL</span>
                            </div>
                        </div>
                    </p-tabPanel>
                    <p-tabPanel header="User Profile">
                        <div class="panel-items">
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="this.app.inlineUser = true">
                                    <img src="assets/layout/images/configurator/menu/placeholder.png" alt="roma"/>
                                    <i class="pi pi-check" *ngIf="app.inlineUser"></i>
                                </a>
                                <span>Inline</span>
                            </div>
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="this.app.inlineUser = false">
                                    <img src="assets/layout/images/configurator/menu/placeholder.png" alt="roma"/>
                                    <i class="pi pi-check" *ngIf="!app.inlineUser"></i>
                                </a>
                                <span>Overlay</span>
                            </div>
                        </div>
                    </p-tabPanel>
                    <p-tabPanel header="Topbar">
                        <div class="panel-items">
                            <div class="panel-item" *ngFor="let topbarColor of topbarColors">
                                <a style="cursor: pointer" class="layout-config-option" (click)="changeTopbarColor(topbarColor.label, topbarColor.logo)">
                                    <img src="assets/layout/images/configurator/theme/placeholder.png" alt="roma"/>
                                    <i class="pi pi-check" *ngIf="app.topbarColor === topbarColor.label"></i>
                                </a>
                            </div>
                        </div>
                    </p-tabPanel>
                    <p-tabPanel header="Themes">
                        <div class="panel-items">
                            <div class="panel-item" *ngFor="let theme of themes">
                                <a style="cursor: pointer" class="layout-config-option" (click)="changeTheme(theme.label)">
                                    <img src="assets/layout/images/configurator/theme/placeholder.png" alt="roma"/>
                                    <i class="pi pi-check" *ngIf="themeColor === theme.label"></i>
                                </a>
                            </div>
                        </div>
                    </p-tabPanel>
                </p-tabView>
            </div>
        </div>
    `
})
export class AppConfigComponent implements OnInit {

    themes: any[];

    themeColor = 'blue';

    topbarColors: any[];

    constructor(public app: AppMainComponent) {}

    ngOnInit() {
        this.topbarColors = [
            {label: 'layout-topbar-light', logo: 'logo-roma'},
            {label: 'layout-topbar-dark', logo: 'logo-roma-white'},
            {label: 'layout-topbar-blue', logo: 'logo-roma-white'},
            {label: 'layout-topbar-green', logo: 'logo-roma-white'},
            {label: 'layout-topbar-orange', logo: 'logo-roma-white'},
            {label: 'layout-topbar-magenta', logo: 'logo-roma-white'},
            {label: 'layout-topbar-bluegrey', logo: 'logo-roma-white'},
            {label: 'layout-topbar-deeppurple', logo: 'logo-roma-white'},
            {label: 'layout-topbar-brown', logo: 'logo-roma-white'},
            {label: 'layout-topbar-lime', logo: 'logo-roma-white'},
            {label: 'layout-topbar-rose', logo: 'logo-roma-white'},
            {label: 'layout-topbar-cyan', logo: 'logo-roma-white'},
            {label: 'layout-topbar-teal', logo: 'logo-roma-white'},
            {label: 'layout-topbar-deeporange', logo: 'logo-roma-white'},
            {label: 'layout-topbar-indigo', logo: 'logo-roma-white'},
            {label: 'layout-topbar-pink', logo: 'logo-roma-white'},
            {label: 'layout-topbar-purple', logo: 'logo-roma-white'}
        ]
        this.themes = [
            {label: 'blue'},
            {label: 'green'},
            {label: 'orange'},
            {label: 'magenta'},
            {label: 'bluegrey'},
            {label: 'deeppurple'},
            {label: 'brown'},
            {label: 'lime'},
            {label: 'rose'},
            {label: 'cyan'},
            {label: 'teal'},
            {label: 'deeporange'},
            {label: 'indigo'},
            {label: 'pink'},
            {label: 'purple'}
        ];
    }

    changeTheme(theme: string) {
        const layoutLink: HTMLLinkElement = document.getElementById('layout-css') as HTMLLinkElement;
        layoutLink.href = 'assets/layout/css/layout-' + theme + '.css';
        const themeLink: HTMLLinkElement = document.getElementById('theme-css') as HTMLLinkElement;
        themeLink.href = 'assets/theme/' + 'theme-' + theme + '.css';
        this.themeColor = theme;
    }

    changeTopbarColor(topbarColor, logo) {
        this.app.topbarColor = topbarColor;
        const topbarLogoLink: HTMLImageElement = document.getElementById('topbar-logo') as HTMLImageElement;
        topbarLogoLink.src = 'assets/layout/images/' + logo + '.svg';
    }

    onConfigButtonClick(event) {
        this.app.configActive = !this.app.configActive;
        event.preventDefault();
    }

    onConfigCloseClick(event) {
        this.app.configActive = false;
        event.preventDefault();
    }
}
