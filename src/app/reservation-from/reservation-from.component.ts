import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reservation-from',
  templateUrl: './reservation-from.component.html',
  styleUrls: ['./reservation-from.component.css']
})

export class ReservationFromComponent implements OnInit{
  
  reservationForm :FormGroup =new FormGroup({});
  
  constructor(private FormBuilder:FormBuilder){

  }
  ngOnInit(): void {
    this.reservationForm=this.FormBuilder.group({
    checkInDate: ['',Validators.required],
    checkOutDate: ['',Validators.required],
    guestName: ['',Validators.required],
    guestEmail: ['',[Validators.required,Validators.email]],
    roomNumber: ['',Validators.required]
    })
  }
  

  onSubmit(){
    if(this.reservationForm.valid){
      console.log("valid");
    }
  }
}
