import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private router: Router) {}

  public navigateToMainPage(): void {
		void this.router.navigate(['']);
	}

  public navigateToListPage(): void {
		void this.router.navigate(['product/list']);
	}
}
