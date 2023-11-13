import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-sidebar-cmp',
  imports: [
    RouterLink, RouterLinkActive
  ],
  templateUrl: 'sidebar.component.html',
})
export class SidebarComponent {
}
