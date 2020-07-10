import {Router} from '@angular/router';
import {ApiService} from '../../service/api.service';
import {Component, OnInit, NgZone} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormArray} from "@angular/forms";

@Component({
  selector: 'app-conference-create',
  templateUrl: './conference-create.component.html',
  styleUrls: ['./conference-create.component.css']
})
export class ConferenceCreateComponent implements OnInit {
  submitted = false;
  conferenceForm: FormGroup;
  // ConferenceProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin']
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
        // name: ['', [Validators.required]],
        name: [''],
        abbreviation: [''],
      }),
      tags: this.fb.array([
        this.fb.control('')
      ]),
      founders: this.fb.array([
        this.fb.control('')
      ]),
      timeDate: this.fb.group({
        timeStart: [''],
        dateStart: [''],
        timeEnd: [''],
        dateEnd: [''],
      }),
      locations: this.fb.group({
        country: [''],
        region: [''],
        district: [''],
        city: [''],
        address: [''],
        university: ['']
      }),
      directions: this.fb.array([
        this.fb.control('')
      ]),
      compositionOfCommittees: this.fb.array([
     this.addComposition()
      ]),
      conferenceStages: this.fb.array([
        this.addStages()
      ]),
      termsOfParticipation: this.fb.array([
        this.fb.control('')
      ]),
      sections: this.fb.array([
        this.addSection()
      ]),
      requirements: this.fb.group({
        requirement: ['']
      }),
    })
  }


  // Choose designation with select dropdown
  // updateProfile(e) {
  //   this.conferenceForm.get('designation').setValue(e, {
  //     onlySelf: true
  //   })
  // }

  // Getter to access form control
  // get myForm() {
  //   return this.conferenceForm.controls;
  // }

  get tags() {
    return this.conferenceForm.get('tags') as FormArray;
  }
  addTag() {
    this.tags.push(this.fb.control(''));
  }

  get founders() {
    return this.conferenceForm.get('founders') as FormArray;
  }
  addFounder() {
    this.founders.push(this.fb.control(''));
  }

  get directions() {
    return this.conferenceForm.get('directions') as FormArray;
  }
  addDirection() {
    this.directions.push(this.fb.control(''));
  }

  get compositionOfCommittees() {
    return this.conferenceForm.get('compositionOfCommittees') as FormArray;
  }
  addComposition(){
    //debugger
    return this.fb.group({
      surname: [''],
      name: [''],
      patronymic: [''],
      email: [''],
      workPlace: [''],
      position: [''],
      role: [''],
    })
  }
  addCompositionOfCommittees() {
    this.compositionOfCommittees.push(this.addComposition());
  }

  get conferenceStages() {
    return this.conferenceForm.get('conferenceStages') as FormArray;
  }
  addStages(){
    return this.fb.group({
      nameStage: [''],
      dateStart: [''],
      timeStart: [''],
      dateEnd: [''],
      timeEnd: [''],
    })
  }
  addConferenceStages() {
    this.conferenceStages.push(this.addStages());
  }

  get termsOfParticipation() {
    return this.conferenceForm.get('termsOfParticipation') as FormArray;
  }
  addTermsOfParticipation() {
    this.termsOfParticipation.push(this.fb.control(''));
  }

  get sections() {
    return this.conferenceForm.get('sections') as FormArray;
  }
  addSection(){
    return this.fb.group({
      number: [''],
      nameSection: [''],
      founders: [''],
      dateStart: [''],
      timeStart: [''],
      dateEnd: [''],
      timeEnd: [''],
      composition: [''],
    })
  }
  addSections() {
    this.sections.push(this.addSection());
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
