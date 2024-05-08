import { Component, OnInit, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

export interface Task {
  title: string;
  description: string;
  status: string;
}

@Component({
  selector: 'app-tasktable',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './tasktable.component.html',
  styleUrl: './tasktable.component.css'
})
export class TasktableComponent implements OnInit {
  @Input()
  dataSource: Task[] = [];
  displayedColumns: string[] = ['title', 'description', 'status', 'actions'];

  constructor() { }

  ngOnInit(): void {
    this.initializeTasks();
  }
  private initializeTasks() {
    this.dataSource = [
      { title: 'Task 1', description: 'Description 1', status: 'Done' },
      { title: 'Task 2', description: 'Description 2', status: 'Pending' },
      { title: 'Task 3', description: 'Description 3', status: 'In Progress' },
    ];
  }

}
