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
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-taskdetails',
  standalone: true,
  imports: [ReactiveFormsModule, 
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

  constructor(private taskFormService: TaskFormService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.taskForm = this.taskFormService.initForm();
    this.taskFormService.loadTask(this.taskForm);
  }
  onSubmit(): void {
    this.taskFormService.submitForm(this.taskForm);
  }
}
