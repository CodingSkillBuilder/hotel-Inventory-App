import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.scss']
})
export class RoomBookingComponent implements OnInit {

  constructor(
    private router: ActivatedRoute,
  ) { }

  // id$: Observable<string> = this.router.params.pipe(
  //   map(roomParams => roomParams['id'])
  // );

  id$: Observable<string | null> = this.router.paramMap.pipe(
    map(
      roomParameters => roomParameters.get("id")
    )
  )

  // currentRoomId!: string;
  ngOnInit(): void {
    // this.router.params.subscribe(
    //   params => this.currentRoomId = params['id']
    // )

    // this.currentRoomId = this.router.snapshot.params['id'];


  }

}
