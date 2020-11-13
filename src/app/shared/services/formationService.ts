import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Formation} from '../model/formation';
import {MessageResponse} from '../model/messageResponse';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  private url = environment.baseUrl + 'formation';

  constructor(private httpClient: HttpClient) {
  }

  public getAll(status): Observable<Formation[]> {
    return this.httpClient.get<Formation[]>(this.url + '/' + status);
  }

  public addFormation(formation: Formation): Observable<MessageResponse> {
    return this.httpClient.post<MessageResponse>(this.url, formation);
  }


  public deleteFormation(id: number): Observable<MessageResponse> {
    return this.httpClient.delete<MessageResponse>(this.url + '/' + id);
  }

  public updateFormation(formation: Formation): Observable<MessageResponse> {
    return this.httpClient.put<MessageResponse>(this.url, formation);
  }

  public findById(id: number): Observable<Formation> {
    return this.httpClient.get<Formation>(this.url + '/' + id);
  }
}
