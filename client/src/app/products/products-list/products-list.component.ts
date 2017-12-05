import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {
  products: Product[];

  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit() {
    this.getProducts()
  }

  getProducts(): void {
    this.productsService.getProducts()
    .subscribe(products => this.products = products);
  }  

  onEditProduct(event): void {
    this.router.navigate([
      { 
        path: 'products/details',
        outlets: { productPopup: [ 'details', 1 ] }
      }
    ]); 
  }

}
