import { PeoplearrayService } from './../peoplearray.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControlDirective } from '@angular/forms';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(private _peopleService : PeoplearrayService) { }

  ngOnInit(): void {
    this.people = this._peopleService.getData();
  }
  people : any = [];

  
}
