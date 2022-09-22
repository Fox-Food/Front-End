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
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NavigateService {

  constructor(private router: Router) {
  }

  init(page: string): void {
    this.updateNav(page);
  }

  async navigate(page: string): Promise<void> {
    await this.updateNav(page.replace("user/", ""));
    await this.router.navigate([page.replace("home", "")]);
  }

  private async updateNav(page: string): Promise<void> {
    ['home', 'about', 'review', 'pricing', 'preference', 'menu', 'dashboard'].forEach(pages => {
      if (document.getElementById(pages)?.classList.contains("active")) {
        document.getElementById(pages)?.classList.toggle("active");
      }
    });

    document.getElementById(page)?.classList.toggle("active");
  }
}
