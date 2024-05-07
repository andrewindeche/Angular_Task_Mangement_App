import { Component, OnInit, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface Task {
  title: string;
  description: string;
  status: string;
}

@Component({
  selector: 'app-tasktable',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './tasktable.component.html',
  styleUrl: './tasktable.component.css'
})
export class TasktableComponent implements OnInit {
  @Input()
  dataSource: Task[] = [];
  displayedColumns: string[] = ['title', 'description', 'status', 'actions'];

  constructor() { }

  ngOnInit(): void {
  }

}
