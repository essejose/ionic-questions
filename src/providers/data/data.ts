import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

 
@Injectable()
export class DataProvider {
  
  data: any;
  dataResult:any;

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  load(){
    
           if(this.data){ 
               console.log(this.data); 
               return Promise.resolve(this.data.questions);
           } 
           return new Promise(resolve => {
    
               this.http.get('assets/data/questions.json').subscribe(result => {
                   this.data = result;
                   resolve(this.data.questions);
               });
    
           });
    
  }

} 
