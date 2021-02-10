import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeoplearrayService {
  getData() {
    return  [
      {id: 1, name: 'Arnold', age: 9, gender: 'male'},
      {id: 2, name: 'Sam', age: 30, gender: 'female'},
      {id: 3, name: 'Ray', age: 32, gender: 'male'},
      {id: 4, name: 'Debra', age: 51, gender: 'female'},
      {id: 5, name: 'Rueben', age: 19, gender: 'male'},
      {id: 1, name: 'Sacka', age: 39, gender: 'male'}
     ];
  }
  constructor() { }
}
