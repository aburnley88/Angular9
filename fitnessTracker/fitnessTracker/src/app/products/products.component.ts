import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productName = 'Harry Potter';
  //isDisabled = true;
  products = ['Dune', 'Harry Potter']

  constructor() {
    // setTimeout(() =>{
    //  // this.productName = 'Dune';
    //  this.isDisabled= false;
    // }, 3000);
   }

   onAddProduct(form : any) {
     //this.products.push(this.productName);
     //console.log(form);
     if(form.valid){
      this.products.push(form.value.productName);
     }
   }

   onRemoveProduct(productName : string){
     this.products = this.products.filter(p => p !== productName);
   }

  ngOnInit(): void {
  }

}
