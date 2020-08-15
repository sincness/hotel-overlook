import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor() { }

  set(value: string | number) {
    const d = new Date();
    d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + d.toUTCString();
    document.cookie = `user=${value};expires=${expires};path=/`;
  }

  setLike() {
    const d = new Date();
    d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + d.toUTCString();
    document.cookie = `like=true;expires=${expires};path=/`;
  }
  unLike() {
    const d = new Date();
    d.setTime(d.getTime() + (-7 * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + d.toUTCString();
    document.cookie = `like=;expires=${expires};path=/`;
  }

  
  setToken(value: string | number) {
    const d = new Date();
    d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + d.toUTCString();
    document.cookie = `token=${value};expires=${expires};path=/`;
  }



  remove() {
    const d = new Date();
    d.setTime(d.getTime() + (-7 * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + d.toUTCString();
    document.cookie = `user=;expires=${expires};path=/`;
  }

  get(name: string): string {
    const nameLenPlus = (name.length + 1);
    return document.cookie
      .split(';')
      .map(c => c.trim())
      .filter(cookie => {
        return cookie.substring(0, nameLenPlus) === `${name}=`;
      })
      .map(cookie => {
        return decodeURIComponent(cookie.substring(nameLenPlus));
      })[0] || null;
  }


  setPurchase () {
    const d = new Date();
    d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + d.toUTCString();
    document.cookie = `purchase=true;expires=${expires};path=/`;
  }

  deletePurchase () {
      const d = new Date();
      d.setTime(d.getTime() + (-7 * 24 * 60 * 60 * 1000));
      const expires = 'expires=' + d.toUTCString();
      document.cookie = `purchase=false;expires=${expires};path=/`;
  }
}
