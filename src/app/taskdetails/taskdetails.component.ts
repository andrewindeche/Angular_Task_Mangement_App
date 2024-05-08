import { Component, OnInit } from '@angular/core';
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
    const id = this.route.snapshot.paramMap.get('id'); 
    if (id) {
      this.isNewTask = false;
      this.dbService.getTaskById(+id).subscribe(task => {
        this.taskForm.setValue({
          title: task.title,
          description: task.description,
          isComplete: task.isComplete
        });
      });
    }
  }
  onSubmit(): void {
    if (this.taskForm.valid) {
      if (this.isNewTask) {
        this.dbService.addTask(this.taskForm.value).subscribe({
          next: (result) => {
            console.log('Task added', result);
            this.router.navigate(['/tasks']);
          },
          error: (error) => console.error('There was an error!', error)
        });
      } else {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
          this.dbService.updateTask(+id, this.taskForm.value).subscribe({
            next: (result) => {
              console.log('Task updated', result);
              this.router.navigate(['/tasks']);
            },
            error: (error) => console.error('There was an error!', error)
          });
        }
      }
    } else {
      console.error('Form is not valid!');
    }
  }
}
