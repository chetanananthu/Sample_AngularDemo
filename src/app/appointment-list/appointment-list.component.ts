import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {
  newAppointmentTitle :string ="";
  newAppointmentDate :Date =new Date();
  appointments :  Appointment []=[]
 
  addAppointment(){
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate){
      let newAppoint : Appointment ={
        id:1,
        title:this.newAppointmentTitle,
        date:this.newAppointmentDate
      }
      this.appointments.push(newAppoint);
      this.newAppointmentTitle="";
      this.newAppointmentDate=new Date();
    }
    alert(this.appointments.length)
  }
}
