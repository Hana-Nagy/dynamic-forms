import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Ifields } from './ifields';
import { FormService } from './services/form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamicForm';

  fields$: Observable<Ifields[]> ;
  constructor(serv :FormService){
this.fields$ = serv.getPrsnInfoField()
  }
}
