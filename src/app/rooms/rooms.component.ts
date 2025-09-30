import {AfterViewInit, Component, Host, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {Room, RoomDetails} from "./rooms";
import {HeaderComponent} from "../header/header.component";
import {RoomsService} from "./services/rooms.service";
import {catchError, map, Observable, of, Subject, Subscription} from "rxjs";
import {HttpEventType} from "@angular/common/http";
import {ConfigService} from "../services/config.service";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  //Mind that we are adding the providers to demonstrate the @SkipSelf() & @Host() but we don't need it cause the service is provided in root.
  providers: [
    // RoomsService
  ]
})
export class RoomsComponent implements OnInit, AfterViewInit, OnDestroy {


  hotelName: string = "jet-wing";
  // roomCount: number = 5;
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

  subscription!: Subscription;

  constructor(
    //we can still use the `private roomsService: RoomsService` without @SelfSkip() and without the providers array and this is for demo
    private roomsService: RoomsService,
    // @SkipSelf() private roomsService: RoomsService
    // @Host() private roomsService: RoomsService,
    private configService: ConfigService // Just injected to demonstrate how provided type any works inside a lazy loaded module
  ) { }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }



  //Since Observable are lazy and since they are loaded through the components or some code later,
    //Let's just feel free to get it off the ngOnInit() method

  // roomDetails$ = this.roomsService.getRoomDetails$;

  //Mind that we will be updating the line above as  this because we want use the pipe in order to
      //to catch the error that might happen when doing streaming.
  roomDetails$ = this.roomsService.getRoomDetails$;
  //This version of the roomCount was just updated later
  roomCount$ = this.roomDetails$.pipe(
    // map(presentRoomDetails => {
    //   // return "cat"   <- Mind that when it comes to the map function even this will work
    //   return presentRoomDetails.length;
    // })
    map(presentRoomDetails => presentRoomDetails.length) //But this is the cleanest way to do it
  );
  error$ = this.roomsService.error$;

  roomDetails: RoomDetails[] = [];
  totalBytes: number = 0;
  ngOnInit(): void {
    console.log(this.headerComponent); // this will be undefined under current settings.
    // this.roomsService.getRoomDetails().subscribe(retrievedRoomDetails => this.roomDetails = retrievedRoomDetails);
    // this.roomsService.getRoomDetails$.subscribe(retrievedRoomDetails => this.roomDetails = retrievedRoomDetails);

    // This is just to understand a little about the Observable Data type
    this.subscription = this.stream.subscribe({
      next: data => console.log(data),
      complete: () => console.log("The streaming ended after completion"),
      error: error => console.log(error),
    });
    // A shorthand if you want just the data
    this.stream.subscribe(shortHandForJustData => console.log(shortHandForJustData));

    //Mind that this has nothing to do with the hotel inventory purposes but was placed to
    //Demo the use case Browser level HTTP calls
    this.roomsService.getPhotos().subscribe(event =>{
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log("Received sent");
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log("Received responseHeader");
          break;
        }
        case HttpEventType.DownloadProgress: {
          console.log("Here is the download progress of the response");
          this.totalBytes += event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log("Received response (The whole damn thing that you can access default HttpClient requests)");
          console.log(event.body);
          break;
        }

      }
    });
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

  updateRoom(roomId: string){
    const room: RoomDetails = {
      roomNumber: roomId,
      roomType: '(Updated)',
      amenities: '(Updated)',
      price: 18500,
      photos: 'https://picsum.photos/id/1018/600/400', // Random image
      rating: 4.6,
      checkinTime: new Date('2025-05-20T14:00:00'),
      checkoutTime: new Date('2025-05-23T11:00:00'),
    };

    this.roomsService.updateRooms(room)
      .subscribe(updatedRoomDetails => this.roomDetails = updatedRoomDetails);
  }

  deleteRoom(roomId: string){
    this.roomsService.deleteRoom(roomId)
      .subscribe(updatedRoomDetails => this.roomDetails = updatedRoomDetails);
  }

}
