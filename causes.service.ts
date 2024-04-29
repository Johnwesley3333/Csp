import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CausesService {
  private apiUrl = 'http://localhost:3200/api/water1'; // The API endpoint in the Express server

  constructor(private http: HttpClient) {}

  getCausesData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  insertCause(cause: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, cause);
    
  }

  updateCause(cause: any): Observable<any> {
    const url = `${this.apiUrl}/${cause.id}`;
    return this.http.put<any>(url, cause);
  }

  deleteCause(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}