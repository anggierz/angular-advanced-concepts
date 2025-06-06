import { Component } from '@angular/core';
import { User } from '../../interfaces/User';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  data: User[] = [
    { id: 1, nombre: 'Juan Pérez', email: 'juan@mail.com', ciudad: 'Madrid', pais: 'España', telefono: '600111222', empresa: 'TechCorp', edad: 30 },
    { id: 2, nombre: 'Ana López', email: 'ana@mail.com', ciudad: 'Barcelona', pais: 'España', telefono: '600333444', empresa: 'InnovateX', edad: 28 },
    { id: 3, nombre: 'Carlos Ruiz', email: 'carlos@mail.com', ciudad: 'Valencia', pais: 'España', telefono: '600555666', empresa: 'SoftSolutions', edad: 35 },
    { id: 4, nombre: 'Marta Gil', email: 'marta@mail.com', ciudad: 'Sevilla', pais: 'España', telefono: '600777888', empresa: 'DataWave', edad: 29 },
    { id: 5, nombre: 'Luis Ramírez', email: 'luis@mail.com', ciudad: 'Bilbao', pais: 'España', telefono: '600999000', empresa: 'CyberNext', edad: 42 },
    { id: 6, nombre: 'Elena García', email: 'elena@mail.com', ciudad: 'Zaragoza', pais: 'España', telefono: '600121212', empresa: 'GreenTech', edad: 31 },
    { id: 7, nombre: 'Raúl Torres', email: 'raul@mail.com', ciudad: 'Murcia', pais: 'España', telefono: '600232323', empresa: 'Skyline Inc', edad: 33 },
    { id: 8, nombre: 'Carmen Díaz', email: 'carmen@mail.com', ciudad: 'Alicante', pais: 'España', telefono: '600343434', empresa: 'NextGen', edad: 27 },
    { id: 9, nombre: 'Jorge León', email: 'jorge@mail.com', ciudad: 'Gijón', pais: 'España', telefono: '600454545', empresa: 'Cloudify', edad: 39 },
    { id: 10, nombre: 'Patricia Vega', email: 'patricia@mail.com', ciudad: 'Granada', pais: 'España', telefono: '600565656', empresa: 'BlueOcean', edad: 36 },
    { id: 11, nombre: 'Miguel Soto', email: 'miguel@mail.com', ciudad: 'Oviedo', pais: 'España', telefono: '600676767', empresa: 'UrbanWorks', edad: 41 },
    { id: 12, nombre: 'Laura Cano', email: 'laura@mail.com', ciudad: 'Salamanca', pais: 'España', telefono: '600787878', empresa: 'CoreTech', edad: 26 },
    { id: 13, nombre: 'Alberto Mora', email: 'alberto@mail.com', ciudad: 'Cádiz', pais: 'España', telefono: '600898989', empresa: 'BrightLabs', edad: 38 },
    { id: 14, nombre: 'Natalia Ríos', email: 'natalia@mail.com', ciudad: 'Valladolid', pais: 'España', telefono: '600909090', empresa: 'EdgeWare', edad: 32 },
    { id: 15, nombre: 'David Sánchez', email: 'david@mail.com', ciudad: 'La Coruña', pais: 'España', telefono: '600101010', empresa: 'InnovaLabs', edad: 34 }
  ];

  public doShowOrHide: boolean = false;
  public changeStyle: boolean = false;

  public showHideColumns(): void {
    this.doShowOrHide = !this.doShowOrHide;
    this.changeStyle = !this.changeStyle;
  }

}
