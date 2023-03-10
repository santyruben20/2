import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { listarModel } from '../models/listar.model';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {
 
  readonly Api_url: string = 'http://172.31.5.24:8080/WSSIIEPN/webresources/SilaboEPN/carga/0501553408/2022/2';
  readonly Api_url1: string = 'http://172.31.5.24:8080/WSSIIEPN/webresources/SilaboEPN/carga/1717677007/2022/2';
  constructor(private httpClient : HttpClient) {
    
   }
    //listar//
   
    getAll():Observable<listarModel[]>{
      const url = `${this.Api_url}`;
      const response = this.httpClient.get<listarModel[]>(url)
      return response 
     }

     getAll1():Observable<listarModel[]>{
      const url = `${this.Api_url1}`;
      const response = this.httpClient.get<listarModel[]>(url)
      return response 
     }

}
