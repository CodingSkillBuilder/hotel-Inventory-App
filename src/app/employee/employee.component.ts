import {Component, OnInit, Self} from '@angular/core';
import {RoomsService} from "../rooms/services/rooms.service";
import {ConfigService} from "../services/config.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [
    //Uncomment the line below if you want to use the service with the @Self() decorator
    // RoomsService
  ]
})
export class EmployeeComponent implements OnInit {

  employeeName: string = "SkyCruiser";

  //Mind that we are not currently using the roomsService here, and it is added for demonstration purposes.
  constructor(
    // @Self() private roomsService: RoomsService
    private configService: ConfigService, // Just injected to demonstrate how provided type any works inside a lazy loaded module
  ) { }

  ngOnInit(): void {
  }

}
