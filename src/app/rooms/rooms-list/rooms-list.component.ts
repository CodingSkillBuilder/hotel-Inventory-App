import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {RoomDetails} from "../rooms";

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy {

  @Input() roomDetails: RoomDetails[] = [];

  @Input() title!: string;
  // @Input() title: string = "";

  @Input() thisType: string = "This is a cool room";

  @Output() roomSelected = new EventEmitter<RoomDetails>();

  @Output() emmitSelectedRoomId = new EventEmitter<string>();

  @Output() emmitSelectedRoomIdForDeletion = new EventEmitter<string>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  ngOnInit(): void {
  }
  selectRoom(room: RoomDetails){
    this.roomSelected.emit(room);
  }

  updateRoom(roomId: string){
    this.emmitSelectedRoomId.emit(roomId);
  }

  deleteRoom(roomId: string){
    this.emmitSelectedRoomIdForDeletion.emit(roomId)
  }

  ngOnDestroy(): void {
    console.log("rooms list destroyed");
  }

}
