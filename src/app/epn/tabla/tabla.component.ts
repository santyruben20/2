import { Component, OnInit } from '@angular/core';
import { listarModel } from '../models/listar.model';
import { ListServiceService } from '../services/listService.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit{
  ngOnInit(): void { 
    this.listarT()
    this.lisstarT2()
  }
  tabla : listarModel[]=[]
  constructor (private ListServiceService: ListServiceService ){
  }
  async lisstarT2(){
    const response = this.ListServiceService.getAll1().subscribe(response=>{  
      this.tabla=response;
      console.log(this.tabla)})
  }
  async listarT(){
    const response = this.ListServiceService.getAll().subscribe(response=>{  
      this.tabla=response;
      console.log(this.tabla)})
  }
 
}
