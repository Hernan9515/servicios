import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { QuienesomosComponent } from './quienesomos/quienesomos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormularioComponent } from './formulario/formulario.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes:Routes=[
  {path:'',component:InicioComponent},
  {path:'quienesomos',component:QuienesomosComponent},
  {path:'servicios',component:ServiciosComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'formulario',component:FormularioComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    QuienesomosComponent,
    ServiciosComponent,
    ContactoComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
