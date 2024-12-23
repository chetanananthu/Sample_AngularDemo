import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl="https://fd554605-4f1c-47d0-b8fe-6a1531588da5.mock.pstmn.io"
  private reservations:Reservation[]=[];

  constructor(private http:HttpClient){}

  //CRUD

  getReservations():Observable<Reservation[]>{
    return this.http.get<Reservation[]>(this.apiUrl+"/reservations");
  }

  getReservation(id:string):Reservation | undefined{
    return this.reservations.find(res=>res.id===id);
  }

  addReservation(reservation:Reservation):void{
    reservation.id=Date.now().toString();
    this.reservations.push(reservation);
  }

deleteReservation(id:string):void{
  let index=this.reservations.findIndex(res=>res.id===id);
  this.reservations.splice(index,1);
}

updateReservation(id:string,updateReservation:Reservation):void{
  let index=this.reservations.findIndex(res=>res.id===id);
  this.reservations[index]=updateReservation;
}

}
