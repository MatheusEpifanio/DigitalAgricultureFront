import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments.dev';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FieldsDashboardComponent } from './fields/fields-dashboard/fields-dashboard.component';
import { Observable } from 'rxjs';
import { PaginationResponse } from '../shared/model/response/PaginationResponse';
import { FieldRequest } from '../shared/model/request/FieldRequest';

@Injectable({
  providedIn: 'root'
})
export class FieldsService {
  private apiUrl = environment.apiUrl + '/fields';
  private token = localStorage.getItem('token');


  constructor(private httpClient: HttpClient) { }

  public getFieldsByUserLogged(numberPage = 0,  lengthPage = 10): Observable<PaginationResponse> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.httpClient.get<PaginationResponse>(this.apiUrl, {headers, params:{numberPage, lengthPage}});
  }

  public insertField(fieldRequest: FieldRequest): Observable<string>{
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.httpClient.post<string>(this.apiUrl, fieldRequest, {headers});
  }

}
