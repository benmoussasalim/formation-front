
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
  public getFormateurByTheme(theme): Observable<Formateur[]> {
    // @ts-ignore
    return this.httpClient.get<Formateur[]>(this.url, theme);
  }
  public addFormateur(formateurThemes): Observable<MessageResponse> {
    return this.httpClient.post<MessageResponse>(this.url, formateurThemes);
  }
  public deleteFormateur(id: number): Observable<MessageResponse> {
    return this.httpClient.delete<MessageResponse>(this.url + '/' + id);
  }
  public updateFormateur(formateurThemes): Observable<MessageResponse> {
    return this.httpClient.put<MessageResponse>(this.url , formateurThemes);
  }
  public findById(id: number): Observable<Formateur>
  {
    return  this.httpClient.get<Formateur>(this.url + '/' + id);
  }
}
