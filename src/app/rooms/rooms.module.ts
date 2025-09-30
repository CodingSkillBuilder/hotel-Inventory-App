import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import {RoomsComponent} from "./rooms.component";
import {RoomsListComponent} from "./rooms-list/rooms-list.component";
import {RoomBookingComponent} from "./room-booking/room-booking.component";
import {AddRoomComponent} from "./add-room/add-room.component";
import {FormsModule} from "@angular/forms";
import {HeaderModule} from "../header/header.module";
import {RouteConfigToken} from "../services/routeConfig.service";


@NgModule({
  declarations: [
    RoomsComponent,
    RoomsListComponent,
    RoomBookingComponent,
    AddRoomComponent,
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    FormsModule,
    HeaderModule
  ],
  providers: [
    {
      provide: RouteConfigToken,
      useValue: {
        title: "This is an example value for demonstrating " +
          "that it can be set differently when it comes to lazy loading component, " +
          "this is from rooms module"
      }
    }
  ]
})
export class RoomsModule {


}
