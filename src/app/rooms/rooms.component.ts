import { Component, OnInit } from '@angular/core';
import {Room, RoomDetails} from "./rooms";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {


  hotelName: string = "jet-wing";
  roomCount: number = 5;
  toggleMark: boolean = false;
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  }



  toggle() {
    this.toggleMark = !this.toggleMark;
  }

  constructor() { }

  roomDetails: RoomDetails[] = [];
  ngOnInit(): void {
    this.roomDetails = [
      {
        roomNumber: 100,
        roomType: "Single Room",
        amenities: "WiFi, Air Conditioning, TV, Mini Fridge",
        price: 100,
        photo: "https://picsum.photos/seed/picsum/200/300", // replace with actual image path
        rating: 4.723452345,
        checkInTime: new Date('2023-07-01T14:00:00'),
        checkOutTime: new Date('2023-07-05T12:00:00')
      },
      {
        roomNumber: 101,
        roomType: "Double Room",
        amenities: "WiFi, Air Conditioning, TV, Mini Fridge, Balcony",
        price: 150,
        photo: "https://picsum.photos/seed/picsum/200/300", // replace with actual image path
        rating: 3.232542345,
        checkInTime: new Date('2023-07-02T14:00:00'),
        checkOutTime: new Date('2023-07-06T12:00:00')
      },
      {
        roomNumber: 102,
        roomType: "Suite",
        amenities: "WiFi, Air Conditioning, TV, Mini Fridge, Balcony, Bathtub, Kitchenette",
        price: 250,
        photo: "https://picsum.photos/seed/picsum/200/300", // replace with actual image path
        rating: 2.634252354,
        checkInTime: new Date('2023-07-03T14:00:00'),
        checkOutTime: new Date('2023-07-07T12:00:00')
      }
    ];
  }

}
