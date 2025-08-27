import {Inject, Injectable} from '@angular/core';
import {RoomDetails} from "../rooms";
import {APP_CONFIG_SERVICE} from "../../AppConfig/appConfig.service";
import {AppConfig} from "../../AppConfig/appConfig.interface";

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomDetails: RoomDetails[] = [
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

  constructor(
    @Inject(APP_CONFIG_SERVICE) private configuration: AppConfig
  ) {
    console.log(configuration.apiUrl);
  }

  getRoomDetails(): RoomDetails[]{
    return this.roomDetails;
  }
}
