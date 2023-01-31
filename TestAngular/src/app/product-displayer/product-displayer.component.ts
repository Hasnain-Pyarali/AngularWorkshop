import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-displayer',
  templateUrl: './product-displayer.component.html',
  styleUrls: ['./product-displayer.component.css']
})
export class ProductDisplayerComponent implements OnInit {

  constructor() { }

  @Input() products! : Product[];

  ngOnInit(): void {
  }

}
