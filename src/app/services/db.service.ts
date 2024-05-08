import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
  getTaskById(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.baseURL}/${id}`);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.baseURL, task);
  }

  updateTask(id: number, task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.baseURL}/${id}`, task);
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}/${id}`);
  }
}
