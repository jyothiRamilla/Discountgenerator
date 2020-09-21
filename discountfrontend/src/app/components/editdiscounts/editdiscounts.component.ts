import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import {Discount} from '../../model/discount';
import {DiscountService} from '../../service/discount.service';
import {FormGroup,FormBuilder,Validators} from "@angular/forms";

@Component({
  selector: 'app-editdiscounts',
  templateUrl: './editdiscounts.component.html',
  styleUrls: ['./editdiscounts.component.css']
})
export class EditdiscountsComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  discountData : Discount[];
  possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
  lengthOfCode = 8;
  text = "";
  model: Model = new Model();
  dob:Date;
  serverErrorMessages: string;
  showSucessMessage: boolean;



  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private discountService: DiscountService
  ) { }

  ngOnInit() {
    this.updateDiscount();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getDiscount(id);
    this.editForm = this.fb.group({
      dcode:[this.text,[Validators.required]],
      dpervalue:['',Validators.pattern('^[0-9]+$')],
      dinrvalue:['',Validators.pattern('^[0-9]+$')],
      dminreqvalue:['',Validators.pattern('^[0-9]+$')],
      active:[],
      startdate:[],
      enddate:[],     
    })
  }
  get myForm(){
    return this.editForm.controls;
  }
  getDiscount(id){
    this.discountService.getDiscount(id).subscribe(data =>{
      this.editForm.setValue({
        dcode:data['dcode'],
        dpervalue:data['dpervalue'],
        dinrvalue:data['dinrvalue'],
        dminreqvalue:data['dminreqvalue'],
        active:data['active'],
        startdate:data['startdate'],
        enddate:data['enddate'],
      });
    });
  }

  updateDiscount(){
    this.editForm = this.fb.group({
      dcode:[this.text],
      dpervalue:[],
      dinrvalue:[],
      dminreqvalue:[],
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
    this.updateDiscount();
    this.text=" ";
    return this.text;
  }

  onSubmit(){
    this.fun();
    this.submitted=true;
    if(!this.editForm.valid){
      console.log("form error")
      return false;
    }else{
      console.log("cool")
      let id = this.actRoute.snapshot.paramMap.get('id');
      this.text = this.editForm.value.dcode;
      //console.log(this.text)
      this.editForm.value.dcode = this.text.toLowerCase();
      this.editForm.value.active=this.model.active
      //console.log(this.editForm.value.active)
      //console.log(this.editForm.value)
      this.discountService.updateDiscount(id,this.editForm.value)
        .subscribe(res => { 
          this.showSucessMessage = true;  
          console.log('Product updated Successfully!')
        },(error) =>{
          this.serverErrorMessages = 'Coupon code already taken!!'
          console.log(error)
        })
    }
  }
}

export class Model{
  offer:string ="Percentage"; 
  active:string;
  minreq:string="Minimum"; 
  favoriteSeason: string;
  seasons: string[] = ['Active','InActive'];
}