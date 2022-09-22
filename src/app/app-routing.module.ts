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

import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/base/default/home/home.component";
import {AboutComponent} from "./components/base/default/about/about.component";
import {NotfoundComponent} from "./components/base/error/notfound/notfound.component";
import {ReviewComponent} from "./components/base/default/review/review.component";
import {PricingComponent} from "./components/base/default/pricing/pricing.component";
import {LoginComponent} from "./components/base/user/login/login.component";
import {RegisterComponent} from "./components/base/user/register/register.component";
import {DashboardComponent} from "./components/base/user/dashboard/dashboard.component";
import {SettingsComponent} from "./components/base/user/settings/settings.component";
import {PreferenceComponent} from "./components/base/user/preference/preference.component";
import {MenuComponent} from "./components/base/user/menu/menu.component";
import {ViewComponent} from "./components/base/user/menu/view/view.component";

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "about", component: AboutComponent
  },
  {
    path: "review", component: ReviewComponent
  },
  {
    path: "pricing", component: PricingComponent
  },
  {
    path: "user/login", component: LoginComponent
  },
  {
    path: "user/register", component: RegisterComponent
  },
  {
    path: "user/dashboard", component: DashboardComponent
  },
  {
    path: "user/settings", component: SettingsComponent
  },
  {
    path: "user/preference", component: PreferenceComponent
  },
  {
    path: "user/menu", component: MenuComponent
  },
  {
    path: "user/menu/view", component: ViewComponent
  },
  {
    path: "error", component: NotfoundComponent
  },
  {
    path: "**", component: ViewComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [
  HomeComponent, AboutComponent, ReviewComponent, PricingComponent, LoginComponent,
  RegisterComponent, NotfoundComponent, DashboardComponent, SettingsComponent, PreferenceComponent,
  MenuComponent, ViewComponent
]
