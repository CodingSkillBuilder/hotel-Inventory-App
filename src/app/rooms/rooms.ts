export interface Room {
  totalRooms: number;
  availableRooms: number;
  bookedRooms: number;
}

export interface RoomDetails {
  roomNumber: number;
  roomType: string;
  amenities: string;
  price: number;
  photo: string;
  rating: number;
  checkInTime: Date;
  checkOutTime: Date;
}
