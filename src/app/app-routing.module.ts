import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {LayoutComponent} from "./layout/layout.component";
import {ServicoPrestadoFormComponent} from "./servico-prestado/servico-prestado-form/servico-prestado-form.component";
import {
  ServicoPrestadoListaComponent
} from './servico-prestado/servico-prestado-lista/servico-prestado-lista.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LayoutComponent, children: [
      {path: 'home', component: HomeComponent},
      {path: 'servico-prestado-form', component: ServicoPrestadoFormComponent},
      {path: 'servico-prestado-listagem', component: ServicoPrestadoListaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
