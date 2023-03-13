import { Component, OnInit } from '@angular/core';
import { listarModel } from '../models/listar.model';
import { ListServiceService } from '../service/listService.service';
import { MenuItem } from 'primeng/api';
import { CellEditor } from 'primeng/table';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  
  listarModel: listarModel[]=[];
  
  getEventValue($event:any) :string {
    return $event.target.value;}

  ngOnInit(): void { 
    this.Datos
    this.listarT()
  }

  constructor (private ListServiceService: ListServiceService ){
  }
 
    
  listarT(){
    const response = this.ListServiceService.getAll().subscribe(response=>{  
      this.listarModel=response;
      console.log(this.listarModel)})
  }

  Datos(cedula: string) {
    this.ListServiceService.datos(cedula).subscribe((response: listarModel[]) => {
        this.listarModel = response;
      });
    console.log(this.listarModel);
  }
}






 



