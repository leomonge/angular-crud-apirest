import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  listUsuarios: Usuario[] = [
    {id: 1, nombre: 'Juan', apellido: 'Perez'},
    {id: 2, nombre: 'Manel', apellido: 'Perez'},
    {id: 3, nombre: 'Pedro', apellido: 'Perez'},
    {id: 4, nombre: 'Martin', apellido: 'Perez'},
  ];

  constructor() { }

  getUsuario() {
    return this.listUsuarios.slice();
  }
 
  eliminarUsuario(id: number) {
    this.listUsuarios.splice(id, 1)
  }
}
