import { PeoplearrayService } from './peoplearray.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DependencyInjectionExample';
  people : any[] = [];

  constructor (private _peopleService : PeoplearrayService) {
   
  }
  ngOnInit(){
    this.people = this._peopleService.getData();
  }
}
