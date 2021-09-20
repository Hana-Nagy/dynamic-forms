import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DropDownC } from '../dropDownC';
import { Ifields } from '../ifields';
import { TextBoxC } from '../textBoxC';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  getPrsnInfoField() {
    const fields: Ifields[] = [
      new DropDownC({
        key: 'gender',
        label: 'Gender',
        order: 3,
        options: [
          { key: 'm', value: 'male' },
          { key: 'f', value: 'female' },
        ],
      }),
      new TextBoxC({
        key: 'email',
        label: 'email',
        value:'',
        placeHolder: 'enter your email',
        order: 1,
        required: true,
        type: 'textbox',
      }),

      new TextBoxC({
        key: 'password',
        label: 'password',
        value:'',
        placeHolder: 'enter your password',
        order: 2,
        required: true,
        type:'password'
      }),
    ];

    return of(fields.sort((a, b) => a.order - b.order));
  }
  constructor() {}
}
