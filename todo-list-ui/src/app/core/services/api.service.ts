import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient
  ) {
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.apiV1Url}${path}`, {params});
  }

  post(path: string, body: object = {}): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    return this.http.post(`${environment.apiV1Url}${path}`, JSON.stringify(body), {headers});
  }

  patch(path: string, body: object = {}): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    return this.http.patch(`${environment.apiV1Url}${path}`, JSON.stringify(body), {headers});
  }
}
