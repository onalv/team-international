import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-job-title',
  templateUrl: './job-title.component.html',
  styleUrls: ['./job-title.component.scss']
})
export class JobTitleComponent implements OnInit, OnChanges {

  @Input() area: string;
  @Input() jobTitleSelected: string;
  @Output() inputChange = new EventEmitter<string>();
  jobTitles: string[];
  jobTitle: FormControl;

  constructor() { }

  ngOnInit() {
    this.jobTitle = new FormControl(this.jobTitleSelected, [Validators.required]);
  }

  ngOnChanges() {
    this.jobTitles = this.area === 'services'
      ? ['Manager', 'Host', 'Tuttofare', 'Waitress', 'Dining room manager']
      : ['Chef', 'Sous Chef', 'Dishwasher', 'Cook'];
  }

  changeSelect(jobTitle) {
    this.inputChange.emit(jobTitle);
    console.log(jobTitle);
  }
}
