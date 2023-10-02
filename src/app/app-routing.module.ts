import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormDadosComponent } from './form-dados/form-dados.component';
import { ListaCadastrosComponent } from './lista-cadastros/lista-cadastros.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form-dados', component: FormDadosComponent },
  { path: 'lista-cadastros', component: ListaCadastrosComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }








