import { Injectable } from '@angular/core';
import { Detail } from "src/app/home/sample"
import { Trend } from "src/app/trending/sample.trend"


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  public getproducts()
  {
    let product : Detail[]=[
    {
      img:"d1.png",
      name:"WE SHIP FROM OUR OAKVILLE ONTARIO FACILITY TO ANYWHERE IN CANADAAbout our shipping & returns policy.",

    },
    {
      img:"d4.png",
      name:"GUARANTEED 5 DAY ORDER COMPLETION in 5 business days! Place your order today and it will ship from our Oakville, ON facility by March 15. There may be delivery delays, read more on Covid-19 update.",

    },
    {
      img:"d2.png",
      name:"UNBEATABLE PRICE GUARANTEE We won't just match it, we'll beat it! If you find a lower price than what we have quoted, we'll beat it by 5%.",

    }
    ]
    return product;
  }

  public getTrend()
  {
    let product : Trend[]=[
    {
      img:"t1.jfif",
      name:"Sportsman Knit 12 Toque",
      id:"myImage1"
    },
    {
      img:"t2.jfif",
      name:"Sportsman Knit 12 Toque",
      id:"myImage2"
    },
    {
      img:"t3.jfif",
      name:"CORE365 Men's Techno Lite Three-Layer Knit Tech-Shell.",
      id:"myImage3"
    },
    {
      img:"t4.jfif",
      name:"Independent Adult Midweight Crewneck Sweatshirt",
      id:"myImage4"
    },
    ]
    return product;
  }

}

