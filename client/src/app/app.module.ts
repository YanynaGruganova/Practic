import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ApiService } from './service/api.service';



import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { ConferenceCreateComponent } from './components/conference-create/conference-create.component';
import { ConferenceEditComponent } from './components/conference-edit/conference-edit.component';
import { ConferenceListComponent } from './components/conference-list/conference-list.component';
//import { MatDatepickerModule } from "@angular/material/datepicker";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: '', pathMatch: 'full', redirectTo: 'conference-create' },
  { path: 'conference-create', component: ConferenceCreateComponent },
  { path: 'conference-edit/:id', component: ConferenceEditComponent },
  { path: 'conferences-list', component: ConferenceListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ConferenceCreateComponent,
    ConferenceEditComponent,
    ConferenceListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
    //MatDatepickerModule,
  ],
  providers: [
    AuthenticationService,
    AuthGuardService,
    [ApiService]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
