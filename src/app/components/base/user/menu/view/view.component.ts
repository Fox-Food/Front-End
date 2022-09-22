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
import {NavigateService} from "../../../../../services/navigate/navigate.service";
import {MenuService} from "../../../../../services/menu/menu.service";
import {LoginService} from "../../../../../services/login/login.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  offer: any | undefined;

  constructor(private loginService: LoginService, private navigateService: NavigateService, private menuService: MenuService) {
    this.loginService.checkLogin();

    this.menuService.update().then(() => {
      console.log(this.menuService.menu)
      console.log(this.getLocation(window.location.href).pathname.replace("/user/menu/view/", ""))
      this.offer = this.menuService.menu
        .find((x: { id: string; }) => x.id === this.getLocation(window.location.href).pathname.replace("/user/menu/view/", ""));

      //if page does not exist redirect to the main
      if (this.offer == undefined) {
        this.navigateService.navigate("error");
        return;
      }
    });
  }

  ngOnInit(): void {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  private getLocation(href: string): HTMLAnchorElement {
    const l = document.createElement("a");
    l.href = href;
    return l;
  };

}
