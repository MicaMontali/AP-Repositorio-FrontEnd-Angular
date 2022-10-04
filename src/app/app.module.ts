import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarruselComponent,
    ServiciosComponent,
    SobreMiComponent,
    ClientesComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
