import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private router: Router) {}

  public navigateToListPage(): void {
		void this.router.navigate(['product/list']);
	}
}
