import { Component } from '@angular/core';
import { AppComponent} from './app.component';

@Component({
  selector: 'app-right-menu',
  templateUrl: './app.right-menu.component.html'
})
export class AppRightMenuComponent {
	statusActive:boolean = true;

	messagesActive:boolean;
	
	constructor(public app: AppComponent) {}

	messagesClick() {
		this.statusActive = false;
		this.messagesActive = true;
	}

	statusClick() {
		this.statusActive = true;
		this.messagesActive = false;
	}
}
