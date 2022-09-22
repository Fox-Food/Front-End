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

import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="flex flex-col h-screen justify-between">
      <app-navbar></app-navbar>
      <router-outlet></router-outlet>
      <app-footer></app-footer>
    </div>
  `
})
export class AppComponent {
  title = 'Front-WS-SN1';
}
