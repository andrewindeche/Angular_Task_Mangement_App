import { Routes } from '@angular/router';
import { TasktableComponent } from './tasktable/tasktable.component';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';

export const routes: Routes = [
    { path: '', redirectTo: '/tasks', pathMatch: 'full' },  
    { path: 'tasks', component: TasktableComponent, pathMatch: 'full' },
    { path: 'tasks/:id', component: TasktableComponent, pathMatch: 'full' }, 
    { path: 'detail/new', component: TaskdetailsComponent, pathMatch: 'full' },  
    { path: 'detail/:id', component: TaskdetailsComponent } 
];
