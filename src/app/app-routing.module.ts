import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducaccionComponent } from './components/educacion/editeducaccion.component';
import { NeweducaccionComponent } from './components/educacion/neweducaccion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { EditskillComponent } from './components/hys/editskill.component';
import { NewskillComponent } from './components/hys/newskill.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'nuevaexp',component: NewExperienciaComponent} ,
{path:'editexp/:id',component:EditExperienciaComponent},
{path:'nuevaedu',component:NeweducaccionComponent},
{path:'editedu/:id',component:EditeducaccionComponent},
{path:'newskill',component:NewskillComponent},
{path:'editskill/:id',component:EditskillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
