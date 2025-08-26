import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component, Host,
  OnInit,
  QueryList, SkipSelf,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {Room, RoomDetails} from "./rooms";
import {HeaderComponent} from "../header/header.component";
import {RoomsService} from "./services/rooms.service";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  //Mind that we are adding the providers to demonstrate the @SkipSelf() & @Host() but we don't need it cause the service is provided in root.
  providers: [RoomsService]
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


  constructor(
    //we can still use the `private roomsService: RoomsService` without @SelfSkip() and without the providers array and this is for demo
    // private roomsService: RoomsService
    // @SkipSelf() private roomsService: RoomsService
    @Host() private roomsService: RoomsService,
  ) { }

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  // @ViewChild(HeaderComponent, {static: true}) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerComponents!: QueryList<HeaderComponent>;
  //Mind that we can't apply the {static: true} property from here.

  toggle() {
    this.toggleMark = !this.toggleMark;
    this.title = "The toggle button was hit";
  }

  roomDetails: RoomDetails[] = [];
  ngOnInit(): void {
    console.log(this.headerComponent); // this will be undefined under current settings.
    this.roomDetails = this.roomsService.getRoomDetails();
  }

  ngAfterViewInit(): void {
    console.log(this.headerComponent);
    this.headerComponent.headerText = "Edited text from the header";
    this.headerComponents.last.headerText = "This is the last header";
  }



  selectedRoom!: RoomDetails;
  selectRoom(room: RoomDetails){
    this.selectedRoom = room;
    // console.log(room);
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
