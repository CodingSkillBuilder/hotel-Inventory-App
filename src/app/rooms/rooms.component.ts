import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {Room, RoomDetails} from "./rooms";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],

})
export class RoomsComponent implements OnInit, AfterViewInit {


  hotelName: string = "jet-wing";
  roomCount: number = 5;
  toggleMark: boolean = false;
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  }
  title:string = "This is the title";


  constructor() { }


  @ViewChild(HeaderComponent, {static: true}) headerComponent!: HeaderComponent;


  toggle() {
    this.toggleMark = !this.toggleMark;
    this.title = "The toggle button was hit";
  }

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
    console.log(this.headerComponent);
  }

  ngAfterViewInit(): void {
    console.log(this.headerComponent);
  }



  selectedRoom!: RoomDetails;
  selectRoom(room: RoomDetails){
    this.selectedRoom = room;
  }

  addRoom(){
    const room: RoomDetails = {
      roomNumber: 101,
      roomType: 'Deluxe Suite',
      amenities: 'WiFi, Air Conditioning, Mini Bar, Ocean View, Flat Screen TV',
      price: 18500,
      photo: 'https://picsum.photos/id/1018/600/400', // Random image
      rating: 4.6,
      checkInTime: new Date('2025-05-20T14:00:00'),
      checkOutTime: new Date('2025-05-23T11:00:00'),
    };

    // this.roomDetails.push(room);
    this.roomDetails = [...this.roomDetails, room];
  }



}
