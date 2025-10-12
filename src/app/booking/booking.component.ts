import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


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
      roomId: new FormControl({value: '2', disabled: true}),
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

  submitBookingForm(): void {
    // console.log(this.bookingForm.value);
    console.log(this.bookingForm.getRawValue());
  }
}
