import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = `${environment.api}/roles`;
  }

  all() {
    return this.http.get(this.url);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
