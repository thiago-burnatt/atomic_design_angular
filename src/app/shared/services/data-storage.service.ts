import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

export interface IDataForm {
  name: string;
  lastname: string;
  yearOfBirth: number;
  expireDate: string;
}

@Injectable()
export class DataStorageService {
  formData: IDataForm;
  updateFormData = new Subject<IDataForm>()

  constructor() {}

  addDataForm(data: IDataForm) {
    this.formData = data;
    this.updateFormData.next(this.formData);
  }
}
