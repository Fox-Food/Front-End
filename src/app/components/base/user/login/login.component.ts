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

import {Component, OnInit} from '@angular/core';
import {NavigateService} from "../../../../services/navigate/navigate.service";
import {GethttpService} from "../../../../services/http/gethttp/gethttp.service";
import {Observable} from "rxjs";
import {LoginService} from "../../../../services/login/login.service";
import {SimpletitleService} from "../../../../services/title/simpletitle.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string | undefined;
  password: string | undefined;

  constructor(public navigateService: NavigateService, private getService: GethttpService,
              private loginService: LoginService, private simpleTitle: SimpletitleService) {
  }

  ngOnInit(): void {
    this.navigateService.init('login');
    this.simpleTitle.setTitle({suffix: "Login"});

    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  async processForm(): Promise<void> {
    if (this.email != undefined && this.password != undefined) {
      const login: Observable<Object> = await this.getService.loginGet(this.email, this.password);
      login.subscribe(res => {
        if (res) {
          this.loginService.logged({email: this.email, password: this.password, success: true});
          return;
        }
        this.loginService.logged({success: false});
        alert("user dosnt exist");
      });
      return;
    }
    alert("fields must be filled");
  }
}
