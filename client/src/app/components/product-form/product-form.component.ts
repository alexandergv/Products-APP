import { Component, OnInit } from '@angular/core';
import { product} from '../../interfaces/product';
import { ProductService} from '../../services/product.service';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product: product = {
    name: '',
    price: 0,
    description: ''

  }

    edit: Boolean = false;

  constructor(private ProductService: ProductService,
    private Router: Router, private ActivatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    const params = this.ActivatedRoute.snapshot.queryParams;
    if(params){
      this.ProductService.getProduct(params.productID)
      .subscribe(
        res =>{
          console.log(res);
          this.product = res;
          console.log(this.product._id);
          this.edit = true;
        },
        err => console.log(err)
      );
    };
  }

  submitProduct() {
    this.ProductService.createProduct(this.product)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
    this.Router.navigate(['/']);
  }

  updateProduct() {
    this.ProductService.editProduct(this.product._id, this.product)
    .subscribe(res => { console.log(res);
    this.Router.navigate(['/']);
    },
      err => console.log(err))
  };

}
