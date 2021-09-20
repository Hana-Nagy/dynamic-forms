import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Ifields } from '../ifields';

@Component({
  selector: 'dynamic-form-fields',
  templateUrl: './dynamic-form-fields.component.html',
  styleUrls: ['./dynamic-form-fields.component.scss']
})
export class DynamicFormFieldsComponent implements OnInit {
@Input() field: Ifields
@Input() form: FormGroup
  constructor() { }

  ngOnInit(): void {
    console.log(this.form)
  }
get InValid(){
 return this.form.controls[this.field.key].valid
}

}
