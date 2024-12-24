import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl="https://fd554605-4f1c-47d0-b8fe-6a1531588da5.mock.pstmn.io"  //this is from postman mock url
  private reservations:Reservation[]=[];

  constructor(private http:HttpClient){}

  //CRUD

  getReservations():Observable<Reservation[]>{
    return this.http.get<Reservation[]>(this.apiUrl+"/reservations");
  }

  getReservation(id:string): Observable<Reservation>{
    return this.http.get<Reservation>(this.apiUrl+"/reservations/"+id);
  }

  addReservation(reservation:Reservation):Observable<void>{
    return this.http.post<void>(this.apiUrl+"/reservations",reservation);
  }

deleteReservation(id:string):Observable<void>{
 return this.http.delete<void>(this.apiUrl+"/reservations/"+id);
}

updateReservation(id:string,updateReservation:Reservation):Observable<void>{
  return this.http.put<void>(this.apiUrl+"/reservations/"+id,updateReservation);
}

}
