
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Formateur} from '../model/formateur';
import {MessageResponse} from '../model/messageResponse';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {
  private url = environment.baseUrl + 'formateur';

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<Formateur[]> {
    return this.httpClient.get<Formateur[]>(this.url);
  }

  public addFormateur(formateur: Formateur): Observable<MessageResponse> {
    return this.httpClient.post<MessageResponse>(this.url, formateur);
  }
  // tslint:disable-next-line:ban-types
  public deleteFormateur(id: Number): Observable<MessageResponse> {
    return this.httpClient.delete<MessageResponse>(this.url + '/' + id);
  }
  public updateFormateur(formateur: Formateur): Observable<MessageResponse> {
    return this.httpClient.put<MessageResponse>(this.url , formateur);
  }
  public findById(id: number): Observable<Formateur>
  {
    return  this.httpClient.get<Formateur>(this.url + '/' + id);
  }
}
