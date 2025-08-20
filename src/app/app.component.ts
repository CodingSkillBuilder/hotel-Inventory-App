import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {RoomsComponent} from "./rooms/rooms.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements
  OnInit,
  AfterViewInit{

  title: string = 'hotelInventoryApp';
  role: string = 'admin';

  // @ViewChild('user', {read: ViewContainerRef, static: true}) vcr!: ViewContainerRef;
  // @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;
  @ViewChild('name') name!: ElementRef;

  ngOnInit(): void {
    // const componentRef = this.vcr.createComponent(RoomsComponent);
  }

  ngAfterViewInit(): void {
    // const componentRef = this.vcr.createComponent(RoomsComponent);
    // componentRef.instance.roomCount = 50;
    console.log(this.name.nativeElement.innerText);
  }


}
