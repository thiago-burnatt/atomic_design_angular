import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LabelComponent } from './atoms/labels/label/label.component';
import { InputComponent } from './atoms/inputs/input/input.component';
import { FieldComponent } from './molecules/fields/field/field.component';
import { RegisterFormComponent } from './organisms/forms/register-form/register-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenericBtnComponent } from './atoms/buttons/generic-btn/generic-btn.component';
import { ShowDataFormComponent } from './organisms/show/show-data-form/show-data-form.component';
import { ShowFieldComponent } from './atoms/fields/show-field/show-field.component';
import { DataStorageService } from './shared/services/data-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    LabelComponent,
    InputComponent,
    FieldComponent,
    RegisterFormComponent,
    GenericBtnComponent,
    ShowDataFormComponent,
    ShowFieldComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
