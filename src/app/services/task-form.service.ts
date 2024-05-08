import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

export interface Task {
  title: string;
  description: string;
  isComplete: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskFormService {
  private tasks = new BehaviorSubject<Task[]>([]);

  constructor(private fb: FormBuilder) { }
  initForm(): FormGroup {
    return this.fb.group({
      title: ['', Validators.required],
      description: [''],
      isComplete: [false]
    });
  }

  loadTask(form: FormGroup): void {
    const taskData = {
      title: 'Create/Edit title',
      description: 'Create/Edit task description',
      isComplete: false
    };
    form.setValue(taskData);
  }

  submitForm(form: FormGroup): void {
    if (form.valid) {
      const newTask: Task = form.value;
      const updatedTasks = [...this.tasks.value, newTask];
      this.tasks.next(updatedTasks);
      console.log('Form Submission', form.value);
    } else {
      console.error('Form is not valid!');
    }
  }
  getTasks() {
    return this.tasks.asObservable();
  }
}
