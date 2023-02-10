import { DataStorageService, IDataForm } from './../../../shared/services/data-storage.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-show-field',
  templateUrl: './show-field.component.html',
  styleUrls: ['./show-field.component.css']
})
export class ShowFieldComponent {
  @Input() fieldName: string;
  @Input() fieldContent: string;

  constructor() { }

}
