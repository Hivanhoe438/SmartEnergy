import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ProductionComponent } from './production/production.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', component: AcceuilComponent},
  { path: 'about', component: AboutPageComponent },
  { path: 'production', component: ProductionComponent },
  { path: 'contact', component: ContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
