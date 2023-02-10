import { DataStorageService } from './../../../shared/services/data-storage.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  formData: FormGroup;

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.formData = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      yearOfBirth: new FormControl('', [Validators.required]),
      expireDate: new FormControl('', [Validators.required])
    })
  }

  onSubmit(form: FormGroup) {
    this.dataStorageService.addDataForm(form.value);
    this.formData.reset();
  }

}
