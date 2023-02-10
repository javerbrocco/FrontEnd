import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { EditacercadeComponent } from './components/acerca-de/editacercade.component';
import { EditeducaccionComponent } from './components/educacion/editeducaccion.component';
import { NeweducaccionComponent } from './components/educacion/neweducaccion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { EditskillComponent } from './components/hys/editskill.component';
import { NewskillComponent } from './components/hys/newskill.component';
import { LoginComponent } from './components/login/login.component';
import { EditproyectoComponent } from './components/proyecto/editproyecto.component';
import { NewproyectoComponent } from './components/proyecto/newproyecto.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'nuevaexp',component: NewExperienciaComponent} ,
{path:'editexp/:id',component:EditExperienciaComponent},
{path:'nuevaedu',component:NeweducaccionComponent},
{path:'editedu/:id',component:EditeducaccionComponent},
{path:'newskill',component:NewskillComponent},
{path:'editskill/:id',component:EditskillComponent},
{path:'editacercade/:id',component:EditacercadeComponent},
{path:'nuevaproy',component:NewproyectoComponent},
{path:'editproy/:id',component:EditproyectoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
