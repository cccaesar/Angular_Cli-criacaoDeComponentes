import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenusComponent } from './menus/menus.component';
import { HomeComponent } from './home/home.component';
import { MetodoComponent } from './metodo/metodo.component';
import { BlogComponent } from './blog/blog.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { routing } from './home/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MenusComponent,
    MenusComponent,
    HomeComponent,
    MetodoComponent,
    BlogComponent,
    SobreComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
