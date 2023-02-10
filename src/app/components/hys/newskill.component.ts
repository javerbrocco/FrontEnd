import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-newskill',
  templateUrl: './newskill.component.html',
  styleUrls: ['./newskill.component.css']
})
export class NewskillComponent implements OnInit {
nombre:string;
porcentaje:number;
imagen:string;
  constructor(private skillS: SkillService, private router:Router) { }

  ngOnInit(): void {
  }
  onCreate():void{
const skill = new Skill(this.nombre, this.porcentaje,this.imagen);
this.skillS.save(skill).subscribe(
  data=>{
    alert("Skill creada con exito");
    this.router.navigate(['']);
  }, err=>{
    alert("no se genero la skll");
    this.router.navigate(['']);
  }
)
  }
  
  
}
