import { Component, OnInit } from '@angular/core';
import { Componente } from '../../interfaces/componente';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente [] = [];
  constructor() { }

  ngOnInit() {
    this.componentes.push(
      {
        icon: 'appstore',
        name: 'Alert',
        redirectTo: '/alert'
      }
    );
    this.componentes.push(
      {
        icon: 'american-football',
        name: 'Action Sheet',
        redirectTo: '/action-sheet'
      }
    );
  }

}