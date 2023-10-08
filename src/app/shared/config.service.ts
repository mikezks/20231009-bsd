import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Config, initConfig } from './config';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private http = inject(HttpClient);
  private _config = initConfig;

  get config(): Config {
    return { ...this._config };
  }

  constructor() { }

  loadConfig() {
    this.http.get<Config>('./assets/config.json').subscribe((config) => {
      this._config = config;
    });
  }
}
