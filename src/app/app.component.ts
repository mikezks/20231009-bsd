import { Component, inject } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FlightSearchComponent } from "./flight-search/flight-search.component";
import { ConfigService } from './shared/config.service';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [SidebarComponent, NavbarComponent, FlightSearchComponent]
})
export class AppComponent {
  title = 'Hello World!';
  configService = inject(ConfigService);

  constructor() {
    // TODO: In a later lab, we will assure that
    //  loading did happen _before_ we use the config!
    this.configService.loadConfig();
  }
}
