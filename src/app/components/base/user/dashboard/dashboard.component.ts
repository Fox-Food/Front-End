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
import {LoginService} from "../../../../services/login/login.service";
import {SimpletitleService} from "../../../../services/title/simpletitle.service";
import {NavigateService} from "../../../../services/navigate/navigate.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private loginService: LoginService, private simpleTitle: SimpletitleService,
              public navigateService: NavigateService) {
  }

  ngOnInit(): void {
    this.loginService.checkLogin();
    this.navigateService.init('dashboard');
    this.simpleTitle.setTitle({suffix: "Dashboard"});

    window.scrollTo({top: 0, behavior: 'smooth'});
  }

}
