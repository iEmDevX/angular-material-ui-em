import { Component } from '@angular/core';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { Configs } from './constants/configs';
import { Globals } from './commons/globals';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loadingConfig = Configs.LOADING_CONFIG;

  constructor(public globals: Globals) { }
}
