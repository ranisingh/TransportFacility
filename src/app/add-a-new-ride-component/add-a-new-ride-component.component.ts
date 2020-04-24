import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';
import {DataServiceService} from  '../data-service.service' 
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-add-a-new-ride-component',
  templateUrl: './add-a-new-ride-component.component.html',
  styleUrls: ['./add-a-new-ride-component.component.css']
})
export class AddANewRideComponentComponent implements OnInit {
 

  constructor(private formBuilder: FormBuilder,
     private dataApi:DataServiceService,
    private https:HttpClient) { }


  AddrideForm: FormGroup;
  submitted = false;
  showMsg: boolean = false;
  IsEmpIdExit:boolean=false;
  @ViewChild('myForm') formValues; 

  ngOnInit(): void {


    this.AddrideForm = new FormGroup({
      empid: new FormControl('',[Validators.required]),
      vechileType: new FormControl('',[Validators.required]),
      vechileno: new FormControl('',[Validators.required]),
      vechileSeat: new FormControl('',[Validators.required]),
      time: new FormControl('',[Validators.required]),
      pickPoint: new FormControl('',[Validators.required]),
      Destination: new FormControl('',[Validators.required])
    })



  }


  get f() { return this.AddrideForm.controls; }
  
  onSubmit(){
 
    this.submitted = true;

   
     
    if (this.AddrideForm.invalid) {
        return ;
    }
    this.dataApi.StoreRideBookData(this.AddrideForm.value).subscribe((data:{}) =>{
      this.showMsg= true;
      
      (error) => console.log(error)
    })
  }


  IsEMpIdExit(){
    var formData: any = new FormData();
    formData.append("empid", this.AddrideForm.get('empid').value);
    var empId = this.AddrideForm.controls['empid'].value;
    this.dataApi.IsEmployeeIdExist(empId).subscribe(
      
      (response) => //console.log(response),
      {
        if(response==true)
        {
          this.IsEmpIdExit=true;
        }else{
          this.IsEmpIdExit=false;
        }
      }
     )

  }




  

}
