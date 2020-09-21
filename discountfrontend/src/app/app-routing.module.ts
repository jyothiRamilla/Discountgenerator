import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscountComponent } from './components/discount/discount.component';
import { ShowalldiscountsComponent} from './components/showalldiscounts/showalldiscounts.component';
import {EditdiscountsComponent} from './components/editdiscounts/editdiscounts.component';
import {AlldiscountsComponent} from './components/alldiscounts/alldiscounts.component';

const routes: Routes = [
  { path:'', pathMatch:'full',redirectTo:'/creatediscount'},
  { path: 'creatediscount', component:DiscountComponent},
  { path: 'getcoupons',component:ShowalldiscountsComponent},
  {path:'detail/:id',component:EditdiscountsComponent},
  {path:'alldiscounts',component:AlldiscountsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
