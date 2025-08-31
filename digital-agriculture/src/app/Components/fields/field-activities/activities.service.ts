import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environments.dev';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivitiesRequest } from '../../../shared/model/request/ActivitiesRequest';
import { Observable } from 'rxjs';
import { ActivitiesResponse } from '../../../shared/model/response/ActivitiesResponse';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  private apiUrl = environment.apiUrl + '/fields';
  private token = localStorage.getItem('token');


  constructor(private httpClient: HttpClient) { }

  public insertActivities(fieldId: number, activitiesRequest: ActivitiesRequest[]): Observable<string>{
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    const apiUrlConcatenated = `${this.apiUrl}/${fieldId}/activities`

    return this.httpClient.post<string>(apiUrlConcatenated, activitiesRequest, {headers});
  }

  public getActivities(fieldId:number): Observable<ActivitiesResponse[]>{
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    const apiUrlConcatenated = `${this.apiUrl}/${fieldId}/activities`

    return this.httpClient.get<ActivitiesResponse[]>(apiUrlConcatenated, {headers});
  }

}
