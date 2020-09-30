import {Component, OnInit} from '@angular/core';
// import {AnalyticsService} from './@core/utils';
import {Router} from '@angular/router';
import {environment} from '../environments/environment';

@Component({
  selector: 'ngx-app',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }
}
