import { Component, OnInit } from '@angular/core';
import { YerbaCartService } from '../yerba-cart.service';
import { YerbaDataService } from '../yerba-data.service';
import { Yerba } from './Yerba';

@Component({
  selector: 'app-yerbas-list',
  templateUrl: './yerbas-list.component.html',
  styleUrls: ['./yerbas-list.component.scss']
})
export class YerbasListComponent implements OnInit {

  yerbas: Yerba[] = [];

  constructor(private cart: YerbaCartService,
              private yerbasDataService: YerbaDataService) {

   }

  ngOnInit(): void {
    this.yerbasDataService.getAll()
    .subscribe(data => this.yerbas = data);
  }

  addToCart(yerba: Yerba): void{

    this.cart.addToCart(yerba);
    yerba.stock -= yerba.quantity;
    yerba.quantity = 0;
  }

  maxReached(m:string): void{
    alert(m);
  }
  
}
