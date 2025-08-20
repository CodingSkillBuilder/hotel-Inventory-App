import {AfterContentInit, Component, ContentChild, OnInit} from '@angular/core';
import {EmployeeComponent} from "../employee/employee.component";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, AfterContentInit {

  // Mind that there are no any shit like {static: true} and
  // this attribute can be only accessed from the `AfterContentInit` life cycle hook.
  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log(this.employee.employeeName);
    this.employee.employeeName = "Changed from SkyCruiser to TheSkyCruiser.";
  }

}
