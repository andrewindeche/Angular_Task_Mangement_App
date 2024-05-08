import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { TasktableComponent } from './tasktable/tasktable.component';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';
import { HttpClientModule } from '@angular/common/http';
import { DbService } from './services/db.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, TasktableComponent,TaskdetailsComponent],
    providers: [HttpClientModule]
})
export class AppComponent implements OnInit {
  title = 'taskmgtapp';
  tasks: any[] = [];

  constructor(private dbService: DbService) {}

  ngOnInit() {
    this.dbService.getPosts().subscribe({
      next: (data) => this.tasks = data,
      error: (err) => console.error('There was an error: ', err)
    });
  }
}
