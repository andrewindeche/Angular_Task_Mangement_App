import { Routes } from '@angular/router';
import { TasktableComponent } from './tasktable/tasktable.component';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';

export const routes: Routes = [
    { path: '',component: TasktableComponent },
    { path: 'detail/:id',component: TaskdetailsComponent },
];
