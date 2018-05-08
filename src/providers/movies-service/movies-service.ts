import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the MoviesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoviesServiceProvider {
  
  data: any;
  dataResult:any;

  constructor(public http: HttpClient) {
    console.log('Hello MoviesServiceProvider Provider');
  }

  loadMovies(){

          if(this.data){
               return Promise.resolve(this.data.modulos);
          } 
          
          return new Promise(resolve => {
    
               this.http.get('assets/data/movies.json').subscribe(result => {
                   this.data = result;
                   resolve(this.data.modulos);
               });
    
           });

  }

}
