import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Theme} from '../model/theme';
import {MessageResponse} from '../model/messageResponse';

import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private url = environment.baseUrl + 'theme';

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<Theme[]> {
    return this.httpClient.get<Theme[]>(this.url);
  }

  public getByFormateur(id): Observable<Theme[]> {
    return this.httpClient.get<Theme[]>(this.url + '/formateur/' + id);
  }

  public addTheme(theme: Theme): Observable<MessageResponse> {
    return this.httpClient.post<MessageResponse>(this.url, theme);
  }
  // tslint:disable-next-line:ban-types
  public deleteTheme(id: Number): Observable<MessageResponse> {
    return this.httpClient.delete<MessageResponse>(this.url + '/' + id);
  }
  public updateTheme(theme: Theme): Observable<MessageResponse> {
    return this.httpClient.put<MessageResponse>(this.url , theme);
  }

}
