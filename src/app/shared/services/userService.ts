import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {User} from '../model/user';
import {MessageResponse} from '../model/messageResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = environment.baseUrl + 'user';

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }

  public addUser(user: User): Observable<MessageResponse> {
    return this.httpClient.post<MessageResponse>(this.url, user);
  }
  // tslint:disable-next-line:ban-types
  public deleteUser(id: Number): Observable<MessageResponse> {
    return this.httpClient.delete<MessageResponse>(this.url + '/' + id);
  }
  public updateUser(user: User): Observable<MessageResponse> {
    return this.httpClient.put<MessageResponse>(this.url , user);
  }
  public findById(id: number): Observable<User>
  {
    return  this.httpClient.get<User>(this.url + '/' + id);
  }
}
