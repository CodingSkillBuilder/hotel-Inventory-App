import {Component, OnInit, Self} from '@angular/core';
import {RoomsService} from "../rooms/services/rooms.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [
    RoomsService
  ]
})
export class EmployeeComponent implements OnInit {

  employeeName: string = "SkyCruiser";

  //Mind that we are not currently using the roomsService here, and it is added for demonstration purposes.
  constructor(
    @Self() private roomsService: RoomsService
  ) { }

  ngOnInit(): void {
  }

}
