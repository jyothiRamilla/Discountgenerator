import { Component, OnInit } from '@angular/core';
import { DiscountService } from '../../service/discount.service';

@Component({
  selector: 'app-showalldiscounts',
  templateUrl: './showalldiscounts.component.html',
  styleUrls: ['./showalldiscounts.component.css']
})
export class ShowalldiscountsComponent implements OnInit {

  Discount:any = [];


  constructor(private discountService:DiscountService) {
    this.readDiscount();
   }

  ngOnInit(): void {
  }

  readDiscount(){
    this.discountService.getDiscounts().subscribe((data)=>{
      this.Discount = data;
      console.log(this.Discount[1].active)
    })
  }
  removeDiscount(discount,index){
    this.discountService.deleteDiscount(discount._id).subscribe((data)=>{
      this.Discount.splice(index,1);
    })
  }

}
