import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments.dev';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginationResponse } from '../shared/model/response/PaginationResponse';
import { FieldRequest } from '../shared/model/request/FieldRequest';
import { FieldDetailsResponse } from '../shared/model/response/FieldDetailsResponse';

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

  public insertField(fieldRequest: FieldRequest): Observable<string> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.httpClient.post<string>(this.apiUrl, fieldRequest, {headers});
  }

  public getDetailsField(fieldId: number):Observable<FieldDetailsResponse> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.httpClient.get<FieldDetailsResponse>(`${this.apiUrl}/${fieldId}`, {headers});
  }
}
