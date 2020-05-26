import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public title = new BehaviorSubject<string>("meow");

  constructor(private httpClient:HttpClient) { }


  public retrieveBackground():Promise<any>{
    return new Promise( (resolve, reject) => {
      var collectionsFilters ='&collections=487395';
      var url = 'https://api.unsplash.com/photos/random?count=1&orientation=landscape&featured=true'+collectionsFilters;
      var httpOptions = {
        headers: new HttpHeaders({ 'Authorization': 'Client-ID yVj7NOtnsdyv7uTnorWlxEP4IwDOEDPUnqYrBI0W0Qg' })
      };
      this.httpClient.get(url, httpOptions).subscribe( (data) => {
        if (data){
          resolve({
            urls : {
              regular: data[0].urls.regular,
              full: data[0].urls.full,
              raw : data[0].urls.raw
            },
            links : {
              html : data[0].links.html
            },
            user :{
              name : data[0].user.name,
              html : data[0].user.links.html

            },
            description : data[0].description ? data[0].description : data[0].alt_description
          });
        }
      });
    });
  }
}
