import { Component, OnInit } from '@angular/core';
import { YerbaCartService } from '../yerba-cart.service';
import { Yerba } from '../yerbas-list/Yerba';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList: Yerba[] = [];
  
  constructor(private cart: YerbaCartService) { 
    cart.cartList.subscribe(c => this.cartList = c);
  }

  ngOnInit(): void{
  }

  maxReached(m:string){
    alert(m);
  }
}
