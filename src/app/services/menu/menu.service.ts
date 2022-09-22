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
import {GethttpService} from "../http/gethttp/gethttp.service";
import {LocalstorageService} from "../localstorage/localstorage.service";

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menu: any = [
    {
      "id": "Chargement",
      "name": "Chargement",
      "image": "Chargement",
    }
  ];
  showedMenu: any = {
    "id": "Chargement",
    "day": "Chargement",
    "name": "Chargement",
    "image": "Chargement",
  };
  likedMenu: any = [
    {
      "id": "Chargement",
      "day": "Chargement",
      "name": "Chargement",
      "image": "Chargement",
    }
  ];
  favoriteMenu: any = [
    {
      "id": "Chargement",
      "day": "Chargement",
      "name": "Chargement",
      "image": "Chargement",
    }
  ];

  constructor(private getService: GethttpService, private localStorage: LocalstorageService) {
  }

  update(): Promise<void> {
    this.updateLiked();

    return new Promise<void>(resolve => {
      this.getService.menuGet().subscribe(res => {
        this.menu = res;
        this.showedMenu = this.menu[0];
        resolve();
      });
    });
  }

  updateLiked(): void {
    const email: string | null = this.localStorage.get.getItem("Email");
    const pass: string | null = this.localStorage.get.getItem("Pass");

    if (pass != null && email != null) {
      this.getService.likedUserMenuGet(email, pass).subscribe(res => {
        this.likedMenu = res;
      });
    }
  }
}
