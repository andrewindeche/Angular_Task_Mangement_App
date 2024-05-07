import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { Task, TasktableComponent } from './tasktable/tasktable.component';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, TasktableComponent,TaskdetailsComponent ]
})
export class AppComponent implements OnInit {
  title = 'taskmgtapp';
  posts: any[] = [];
  tasks: Task[] = [
    { title: 'Task 1', description: 'Description 1', status: 'Done' },
    { title: 'Task 2', description: 'Description 2', status: 'Pending' },
    { title: 'Task 3', description: 'Description 3', status: 'In Progress' },
  ];
  constructor() {}

  ngOnInit() {
  }
}
