import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private auth: AuthenticationService) {}
  user? = this.getUser();
  getUser() {
    return this.auth.getUserDetails();
  }
}
