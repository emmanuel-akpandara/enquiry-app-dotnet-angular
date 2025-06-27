import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Master {

  constructor(private http: HttpClient) { }
  createEnquiry(obj:any){
    return this.http.post("https://localhost:7186/api/EnquiryMaster/CreateNewEnquiry", obj)
  }

  getStatus(){
    return this.http.get("https://localhost:7186/api/EnquiryMaster/GetAllStatus")
  }

  getTypes(){
   return this.http.get("https://localhost:7186/api/EnquiryMaster/GetAllTypes") 
  }
  getAllEnquiry(){
    return this.http.get("https://localhost:7186/api/EnquiryMaster/GetAllEnquiries")
  }
}
