import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {

  constructor(private datosPortfolio:PortfolioService) { }
  educacionList:any
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data=>{
      this.educacionList=data.educacion
    })
  }

}
