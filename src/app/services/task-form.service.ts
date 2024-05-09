import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../task.model';
import { DbService } from './db.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskFormService {
  
  constructor(private fb: FormBuilder, private dbService: DbService) { }
  initForm(): FormGroup {
    return this.fb.group({
      title: ['Create/Edit title', Validators.required],
      description: ['Create/Edit task description'],
      isComplete: [false]
    });
  }

  loadTask(taskId: string): Observable<Task> {
    return this.dbService.getTaskById(taskId);
  }

  submitForm(form: FormGroup):Observable<Task> {
    if (form.valid) {
      const task: Task = form.value;
      return this.dbService.addTask(task);
    } else {
      throw new Error('Form is not valid!');
    }
  }
  getTasks(): Observable<Task[]>  {
    return this.dbService.getTasks();
  }
}
