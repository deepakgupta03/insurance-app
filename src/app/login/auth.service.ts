import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly storageKey = 'auth';

  get isLoggedIn(): boolean {
    return !!localStorage.getItem(this.storageKey);
  }

  login(username: string, password: string): boolean {
    // Simulate authentication logic
    if (username === 'user' && password === 'password') {
      localStorage.setItem(this.storageKey, JSON.stringify({ username }));
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem(this.storageKey);
  }

  getUsername(): string | undefined {
    const userData = localStorage.getItem(this.storageKey);
    return userData ? JSON.parse(userData).username : undefined;
  }
}
