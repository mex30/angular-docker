import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, UserDto } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>API Test (Standalone)</h1>

    <p *ngIf="error" style="color:red;">Errore: {{ error }}</p>

    <h2>Health</h2>
    <pre>{{ health | json }}</pre>

    <h2>Users</h2>
    <ul>
      <li *ngFor="let u of users">{{ u.id }} - {{ u.name }}</li>
    </ul>
  `,
})
export class App implements OnInit {
  health?: { ok: boolean; ts: number };
  users: UserDto[] = [];
  error?: string;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.health().subscribe({
      next: (res) => (this.health = res),
      error: (err) => (this.error = err?.message || 'Health failed'),
    });

    this.api.users().subscribe({
      next: (res) => (this.users = res),
      error: (err) => (this.error = err?.message || 'Users failed'),
    });
  }
}
