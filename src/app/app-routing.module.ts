import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importación de componentes
import { AuthPostulanteComponent } from './pages/auth-postulante/auth-postulante.component';
import { RegisterPostulanteComponent } from './pages/register-postulante/register-postulante.component';

const routes: Routes = [
  {
    path: 'auth/postulante',
    component: AuthPostulanteComponent
  },
  {
    path: 'register/postulante',
    component: RegisterPostulanteComponent
  },
  {
    path: '**',
    redirectTo: 'auth/postulante'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
