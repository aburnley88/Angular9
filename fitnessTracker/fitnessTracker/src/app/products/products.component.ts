import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productName = 'Harry Potter';
  isDisabled = true;
  products = ['Dune', 'Harry Potter']

  constructor() {
    setTimeout(() =>{
     // this.productName = 'Dune';
     this.isDisabled= false;
    }, 3000);
   }

   onAddProduct() {
     this.products.push(this.productName);

   }

  ngOnInit(): void {
  }

}
