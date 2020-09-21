import { Component, OnInit,NgZone } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';

import { DiscountService } from '../../service/discount.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})


export class DiscountComponent implements OnInit {
  possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
  lengthOfCode = 8;
  text = "";
  model: Model = new Model();
  submitted = false;
  discountForm:FormGroup;
  serverErrorMessages: string;
  showSucessMessage: boolean;

  
  constructor(
    public fb: FormBuilder,
    private discountService:DiscountService
  ) { 
    this.mainForm();
  }

  ngOnInit(): void {
    

    //this.makeRandom(this.lengthOfCode, this.possible);
  }
  mainForm(){
    this.discountForm= this.fb.group({
      dcode:[this.text,[Validators.required]],
      dpervalue:['',Validators.pattern('^[0-9]+$')],
      dinrvalue:['',Validators.pattern('^[0-9]+$')],
      dminreqvalue:['',Validators.pattern('^[0-9]+$')],
      active:[],
      startdate:[],
      enddate:[],
      
    })
  }
  fun(){
    if(this.model.favoriteSeason!="Active"){
      console.log(this.model.favoriteSeason)
      this.model.active="false";
    }
    else{
      this.model.active="true";
    }
  }
  //d.toString().slice(0, 24)
  get myForm(){
    
    return this.discountForm.controls;
  }

  Link(){
    this.makeRandom(this.lengthOfCode, this.possible);
  }
  
  makeRandom(lengthOfCode: number, possible: string) {
    
    let element = <HTMLInputElement>document.getElementById("discount1")
    element.value = this.text;
    for (let i = 0; i < lengthOfCode; i++) {
      this.text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    element.value = this.text;
    this.mainForm();
    this.text=" ";
    return this.text;
  }


  onSubmit(){
    this.fun();
    this.submitted=true;
    if(!this.discountForm.valid){
      console.log("form error")
      return false;
    }else{
      console.log("cool")
      this.text = this.discountForm.value.dcode;
      //console.log(this.text)
      this.discountForm.value.dcode = this.text.toLowerCase();
      this.discountForm.value.active=this.model.active
      //console.log(this.discountForm.value.dcode)
      //console.log(this.discountForm.value.active)
      //console.log(this.discountForm.value)
      this.discountService.createDiscount(this.discountForm.value).subscribe(
        (res) => {
          this.showSucessMessage = true;
          console.log("Hii")
          console.log("Discount added Successfully!")
          this.mainForm();
          
        },(error)=>{
          this.serverErrorMessages = 'Coupon code already taken!!'
          console.log(error);
        }
      );
    }
  }
  resetForm(){

  }
}

export class Model{
  offer:string ="Percentage"; 
  active:string;
  minreq:string="Minimum"; 
  favoriteSeason: string;
  seasons: string[] = ['Active','InActive'];
}