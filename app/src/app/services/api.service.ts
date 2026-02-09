import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

export interface UserDto {
  id: number;
  name: string;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private base = environment.apiBaseUrl; // "/api"

  constructor(private http: HttpClient) {}

  health(): Observable<{ ok: boolean; ts: number }> {
    return this.http.get<{ ok: boolean; ts: number }>(`${this.base}/health`);
  }

  users(): Observable<UserDto[]> {
    return this.http.get<UserDto[]>(`${this.base}/users`);
  }
}
