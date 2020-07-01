import { Component } from '@angular/core';
import {AuthenticationService} from "../authentication.service";

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  constructor(public auth: AuthenticationService) {}
}
