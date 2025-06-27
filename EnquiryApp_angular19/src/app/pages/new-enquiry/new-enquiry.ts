import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Master } from '../../service/master';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-new-enquiry',
  imports: [FormsModule,AsyncPipe],
  templateUrl: './new-enquiry.html',
  styleUrl: './new-enquiry.css'
})
export class NewEnquiry {

  newENquiryObj: any = {
    // enquiryId: 0,
    enquiryTypeId:0,
    enquiryStatusId:0,
    customerName:'',
    mobileNo:'',
    email:'',
    message:'',
    createdDate: new Date(),
    resolution:''

  };

  masterSrv = inject(Master);

  typeList: Observable<any> = new Observable<any>();
  statusList: Observable<any> = new Observable<any>();

  constructor(){
    this.typeList = this.masterSrv.getTypes();
    this.statusList = this.masterSrv.getStatus();
  }

onSave() {
  console.log('New Enquiry:', this.newENquiryObj); // 👀 See what's being sent
  debugger;
  this.masterSrv.createEnquiry(this.newENquiryObj).subscribe((res: any) => {
    console.log('Response:', res);
    debugger;
  }, error => {
    console.error('Error:', error);
    debugger;
  });
}


}
