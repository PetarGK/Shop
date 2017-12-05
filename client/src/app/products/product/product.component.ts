import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input('product') 
  product: Product;

  @Output('editProduct') 
  editProduct = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onEditProduct(): void {
    this.editProduct.emit();
  }

}
