import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-btn',
  templateUrl: './generic-btn.component.html',
  styleUrls: ['./generic-btn.component.css']
})
export class GenericBtnComponent implements OnInit {
  @Input() btnName: string;
  @Input() class: string;
  @Input() type: string;
  @Input() disabled: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
