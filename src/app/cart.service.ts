import { Injectable } from '@angular/core';
import { Product } from './products';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  list: Product[] = [];

  add(item: Product) {
    this.list.push(item);
  }

  getList(): Product[] {
    return this.list;
  }

  clear(): Product[] {
    this.list = [];
    return this.list;
  }
}
