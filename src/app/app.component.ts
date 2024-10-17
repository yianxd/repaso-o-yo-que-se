import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Gestion(?)';
  mensaje = ""
  registro=false

  empleados:Empleado[]=[
    new Empleado("Juan","Diaz","Cargo1")
  ]

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  
  agregar(){

    let newEmpleado = new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo)
    this.empleados.push(newEmpleado);

    this.registro= true
    this.mensaje="Empleado registrado"
  }
}
