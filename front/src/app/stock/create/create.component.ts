import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  f = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl(10, [Validators.required]),
    qty: new FormControl(1, [Validators.required]),
  });
  constructor() {}

  ngOnInit(): void {}
}
