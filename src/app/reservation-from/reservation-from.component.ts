import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reservation-from',
  templateUrl: './reservation-from.component.html',
  styleUrls: ['./reservation-from.component.css']
})

export class ReservationFromComponent {
  reservationForm :FormGroup =new FormGroup({});

  onSubmit(){
    
  }
}
