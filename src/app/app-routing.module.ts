import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeComponent} from "./employee/employee.component";
import {RoomsComponent} from "./rooms/rooms.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {RoomBookingComponent} from "./rooms/room-booking/room-booking.component";

const routes: Routes = [
  {path: 'employee', component: EmployeeComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: '', redirectTo: 'rooms', pathMatch: 'full'},
  {path: `rooms/:id`, component: RoomBookingComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
