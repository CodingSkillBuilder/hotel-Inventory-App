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
import {Observable} from "rxjs";

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

  // COLD OBSERVABLE: starts only when someone subscribes (like ordering pizza)
  // Each subscriber gets their own independent run from the beginning
  stream = new Observable(subscribe => {
    // These are METHOD CALLS, not assignments - each next() emits one value
    subscribe.next('This is the first test value');
    subscribe.next('This is the second test value');
    subscribe.next('This is the third test value');
    // TERMINAL SIGNALS: only one of these matters, rest are ignored
    subscribe.complete(); // stream ends successfully
    subscribe.error('oops...an error !!!'); // ignored (already completed) (so mind this won't be triggered if error happens in the code...)
                                                    // but rather a situation like "if this line is reached it is an error"
                                                        // so better place it inside a if or something... (refer notion for more clarification)
  });

  constructor(
    //we can still use the `private roomsService: RoomsService` without @SelfSkip() and without the providers array and this is for demo
    // private roomsService: RoomsService
    // @SkipSelf() private roomsService: RoomsService
    @Host() private roomsService: RoomsService,
  ) { }

  roomDetails: RoomDetails[] = [];
  ngOnInit(): void {
    console.log(this.headerComponent); // this will be undefined under current settings.
    this.roomsService.getRoomDetails().subscribe(retrievedRoomDetails => this.roomDetails = retrievedRoomDetails);

    // This is just to understand a little about the Observable Data type
    this.stream.subscribe({
      next: data => console.log(data),
      complete: () => console.log("The streaming ended after completion"),
      error: error => console.log(error),
    });
    // A shorthand if you want just the data
    this.stream.subscribe(shortHandForJustData => console.log(shortHandForJustData));
  }

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  // @ViewChild(HeaderComponent, {static: true}) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerComponents!: QueryList<HeaderComponent>;
  //Mind that we can't apply the {static: true} property from here.

  toggle() {
    this.toggleMark = !this.toggleMark;
    this.title = "The toggle button was hit";
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
      roomNumber: "101",
      roomType: 'Deluxe Suite',
      amenities: 'WiFi, Air Conditioning, Mini Bar, Ocean View, Flat Screen TV',
      price: 18500,
      photos: 'https://picsum.photos/id/1018/600/400', // Random image
      rating: 4.6,
      checkinTime: new Date('2025-05-20T14:00:00'),
      checkoutTime: new Date('2025-05-23T11:00:00'),
    };

    // this.roomDetails.push(room);
    // this.roomDetails = [...this.roomDetails, room];

    this.roomsService.addRooms(room)
      .subscribe(updatedRoomDetails => this.roomDetails = updatedRoomDetails);
  }



}
