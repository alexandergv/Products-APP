import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/interfaces/product';
import { ProductService} from '../../services/product.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

products: product[] =  [];


  constructor(private ProductService: ProductService) { }
  ngOnInit(): void {
    this.getProducts();
    
  }

  getProducts() {
    this.ProductService.getProducts()
    .subscribe(
      res => {
        this.products = res;
        console.log(this.products);
      },
      err =>console.log(err)
    )
  }

  deleteProduct(id:string){
    this.ProductService.deleteProduct(id)
    .subscribe(
      res => {this.getProducts()},
      err => console.log(err)
    );
  }
}
