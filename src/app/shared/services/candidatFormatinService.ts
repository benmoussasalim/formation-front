import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MessageResponse} from '../model/messageResponse';
import {environment} from '../../../environments/environment';
import {CandidatFormation} from '../model/candidatFormation';



@Injectable({
  providedIn: 'root'
})
export class CandidatFormationService {
  private url = environment.baseUrl + 'candidatFormation';

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<CandidatFormation[]> {
    return this.httpClient.get<CandidatFormation[]>(this.url);
  }

  public addCandidatFormation(candidatFormation: CandidatFormation): Observable<MessageResponse> {
    return this.httpClient.post<MessageResponse>(this.url, candidatFormation);
  }
  // tslint:disable-next-line:ban-types
  public deleteCandidatFormation(id: Number): Observable<MessageResponse> {
    return this.httpClient.delete<MessageResponse>(this.url + '/' + id);
  }
  public updateCandidatFormation(candidatFormation: CandidatFormation): Observable<MessageResponse> {
    return this.httpClient.put<MessageResponse>(this.url , candidatFormation);
  }

}
