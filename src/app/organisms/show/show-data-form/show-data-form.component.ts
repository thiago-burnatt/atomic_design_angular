import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { DataStorageService, IDataForm } from 'src/app/shared/services/data-storage.service';

@Component({
  selector: 'app-show-data-form',
  templateUrl: './show-data-form.component.html',
  styleUrls: ['./show-data-form.component.css']
})
export class ShowDataFormComponent implements OnInit {
  dataForm: IDataForm;

  constructor( private datastorageService: DataStorageService ) { }

  ngOnInit(): void {
    this.datastorageService.updateFormData.subscribe((data) => {
      this.dataForm = data;
    })
  }

}
