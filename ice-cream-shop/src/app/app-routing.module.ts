import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FlavoursComponent } from './flavours/flavours.component';
import { LocationsComponent } from './locations/locations.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'flavours', component: FlavoursComponent },
  { path:'locations', component: LocationsComponent },
  { path:'contact', component: ContactComponent },
  { path:'order', component: OrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
