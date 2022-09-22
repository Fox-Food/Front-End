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
import {LocalstorageService} from "../localstorage/localstorage.service";
import {Router} from "@angular/router";
import {GethttpService} from "../http/gethttp/gethttp.service";

interface LoggedParams {
  email?: string | undefined;
  password?: string | undefined;
  success: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLogin: boolean | undefined;

  constructor(private localStorage: LocalstorageService, private router: Router, private getService: GethttpService) {
    let isLogin: string | null = this.localStorage.get.getItem("Logged");
    const email: string | null = this.localStorage.get.getItem("Email");
    const pass: string | null = this.localStorage.get.getItem("Pass");

    if (isLogin != null && isLogin === "true") {
      this.isLogin = true;
    }

    if (email != null && pass != null) {
      this.getService.loginGet(email, pass).then(s => {
        s.subscribe(res => {
          if (!res) {
            this.isLogin = false;
          }
        })
      })
    }
  }

  checkLogin(): void {
    if (!this.isLogin) {
      this.router.navigate(["user/login"]).then(() => console.log("Redirected to login page"));
    }
  }

  async logged({email, password, success}: LoggedParams): Promise<void> {
    this.isLogin = success;
    if (success) {
      await this.router.navigate(["user/dashboard"]);
      this.localStorage.get.setItem("Logged", "true");
      if (email != undefined) {
        this.localStorage.get.setItem("Email", email);
      }
      if (password != undefined) {
        this.localStorage.get.setItem("Pass", password);
      }
    }
  }

  async logout(): Promise<void> {
    if (this.isLogin) {
      this.isLogin = false;
      ["Logged", "Email", "Pass"].forEach(v => this.localStorage.get.removeItem(v));
      await this.router.navigate(["/user/login"]);
    }

  }
}
