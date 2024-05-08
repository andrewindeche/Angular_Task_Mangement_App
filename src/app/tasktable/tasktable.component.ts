import { Component, OnInit, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { TaskFormService } from '../services/task-form.service';
import { Task } from '../task.model'

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

  constructor(private taskFormService: TaskFormService) { }

  ngOnInit(): void {
    this.taskFormService.getTasks().subscribe(tasks => {
      this.dataSource = tasks.map(task => ({
        ...task,
        status: task.isComplete ? 'Done' : 'Pending'
      }));
    });
  }
}
