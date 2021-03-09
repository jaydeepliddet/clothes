import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ProductService} from "src/app/service/product.service"
import {Detail} from "./sample"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  product:Detail[]=[]

  constructor(private productservice:ProductService) { }

  ngOnInit(): void {

    this.getDetail();
  }

  getDetail()
  {
    this.product=this.productservice.getproducts();

  }



}
