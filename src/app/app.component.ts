import { Component, inject } from '@angular/core';
import { NavbarComponent } from './core/ui/navbar/navbar.component';
import { SidebarComponent } from './core/ui/sidebar/sidebar.component';
import { FlightSearchComponent } from "./flight-booking/features/flight-search/flight-search.component";
import { ConfigService } from './shared/config/config.service';
import { NextFlightsModule } from './next-flights/next-flights.module';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    SidebarComponent,
    NavbarComponent,
    FlightSearchComponent,
    NextFlightsModule
  ],
  template: `
    <div class="wrapper">
      <div class="sidebar" data-color="white" data-active-color="danger">
        <app-sidebar-cmp></app-sidebar-cmp>
      </div>

      <div class="main-panel">
        <app-navbar-cmp></app-navbar-cmp>

        <div class="content">

          <app-flight-search />

          <app-next-flights />

        </div>

        <footer></footer>
      </div>
    </div>
  `
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
