import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ROUTES } from '../app-route.constants';
import { AuthService } from './../core/auth.service';
import { DataService } from './../core/data.service';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss'],
	animations: [
		trigger('flyInOut', [
			state('in', style({ opacity: 1 })),
			transition(':enter', [style({ opacity: 0 }), animate(1000)])
		])
	]
})
export class MainComponent implements OnInit {
	theme = 'orange';
	active = 'main';
	gridSize = 6;
	isHandset: Observable<boolean>;
	ROUTES = ROUTES;

	constructor(
		private dataService: DataService,
		private router: Router,
		private authService: AuthService
	) { }

	ngOnInit() {
		this.authService.getLoggedUserDetails();
	}

	changeGridSize(event: any) {
		this.gridSize = event.value;
		this.dataService.gridObject.next(this.gridSize);
	}

	changeTheme(theme: string) {
		this.theme = theme;
		DataService.themeEmitter.emit(theme);
	}
	route(routeTo: string) {
		this.active = routeTo;
		this.router.navigate(['/home/' + routeTo]);
	}

	getPage(outlet) { }

	navigate(route: string) {
		this.router.navigate([route]);
	}


}

