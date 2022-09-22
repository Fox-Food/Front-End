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
import {Observable} from "rxjs";

@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.css']
})
export class PreferenceComponent implements OnInit {
  private email: string | null = this.localStorage.get.getItem("Email");
  private pass: string | null = this.localStorage.get.getItem("Pass");

  constructor(private loginService: LoginService, private simpleTitle: SimpletitleService,
              public navigateService: NavigateService, private getService: GethttpService,
              private localStorage: LocalstorageService, public menuService: MenuService) {
    this.menuService.update();
  }

  ngOnInit(): void {
    this.loginService.checkLogin();
    this.navigateService.init('preference');
    this.simpleTitle.setTitle({suffix: "Preference"});

    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  async changeImage(like?: boolean): Promise<void> {
    if (like && this.email != null && this.pass != null) {

      const test: Observable<Object> =
        await this.getService.likedMenuGet(this.email, this.menuService.menu[0].name, this.pass);

      test.subscribe(res => {
        if (res) {
          this.menuService.updateLiked();
        }
      })
    }

    if (this.menuService.likedMenu[0] != undefined) {
      if (this.menuService.likedMenu[0].name === "Chargement") {
        this.menuService.likedMenu.shift(); //to optimize it's so ugly
      }
    }
    this.menuService.likedMenu.push(this.menuService.menu[0]);

    this.menuService.menu.shift();
    this.menuService.showedMenu = this.menuService.menu[0];

    this.menuService.updateLiked();
  }

  async addToFavorite(): Promise<void> {
    if (this.email != null && this.pass != null) {
      await this.getService.favoriteMenuGet(this.email, this.menuService.menu[0].name, this.pass);
    }

    if (this.menuService.favoriteMenu[0].name === "Chargement") {
      this.menuService.favoriteMenu.shift(); //to optimize it's so ugly
    }
    this.menuService.favoriteMenu.push(this.menuService.menu[0]);
    await this.changeImage(true);
  }

}
