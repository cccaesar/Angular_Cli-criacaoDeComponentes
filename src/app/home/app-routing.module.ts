import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { ContatoComponent } from '../contato/contato.component';
import { SobreComponent } from '../sobre/sobre.component';
import { MetodoComponent } from '../metodo/metodo.component';
import { BlogComponent } from '../blog/blog.component';


const APP_ROUTES: Routes = [
    { path: 'blog', component: BlogComponent },
    { path: 'metodo', component: MetodoComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'contato', component: ContatoComponent },
    { path: '', component: HomeComponent }
]

export const routing = RouterModule.forRoot(APP_ROUTES);
