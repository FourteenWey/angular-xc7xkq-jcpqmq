import { Component } from '@angular/core';

//导入数据源
import { products } from '../products';

//注解声明组件
//selector : 声明组件ID
//teplateUrl : 声明模板
//styleUrls : 声明样式
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  //数据源赋值到products对象上
  products = products;
  //定义方法
  share() {
    window.alert('The product has been shared!');
  }
  //定义方法
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
