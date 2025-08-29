export interface Room {
  totalRooms: number;
  availableRooms: number;
  bookedRooms: number;
}

export interface RoomDetails {
  roomNumber: string;
  roomType: string;
  amenities: string;
  price: number;
  photos: string;
  rating: number;
  checkinTime: Date;
  checkoutTime: Date;
}
