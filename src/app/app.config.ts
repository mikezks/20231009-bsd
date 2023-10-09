import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { NextFlightsModule } from './next-flights/next-flights.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    importProvidersFrom(NextFlightsModule),
    importProvidersFrom(MatDialogModule)
  ]
};
