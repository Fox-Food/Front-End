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

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  actualPassword: string | undefined;
  newPassword: string | undefined;
  newPasswordConfirmation: string | undefined;

  constructor(private loginService: LoginService, private simpleTitle: SimpletitleService) {
  }

  ngOnInit(): void {
    this.loginService.checkLogin();
    this.simpleTitle.setTitle({suffix: "Settings"});

    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  async processForm(): Promise<void> {
    //TODO: change password
  }

}
