import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {
  @Input() labelContent: string;
  @Input() inputType: string;
  @Input() inputID: string;
  @Input() inputName: string;
  @Input() control: FormControl;


  constructor() { }

  ngOnInit(): void {
  }


}
