import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CookieService } from './cookie.service';


interface User {
  username: string;
  password: string;
  access_token?: string;
  user_id?: string;
  email?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, public cookie: CookieService) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(this.cookie.get('user')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(cred: object) {
    return this.http.post<any>('https://api.mediehuset.net/token', cred)
        .pipe(map(user => {
            // gemmer brugers oplysninger samt jwt token i localstorage for at holde brugeren logget ind imellem klientopdateringer af siden
            console.log(user.access_token);
            this.cookie.setToken(user.access_token);
            this.cookie.set(JSON.stringify(user));
            localStorage.setItem('user', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
  }

  logout() {
    // fjerner bruger's token fra localstorage for at logge ud
    // this.setCookie('token', '', -7);
    // this.setCookie('user_id', '', -7);
    // this.setCookie('user', '', -7);
    this.cookie.remove();
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
  }
}
