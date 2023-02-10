import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {
nombre:string ='';
descripcion:string='';
  constructor(private sProyecto:ProyectoService, private router:Router) { }

  ngOnInit(): void {
  }
  onCreate():void{
    const proy = new Proyecto(this.nombre, this.descripcion);
    this.sProyecto.save(proy).subscribe(data=>
      {
        alert("proyecto añadido");
        this.router.navigate(['']);
      },err=>{
        alert("fallo en la creacion del proyecto");
        this.router.navigate(['']);
      }
    )
  }

}
