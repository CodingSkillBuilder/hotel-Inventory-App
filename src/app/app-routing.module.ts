import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeComponent} from "./employee/employee.component";
import {RoomsComponent} from "./rooms/rooms.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {RoomBookingComponent} from "./rooms/room-booking/room-booking.component";
import {AddRoomComponent} from "./rooms/add-room/add-room.component";
import {LoginComponent} from "./login/login.component";
import {LoginGuard} from "./guards/login.guard";

const routes: Routes = [
  {path: 'employee', component: EmployeeComponent, canActivate: [LoginGuard]},
  {
    path: 'rooms',
    loadChildren: () => import('./rooms/rooms.module').then(m => m.RoomsModule),
    // canActivate: [LoginGuard],   //Disabling guards temporary
    // canLoad: [LoginGuard]        //Disabling guards temporary
  },
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'booking',
    loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule),
    // canActivate: [LoginGuard]    //Disabling guards temporary
  },

  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
