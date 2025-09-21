import { Component, OnInit } from '@angular/core';
import {RoomDetails} from "../rooms";
import {RoomsService} from "../services/rooms.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss']
})
export class AddRoomComponent implements OnInit {

  constructor(
    private roomService: RoomsService
  ) { }

  rooms: RoomDetails = {
    roomNumber: "",
    roomType: "",
    amenities: "",
    price: 0,
    photos: "",
    checkinTime: new Date(),
    checkoutTime: new Date(),
    rating: 0
  }

  showMessage: boolean = false;
  messageAfterAdding!: string;

  ngOnInit(): void {
  }

  addRoom(roomsForm: NgForm): void {
    this.showMessage = true;
    this.roomService.addRooms(this.rooms).subscribe(
      data => {this.messageAfterAdding = "Done :)"}
    )
    // roomsForm.reset();
    roomsForm.resetForm({
        roomNumber: "",
        roomType: "",
        amenities: "",
        price: 0,
        photos: "Hey hey that was a nice photo :))",
        checkinTime: new Date(),
        checkoutTime: new Date(),
        rating: 0
      }
    )
  }

}
