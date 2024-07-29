import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ResenasComponent } from './components/resenas/resenas.component';
import { AboutComponent } from './components/about/about.component';
import { BuscadorproductoComponent } from './buscadorproducto/buscadorproducto.component';
import { BuscadorvendedorComponent } from './buscadorvendedor/buscadorvendedor.component';


const routes: Routes = [
  { path:'inicio', component: InicioComponent },
  { path:'buscadorproducto', component: BuscadorproductoComponent },
  { path: 'buscadorvendedor', component: BuscadorvendedorComponent},
  { path: 'resenas', component: ResenasComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

