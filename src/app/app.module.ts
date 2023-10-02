import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';

import { FormDadosComponent } from './form-dados/form-dados.component';
import { ListaCadastrosComponent } from './lista-cadastros/lista-cadastros.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormDadosComponent,
    ListaCadastrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
