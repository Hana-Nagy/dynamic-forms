import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Ifields } from '../ifields';
import { FormControlService } from '../services/form-control.service';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input()
  fields: Ifields[]
  form: FormGroup;

  fielVal: Ifields[];


  constructor(private servControl:FormControlService) { 


   }

  ngOnInit(): void {
      // this.fields.subscribe(val=> this.fielVal = val)
   this.form = this.servControl.toFormGroup(this.fields)
   console.log(this.form)
  }

}
