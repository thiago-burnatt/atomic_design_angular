import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  confirmBtnContent = 'Confirmar';
  cancelBtnComponent = 'Cancelar';
  labelContent = 'Nome da label';
  inputType = 'text';
  inputID = 'teste';
  inputName = 'teste';

}
