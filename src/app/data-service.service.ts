import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
//===Base API URL======//
BaseApiUrl = 'http://localhost:3000';

  constructor(
    private http:HttpClient
  ) { }

  //===Set Http Header===//
httpheader = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
   })
}


//===Add Data===//

StoreRideBookData(Data:any){
 return this.http.post<any>(this.BaseApiUrl + '/employees' , JSON.stringify(Data), this.httpheader)
  .pipe(
   retry(1), catchError(this.handleError)
  )

}

IsEmployeeIdExist(empid){
  return  this.http.post(this.BaseApiUrl+'/employees?empid='+ empid +'',null);
}

CarRide(){
  return this.http.get(this.BaseApiUrl + '/employees?vechileType=car')
  .pipe(
    retry(1), catchError(this.handleError)
  )
}



// Error handling 
handleError(error: { error: { message: string; }; status: any; message: any; }) {
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
}


}
