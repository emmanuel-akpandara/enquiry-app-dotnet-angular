import { Routes } from '@angular/router';
import { EnquiryList } from './pages/enquiry-list/enquiry-list';
import { NewEnquiry } from './pages/new-enquiry/new-enquiry';

export const routes: Routes = [


    {
        path:'',
        redirectTo:"list",
        pathMatch:"full"
    },
    {
        path:'list',
        component: EnquiryList
    },
    {
        path: 'createNew',
        component: NewEnquiry
    }
];
