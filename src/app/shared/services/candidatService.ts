
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Candidat} from '../model/candidat';
import {MessageResponse} from '../model/messageResponse';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {
  private url = environment.baseUrl + 'candidat';

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<Candidat[]> {
    return this.httpClient.get<Candidat[]>(this.url);
  }

  public addCandidat(candidat: Candidat): Observable<MessageResponse> {
    return this.httpClient.post<MessageResponse>(this.url, candidat);
  }
  // tslint:disable-next-line:ban-types
  public deleteCandidat(id: Number): Observable<MessageResponse> {
    return this.httpClient.delete<MessageResponse>(this.url + '/' + id);
  }
  public updateCandidat(candidat: Candidat): Observable<MessageResponse> {
    return this.httpClient.put<MessageResponse>(this.url , candidat);
  }

}
