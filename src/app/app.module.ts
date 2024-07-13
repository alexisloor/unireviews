import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsernameComponent } from './components/username/username.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ResenasComponent } from './components/resenas/resenas.component';
import { AboutComponent } from './components/about/about.component';
import { BuscadorproductoComponent } from './buscadorproducto/buscadorproducto.component';
import { BuscadorvendedorComponent } from './buscadorvendedor/buscadorvendedor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsernameComponent,
    HeaderComponent,
    NavbarComponent,
    SearchbarComponent,
    InicioComponent,
    ResenasComponent,
    AboutComponent,
    BuscadorproductoComponent,
    BuscadorvendedorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
