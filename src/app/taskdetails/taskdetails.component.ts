import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { FormGroup } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TaskFormService } from '../services/task-form.service';
import { DbService } from '../services/db.service';
import { RouterModule,ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-taskdetails',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    CommonModule,
    MatCheckboxModule,
    RouterModule 
  ],
  templateUrl: './taskdetails.component.html',
  styleUrl: './taskdetails.component.css'
})
export class TaskdetailsComponent implements OnInit {
  id: number | undefined;
  taskForm!: FormGroup;
  isNewTask: boolean = true

  constructor(
    private taskFormService: TaskFormService,
    private dbService: DbService, 
    private router: Router,
    private route: ActivatedRoute 
    ) {}
    ngOnInit(): void {
      this.taskForm = this.taskFormService.initForm();
      const taskId = this.route.snapshot.paramMap.get('id');
      if (taskId) {
        this.dbService.getTaskById(taskId).subscribe({
          next: (task) => {
            this.taskForm.patchValue({
              title: task.title,
              description: task.description,
              isComplete: task.isComplete
            });
          },
          error: (err) => console.error('Failed to fetch task', err)
        });
      }
    }
    
  onSubmit(): void {
    if (this.taskForm.valid) {
      const taskData = {
        ...this.taskForm.value,
        isComplete: this.taskForm.value.isComplete
      };
      const taskId = this.route.snapshot.paramMap.get('id');
      if (taskId) {
        this.dbService.updateTask(+taskId, taskData).subscribe(() => {
          this.router.navigate(['/tasks']); 
        });
      } else {
        this.dbService.addTask(taskData).subscribe(() => {
          this.router.navigate(['/tasks']);
        });
      }
    } else {
      this.taskForm.markAllAsTouched();
    }
  }
}
