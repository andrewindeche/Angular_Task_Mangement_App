import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TaskFormService {

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
      title: 'Review project',
      description: 'Review the final integration of the project modules.',
      isComplete: false
    };
    form.setValue(taskData);
  }

  submitForm(form: FormGroup): void {
    if (form.valid) {
      console.log('Form Submission', form.value);
    } else {
      console.error('Form is not valid!');
    }
  }
}
