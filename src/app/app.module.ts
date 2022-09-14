import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TemplateModule} from "./template/template.module";
import { HomeComponent } from './home/home.component';
import {ClientesModule} from "./clientes/clientes.module";
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import { LayoutComponent } from './layout/layout.component';
import {ServicoPrestadoModule} from "./servico-prestado/servico-prestado.module";
import {ServicoPrestadoService} from "./servico-prestado.service";
import {ClientesService} from "./clientes.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ServicoPrestadoModule,
    FormsModule,
    ClientesModule
  ],
  providers: [
    ClientesService,
    ServicoPrestadoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }