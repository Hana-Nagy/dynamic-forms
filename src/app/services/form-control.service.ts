import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ifields } from '../ifields';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {

toFormGroup(fields :Ifields[]){
  const group :any = {}
  fields.forEach(field=> {
   group[field.key] =   field.required? new FormControl(field.placeHolder ||''
     ,Validators.required):new FormControl(field.placeHolder ||'') ;
  })

  return new FormGroup(group)
}


  constructor() { }
}
