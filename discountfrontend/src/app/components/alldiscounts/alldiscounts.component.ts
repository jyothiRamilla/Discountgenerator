import { Component, OnInit } from '@angular/core';
import { DiscountService} from '../../service/discount.service';

@Component({
  selector: 'app-alldiscounts',
  templateUrl: './alldiscounts.component.html',
  styleUrls: ['./alldiscounts.component.css']
})
export class AlldiscountsComponent implements OnInit {
  Discount:any = [];
  constructor(private discountService:DiscountService) { 
    this.readDiscount();
  }

  ngOnInit(): void {
  }
  readDiscount(){
    this.discountService.getDiscounts().subscribe((data)=>{
      this.Discount = data;
      console.log(this.Discount)
    })
  }
  removeDiscount(discount,index){
    this.discountService.deleteDiscount(discount._id).subscribe((data)=>{
      this.Discount.splice(index,1);
    })
  }


}
