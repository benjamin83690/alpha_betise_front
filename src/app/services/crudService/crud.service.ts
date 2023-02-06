import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  url: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  save(endpoint: string,item: any):Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };
    return this.http.post(this.url + endpoint, item, httpOptions);
  }

  get(endpoint: string, id: number):Observable<any> {
    return this.http.get<any>(`${this.url + endpoint}/${id}`);
  }

  getAll(endpoint: string):Observable<any[]> {
    return this.http.get<any[]>(`${this.url + endpoint}/all`);
  }

  delete(endpoint: string, id: number):Observable<any> {
    return this.http.delete(`${this.url + endpoint}/${id}`);
  }
}
