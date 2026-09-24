import { Component } from '@angular/core';

@Component({
  selector: 'app-figuras',
  standalone: false,
  styleUrl: './figuras.css',
  templateUrl: './figuras.html',
})
export class Figuras {
  num1: string = ''; 
  num2: string = ''; 
  resultado: number = 0;
  operacion: string = ''; 

  calcular(): void {

    if (this.operacion === 'triangulo') {
      this.resultado = parseFloat(this.num1) * parseFloat(this.num1)/ 2; 
    }

    if (this.operacion === 'rectangulo') {
      this.resultado = parseFloat(this.num1) * parseFloat(this.num2); 
    }

    if (this.operacion === 'circulo') {
      this.resultado = Math.PI * Math.pow(parseFloat(this.num1), 2);
    }

    if (this.operacion === 'pentagono') {
      this.resultado = (parseFloat(this.num1) * parseFloat(this.num2)) / 2; 
    }
  }
}
