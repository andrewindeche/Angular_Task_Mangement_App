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
    imports: [RouterOutlet, NavbarComponent, TasktableComponent,TaskdetailsComponent]
})
export class AppComponent implements OnInit {
  title = 'taskmgtapp';
  constructor() {}

  ngOnInit() {
    
  }
}
