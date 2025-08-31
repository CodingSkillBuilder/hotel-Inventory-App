import {Inject, Injectable} from '@angular/core';
import {Room, RoomDetails} from "../rooms";
import {APP_CONFIG_SERVICE} from "../../AppConfig/appConfig.service";
import {AppConfig} from "../../AppConfig/appConfig.interface";
import {HttpClient, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomDetails: RoomDetails[] = [
    {
      roomNumber: "100",
      roomType: "Single Room",
      amenities: "WiFi, Air Conditioning, TV, Mini Fridge",
      price: 100,
      photos: "https://picsum.photos/seed/picsum/200/300", // replace with actual image path
      rating: 4.723452345,
      checkinTime: new Date('2023-07-01T14:00:00'),
      checkoutTime: new Date('2023-07-05T12:00:00'),
    },
    {
      roomNumber: "101",
      roomType: "Double Room",
      amenities: "WiFi, Air Conditioning, TV, Mini Fridge, Balcony",
      price: 150,
      photos: "https://picsum.photos/seed/picsum/200/300", // replace with actual image path
      rating: 3.232542345,
      checkinTime: new Date('2023-07-02T14:00:00'),
      checkoutTime: new Date('2023-07-06T12:00:00')
    },
    {
      roomNumber: "102",
      roomType: "Suite",
      amenities: "WiFi, Air Conditioning, TV, Mini Fridge, Balcony, Bathtub, Kitchenette",
      price: 250,
      photos: "https://picsum.photos/seed/picsum/200/300", // replace with actual image path
      rating: 2.634252354,
      checkinTime: new Date('2023-07-03T14:00:00'),
      checkoutTime: new Date('2023-07-07T12:00:00')
    }
  ];

  constructor(
    @Inject(APP_CONFIG_SERVICE) private configuration: AppConfig,
    private httpClient: HttpClient
  ) {
    console.log(configuration.apiUrl);
  }

  getRoomDetails(): Observable<RoomDetails[]>{
    // return this.roomDetails;
    return this.httpClient.get<RoomDetails[]>('/api/rooms');
  }

  addRooms(room: RoomDetails) {

    // The diamond operator represents the data receiving format but not the sending format
    return this.httpClient.post<RoomDetails[]>('/api/rooms', room);
  }

  updateRooms(room: RoomDetails) {
    return this.httpClient.put<RoomDetails[]>(`/api/rooms/${room.roomNumber}`, room);
  }

  deleteRoom(roomId: string){
    return this.httpClient.delete<RoomDetails[]>(`/api/rooms/${roomId}`);
  }

  //Mind that this has nothing to do with the hotel inventory purposes but was placed to
  //Demo the use case Browser level HTTP calls
  getPhotos(){
    const request = new HttpRequest(
      'GET',
      `https://jsonplaceholder.typicode.com/photos`,
      {
        reportProgress: true
      }
    );

    return this.httpClient.request(request)
  }


  }
