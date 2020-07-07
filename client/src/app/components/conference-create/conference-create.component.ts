import {Router} from '@angular/router';
import {ApiService} from '../../service/api.service';
import {Component, OnInit, NgZone} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-conference-create',
  templateUrl: './conference-create.component.html',
  styleUrls: ['./conference-create.component.css']
})
export class ConferenceCreateComponent implements OnInit {
  submitted = false;
  conferenceForm: FormGroup;
  ConferenceProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin']
  title: string = 'Some title'

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }

  ngOnInit() {
  }

  mainForm() {

    this.conferenceForm = this.fb.group({
      title: this.fb.group({
        name: ['', [Validators.required]],
        abbreviation: ['', [Validators.required]],
        tags: [''],
      }),
      founders: this.fb.array([
        this.fb.group({
          fullname: ['']
        })]),

      timeDate: this.fb.group({
        timeStart: ['', [Validators.required]],
        dateStart: ['', [Validators.required]],
        timeEnd: ['', [Validators.required]],
        dateEnd: ['', [Validators.required]],
      }),
      locations: this.fb.group({
        country: ['', [Validators.required]],
        region: [''],
        district: [''],
        city: ['', [Validators.required]],
        address: ['', [Validators.required]],
        university: ['', [Validators.required]]
      }),
      directions: this.fb.array([
        this.fb.group({
          direction: ['']
        })]),
      compositionOfCommittees: this.fb.group({
        surname: ['', [Validators.required]],
        name: ['', [Validators.required]],
        patronymic: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
        workPlace: ['', [Validators.required]],
        position: ['', [Validators.required]],
        role: ['']
      }),
      conferenceStages: this.fb.group({
        title: ['', [Validators.required]],
        timeStart: ['', [Validators.required]],
        dateStart: ['', [Validators.required]],
        timeEnd: ['', [Validators.required]],
        dateEnd: ['', [Validators.required]]
      }),
      termsOfParticipation: this.fb.array([
        this.fb.group({
          term: ['']
        })]),
      sections: this.fb.group({
        section: this.fb.array([
          this.fb.group({
            number: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
            title: ['', [Validators.required]],
            founders: this.fb.array([
              this.fb.group({
                fullname: ['']
              })]),
            timeStart: ['', [Validators.required]],
            dateStart: ['', [Validators.required]],
            timeEnd: ['', [Validators.required]],
            dateEnd: ['', [Validators.required]],
            compositionOfSection: ['', [Validators.required]]
          })
        ])
      }),
      requirements: ['', [Validators.required]],
      _id: ['']
    })
  }

  // Choose designation with select dropdown
  updateProfile(e) {
    this.conferenceForm.get('designation').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm() {
    return this.conferenceForm.controls;
  }

  createConference() {
    this.submitted = true;
    // if (!this.conferenceForm.valid) {
    //   return false;
    // }
    this.apiService.createConference(this.conferenceForm.value).subscribe(
      (res) => {
        console.log(res)
        this.router.navigate(['conferences-list'])
      }, (error) => {
        console.log(error);
      });
  }
}
