import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  //需要传入的参数
  @Input()
  public product!: Product;

  constructor() {}

  ngOnInit(): void {}
  //暴露出的方法
  @Output()
  public notify = new EventEmitter();
}
