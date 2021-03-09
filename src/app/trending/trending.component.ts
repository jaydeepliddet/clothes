import { Component, OnInit } from '@angular/core';
import {Trend} from './sample.trend'
import {ProductService} from "src/app/service/product.service"

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  trend:Trend[]=[]

  constructor(private productservice:ProductService) { }

  ngOnInit(): void {
    this.gettrend()
  }

  gettrend()
  {
    this.trend=this.productservice.getTrend();
  }

}
