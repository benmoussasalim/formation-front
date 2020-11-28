import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Salle} from '../model/salle';
import {MessageResponse} from '../model/messageResponse';

import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalleService {
  private url = environment.baseUrl + 'salle';

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<Salle[]> {
    return this.httpClient.get<Salle[]>(this.url);
  }

  public addSalle(salle: Salle): Observable<MessageResponse> {
    return this.httpClient.post<MessageResponse>(this.url, salle);
  }
  // tslint:disable-next-line:ban-types
  public deleteSalle(id: Number): Observable<MessageResponse> {
    return this.httpClient.delete<MessageResponse>(this.url + '/' + id);
  }
  public updateSalle(salle: Salle): Observable<MessageResponse> {
    return this.httpClient.put<MessageResponse>(this.url , salle);
  }

}
