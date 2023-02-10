import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css']
})
export class EditproyectoComponent implements OnInit {
proy:Proyecto=null;
  constructor(private sProyecto:ProyectoService,private activatedRuouter:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRuouter.snapshot.params['id'];
    this.sProyecto.detail(id).subscribe(data=>{
      this.proy=data;
    },err=>{
      alert("no se pudo actualizar el proyecto");
      this.router.navigate(['']);
    })
  }
  onUpdate():void{
    const id = this.activatedRuouter.snapshot.params['id'];
    this.sProyecto.update(id, this.proy).subscribe(data=>{
      this.router.navigate(['']);
    },erro=>{
      alert("error al editar el proyecto");
      this.router.navigate(['']);
    })
  }
}
