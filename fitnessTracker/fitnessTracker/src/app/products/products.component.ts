import { ProductsService } from './../products.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  productName = 'Harry Potter';
  //isDisabled = true;
  products: string[] = [];
  private productsSubscription = new Subscription;

  constructor(private productsService  : ProductsService) {
    // setTimeout(() =>{
    //  // this.productName = 'Dune';
    //  this.isDisabled= false;
    // }, 3000);
    
   }

   onAddProduct(form : any) {
     //this.products.push(this.productName);
     //console.log(form);
     if(form.valid){
      //this.products.push(form.value.productName);
      this.productsService.addProduct(form.value.productName);
     }
   }

   onRemoveProduct(productName : string){
     this.products = this.products.filter(p => p !== productName);
     
    }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
    this.productsSubscription = this.productsService.productsUpdated.subscribe(() => {
      this.products = this.productsService.getProducts();
    });
  }

  ngOnDestroy() {
    this.productsSubscription.unsubscribe();
  }

}
