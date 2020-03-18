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
                                    <img src="assets/layout/images/configurator/menu/roma-static.png" alt="roma"/>
                                    <i class="pi pi-check" *ngIf="app.menuMode === 'static'"></i>
                                </a>
                                <span>Static</span>
                            </div>
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="app.menuMode = 'overlay'">
                                    <img src="assets/layout/images/configurator/menu/roma-overlay.png" alt="roma"/>
                                    <i class="pi pi-check" *ngIf="app.menuMode === 'overlay'"></i>
                                </a>
                                <span>Overlay</span>
                            </div>
                            <div class="panel-item">
                                <a style="cursor: pointer"
                                   (click)="app.menuMode = 'horizontal'; app.inlineUser = false; app.inlineUserMenuActive = false;">
                                    <img src="assets/layout/images/configurator/menu/roma-horizontal.png" alt="roma"/>
                                    <i class="pi pi-check" *ngIf="app.menuMode === 'horizontal'"></i>
                                </a>
                                <span>Horizontal</span>
                            </div>
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="app.menuMode = 'slim'">
                                    <img src="assets/layout/images/configurator/menu/roma-slim.png" alt="roma"/>
                                    <i class="pi pi-check" *ngIf="app.menuMode === 'slim'"></i>
                                </a>
                                <span>Slim</span>
                            </div>
                        </div>
                        <h1>Menu Colors</h1>
                        <div class="panel-items">
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="this.app.lightMenu = false">
                                    <img src="assets/layout/images/configurator/menu/roma-dark.png" alt="roma"/>
                                    <i class="pi pi-check" *ngIf="!this.app.lightMenu"></i>
                                </a>
                                <span>Dark</span>
                            </div>
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="this.app.lightMenu = true">
                                    <img src="assets/layout/images/configurator/menu/roma-static.png" alt="roma"/>
                                    <i class="pi pi-check" *ngIf="app.lightMenu"></i>
                                </a>
                                <span>Light</span>
                            </div>
                        </div>
                    </p-tabPanel>
                    <p-tabPanel header="User Profile">
                        <div class="panel-items">
                            <div class="panel-item">
                                <a style="cursor: pointer" [ngClass]="{'ui-state-disabled': app.isHorizontal()}"
                                   (click)="this.app.inlineUser = true">
                                    <img src="assets/layout/images/configurator/menu/roma-inline.png" alt="roma"/>
                                    <i class="pi pi-check" *ngIf="app.inlineUser"></i>
                                </a>
                                <span>Inline</span>
                            </div>
                            <div class="panel-item">
                                <a style="cursor: pointer" [ngClass]="{'ui-state-disabled': app.isHorizontal()}"
                                   (click)="this.app.inlineUser = false">
                                    <img src="assets/layout/images/configurator/menu/roma-popup.png" alt="roma"/>
                                    <i class="pi pi-check" *ngIf="!app.inlineUser"></i>
                                </a>
                                <span>Overlay</span>
                            </div>
                        </div>
                    </p-tabPanel>
                    <p-tabPanel header="Orientation">
                        <div class="panel-items">
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="this.app.isRTL = false">
                                    <img src="assets/layout/images/configurator/menu/roma-static.png" alt="roma"/>
                                    <i class="pi pi-check" *ngIf="!app.isRTL"></i>
                                </a>
                                <span>LTR</span>
                            </div>
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="this.app.isRTL = true">
                                    <img src="assets/layout/images/configurator/menu/roma-rtl.png" alt="roma"/>
                                    <i class="pi pi-check" *ngIf="app.isRTL"></i>
                                </a>
                                <span>RTL</span>
                            </div>
                        </div>
                    </p-tabPanel>
                    <p-tabPanel header="Topbar">
                        <div class="panel-items">
                            <div class="panel-item" *ngFor="let topbarColor of topbarColors">
                                <a style="cursor: pointer" class="layout-config-option"
                                   (click)="changeTopbarColor(topbarColor.label, topbarColor.logo)">
                                    <img src="assets/layout/images/configurator/topbar/{{topbarColor.image}}" alt="roma"/>
                                    <i class="pi pi-check" *ngIf="app.topbarColor === topbarColor.label"></i>
                                </a>
                            </div>
                        </div>
                    </p-tabPanel>
                    <p-tabPanel header="Themes">
                        <div class="panel-items">
                            <div class="panel-item" *ngFor="let theme of themes">
                                <a style="cursor: pointer" class="layout-config-option" (click)="changeTheme(theme.label)">
                                    <img src="assets/layout/images/configurator/themes/{{theme.image}}" alt="roma"/>
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
            {label: 'layout-topbar-light', logo: 'logo-roma', image: 'light.png'},
            {label: 'layout-topbar-dark', logo: 'logo-roma-white', image: 'dark.png'},
            {label: 'layout-topbar-blue', logo: 'logo-roma-white', image: 'blue.png'},
            {label: 'layout-topbar-green', logo: 'logo-roma-white', image: 'green.png'},
            {label: 'layout-topbar-orange', logo: 'logo-roma-white', image: 'orange.png'},
            {label: 'layout-topbar-magenta', logo: 'logo-roma-white', image: 'magenta.png'},
            {label: 'layout-topbar-bluegrey', logo: 'logo-roma-white', image: 'bluegrey.png'},
            {label: 'layout-topbar-deeppurple', logo: 'logo-roma-white', image: 'deeppurple.png'},
            {label: 'layout-topbar-brown', logo: 'logo-roma-white', image: 'brown.png'},
            {label: 'layout-topbar-lime', logo: 'logo-roma-white', image: 'lime.png'},
            {label: 'layout-topbar-rose', logo: 'logo-roma-white', image: 'rose.png'},
            {label: 'layout-topbar-cyan', logo: 'logo-roma-white', image: 'cyan.png'},
            {label: 'layout-topbar-teal', logo: 'logo-roma-white', image: 'teal.png'},
            {label: 'layout-topbar-deeporange', logo: 'logo-roma-white', image: 'deeporange.png'},
            {label: 'layout-topbar-indigo', logo: 'logo-roma-white', image: 'indigo.png'},
            {label: 'layout-topbar-pink', logo: 'logo-roma-white', image: 'pink.png'},
            {label: 'layout-topbar-purple', logo: 'logo-roma-white', image: 'purple.png'}
        ];
        this.themes = [
            {label: 'blue', image: 'blue.svg'},
            {label: 'green', image: 'green.svg'},
            {label: 'orange', image: 'orange.svg'},
            {label: 'magenta', image: 'magenta.svg'},
            {label: 'bluegrey', image: 'bluegrey.svg'},
            {label: 'deeppurple', image: 'deeppurple.svg'},
            {label: 'brown', image: 'brown.svg'},
            {label: 'lime', image: 'lime.svg'},
            {label: 'rose', image: 'rose.svg'},
            {label: 'cyan', image: 'cyan.svg'},
            {label: 'teal', image: 'teal.svg'},
            {label: 'deeporange', image: 'deeporange.svg'},
            {label: 'indigo', image: 'indigo.svg'},
            {label: 'pink', image: 'pink.svg'},
            {label: 'purple', image: 'purple.svg'}
        ];
    }

    changeTheme(theme: string) {
        this.changeStyleSheetsColor('layout-css', 'layout-' + theme + '.css');
        this.changeStyleSheetsColor('theme-css', 'theme-' + theme + '.css');
        this.themeColor = theme;
    }

    changeTopbarColor(topbarColor, logo) {
        this.app.topbarColor = topbarColor;
        const topbarLogoLink: HTMLImageElement = document.getElementById('topbar-logo') as HTMLImageElement;
        topbarLogoLink.src = 'assets/layout/images/' + logo + '.svg';
    }

    changeStyleSheetsColor(id, value) {
        const element = document.getElementById(id);
        const urlTokens = element.getAttribute('href').split('/');
        urlTokens[urlTokens.length - 1] = value;

        const newURL = urlTokens.join('/');

        this.replaceLink(element, newURL);
    }

    replaceLink(linkElement, href) {
        if (this.isIE()) {
            linkElement.setAttribute('href', href);
        } 
        else {
            const id = linkElement.getAttribute('id');
            const cloneLinkElement = linkElement.cloneNode(true);

            cloneLinkElement.setAttribute('href', href);
            cloneLinkElement.setAttribute('id', id + '-clone');

            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', id);
            });
        }
    }

    isIE() {
        return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
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
