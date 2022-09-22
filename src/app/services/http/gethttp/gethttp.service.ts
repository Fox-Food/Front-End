/*
 * FrontWSSN1: Front end of FoxFood.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, version 3 of the License.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */

import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GethttpService {
  private url: string = "https://api-ws-sn1.gaetandev.fr/";

  constructor(private http: HttpClient) {
  }

  async loginGet(email: string, password: string): Promise<Observable<Object>> {
    return this.http.get(this.url + "login?user=" + email +
      "&pass=" + password)
  }

  async registerGet(email: string, password: string, confirmPassword: string): Promise<Observable<Object>> {
    return this.http.get(this.url + "register?user=" + email + "&pass=" + password +
      "&confirmpass=" + confirmPassword);
  }

  async likedMenuGet(user: string, menu: string, pass: string): Promise<Observable<Object>> {
    return this.http.get(this.url + "liked-menu?user=" + user + "&menu=" + menu +
      "&pass=" + pass);
  }

  async favoriteMenuGet(user: string, menu: string, pass: string): Promise<Observable<Object>> {
    return this.http.get(this.url + "favorite-menu?user=" + user + "&menu=" + menu +
      "&pass=" + pass);
  }

  //todo put async after
  menuGet(): Observable<Object> {
    return this.http.get(this.url + "menu");
  }

  //todo put async after
  likedUserMenuGet(user: string, pass: string): Observable<Object> {
    return this.http.get(this.url + "liked-user-menu?user=" + user + "&pass=" + pass);
  }

}
