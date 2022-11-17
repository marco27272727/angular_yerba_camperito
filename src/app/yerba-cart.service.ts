import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Yerba } from './yerbas-list/Yerba';

/**
 * maneja la logica del carrito de compra
 * 
 * */

@Injectable({
  providedIn: 'root'
})
export class YerbaCartService {

  private _cartList: Yerba[] = [];
  cartList: BehaviorSubject<Yerba[]> = new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(yerba:Yerba) {
    let item = this._cartList.find((v1) => v1.name == yerba.name);
    if(!item){
      this._cartList.push({... yerba});
    } 
    else{
      item.quantity += yerba.quantity;
    } 
    console.log(this._cartList);
    this.cartList.next(this._cartList); // equivalebte al emitt de eventos
  }

}
