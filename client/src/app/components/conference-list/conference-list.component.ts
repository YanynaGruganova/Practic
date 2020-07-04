import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';
@Component({
  selector: 'app-conference-list',
  templateUrl: './conference-list.component.html',
  styleUrls: ['./conference-list.component.css']
})

export class ConferenceListComponent implements OnInit {

  Conference:any = [];

  constructor(private apiService: ApiService) {
    this.readConference();
  }

  ngOnInit() {}

  readConference(){
    this.apiService.getConferences().subscribe((data) => {
      this.Conference = data;
    })
  }

  removeConference(conference, index) {
    if(window.confirm('Are you sure?')) {
      this.apiService.deleteConference(conference._id).subscribe((data) => {
          this.Conference.splice(index, 1);
        }
      )
    }
  }

}
