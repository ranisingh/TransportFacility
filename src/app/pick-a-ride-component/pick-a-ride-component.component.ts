import { Component, OnInit,Renderer2, ViewChild, ElementRef } from '@angular/core';
import {DataServiceService} from '../data-service.service';
import { formatDate } from '@angular/common';



@Component({
  selector: 'app-pick-a-ride-component',
  templateUrl: './pick-a-ride-component.component.html',
  styleUrls: ['./pick-a-ride-component.component.css']
})
export class PickARideComponentComponent implements OnInit {

  constructor(
private dataApi:DataServiceService,
private render:Renderer2,


  ) { 

    
  }

  
  CarData:any =[];
  currentTime = new Date();
 ngOnInit(): void {
     }


  getCarRide(){
    
     this.dataApi.CarRide().subscribe((data:{})=>{
      return this.CarData = data;
      
    })
    //this.render.addClass(this.CarDataSection.nativeElement, 'show')
    

  }

}
