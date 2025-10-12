import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  // To start working with form (to control it and to catch it we need a formGroup class)
  bookingForm!: FormGroup;

  ngOnInit(): void {
    this.bookingForm = this.formBuilder.group({
      roomId: new FormControl(''),
      guestEmail: [''],                       // Mind that `['']` is a shortcut for `new FormControl(''),`
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestName: [''],
      guestAddress: [''],
      guestCity: [''],
      guestState: [''],
      guestCountry: [''],
      guestZipCode: [''],
      guestCount: ['']
    });
  }

}
