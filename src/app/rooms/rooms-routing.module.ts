import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "../login/login.component";
import {RoomsComponent} from "./rooms.component";
import {AddRoomComponent} from "./add-room/add-room.component";
import {RoomBookingComponent} from "./room-booking/room-booking.component";

const routes: Routes = [
  {path: 'rooms', component: RoomsComponent},
  {path: 'rooms/add', component: AddRoomComponent},
  {path: `rooms/:id`, component: RoomBookingComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule {

}
