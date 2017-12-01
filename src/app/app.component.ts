import { Component } from '@angular/core';
import { Angulartics2 } from 'angulartics2';
// import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

import { environment } from '../environments/environment';

@Component({
  selector: 'pla-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pla';

  constructor(
    private angulartics2: Angulartics2,
    // private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics
  ) {
    if (!environment.production) {
      this.angulartics2.developerMode(true);
    }
  }
}
