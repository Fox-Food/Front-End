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
import {GethttpService} from "../../../../services/http/gethttp/gethttp.service";
import {LocalstorageService} from "../../../../services/localstorage/localstorage.service";
import {MenuService} from "../../../../services/menu/menu.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private loginService: LoginService, private simpleTitle: SimpletitleService,
              public navigateService: NavigateService, private getService: GethttpService,
              private localStorage: LocalstorageService, public menuService: MenuService) {
  }

  ngOnInit(): void {
    this.loginService.checkLogin();
    this.navigateService.init('menu');
    this.simpleTitle.setTitle({suffix: "Menu"});
    this.menuService.update();

    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  async goToPage(menu: any): Promise<void> {
    await this.navigateService.navigate("/user/menu/view/" + menu.id);

  }

}
