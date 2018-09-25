import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-job-title',
  templateUrl: './job-title.component.html',
  styleUrls: ['./job-title.component.scss']
})
export class JobTitleComponent implements OnInit, OnChanges {

  @Input() area: string;
  jobTitles: string[];
  jobTitle: FormControl;

  constructor() { }

  ngOnInit() {
    this.jobTitle = new FormControl('', [Validators.required]);
  }

  ngOnChanges() {
    this.jobTitles = this.area === 'services'
      ? ['Manager', 'Host', 'Tuttofare', 'Waitress', 'Dining room manager']
      : ['Chef', 'Sous Chef', 'Dishwasher', 'Cook'];
  }
}
