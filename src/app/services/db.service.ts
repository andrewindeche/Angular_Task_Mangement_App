import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Task } from '../task.model'; 

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private baseURL = 'http://localhost:3000/tasks';
  
  constructor(private http: HttpClient) { }
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseURL);
  }
  getTaskById(id: string): Observable<Task> {
    return this.http.get<Task>(`${this.baseURL}/${id}`);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.baseURL, task);
  }

  updateTask(id: number, task: Task): Observable<Task> {
    if (!id || isNaN(id)) {
      console.error('Invalid task ID');
      return throwError(() => new Error('Invalid task ID'));
    }
    return this.http.put<Task>(`${this.baseURL}/${id}`, task);
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}/${id}`);
  }
}
