import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RoomDetails} from "../rooms";

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {

  @Input() roomDetails: RoomDetails[] = [];

  @Output() roomSelected = new EventEmitter<RoomDetails>();
  constructor() { }

  ngOnInit(): void {
  }
  selectRoom(room: RoomDetails){
    this.roomSelected.emit(room);
  }


}
