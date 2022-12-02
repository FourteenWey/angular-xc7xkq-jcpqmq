import { Component, OnInit } from '@angular/core';
//每个组件都有一个自己的ActivatedRoute 类似于NavigationControler负责操纵路由跳转
import { ActivatedRoute } from '@angular/router';
//引入数据类和数据源
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  //说明product可能有值可能为空
  product: Product | undefined;

  //依赖注入
  constructor(private route: ActivatedRoute) {}
  //初始化
  ngOnInit(): void {
    //从route中取值操作snapshot对象从中取paramMap
    const params = this.route.snapshot.paramMap;
    //从map中取出传入的参数
    const productId = Number(params.get('productId'));
    //这是一个TS的语法 在list中找寻同ID的数据
    this.product = products.find((product) => product.id === productId);
  }
}
