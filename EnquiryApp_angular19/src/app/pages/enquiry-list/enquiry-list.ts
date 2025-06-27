import { Component, OnInit } from '@angular/core';
import { Master } from '../../service/master';
import { inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-enquiry-list',
  imports: [DatePipe],
  templateUrl: './enquiry-list.html',
  styleUrl: './enquiry-list.css'
})
export class EnquiryList implements OnInit {
  masterSrc = inject(Master);
  enquiryList: any[] = [];
  statusList: any[] = [];
  typeList: any[] = [];

  ngOnInit(): void {
    // Fetch all data simultaneously using forkJoin
    forkJoin({
      enquiries: this.masterSrc.getAllEnquiry(),
      statuses: this.masterSrc.getStatus(),
      types: this.masterSrc.getTypes()
    }).subscribe((res: any) => {
      this.enquiryList = res.enquiries;
      this.statusList = res.statuses;
      this.typeList = res.types;
    });
  }

  // Helper method to get status text by ID
  getStatusText(Id: number): string {
    const status = this.statusList.find(s => s.statusId === Id);
    return status ? status.status : 'Unknown Status';
  }

  // Helper method to get type text by ID
  getTypeText(Id: number): string {
    const type = this.typeList.find(t => t.typeId === Id);
    return type ? type.typeName : 'Unknown Type';
  }
}