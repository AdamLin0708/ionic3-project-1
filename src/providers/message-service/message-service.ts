import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

/*
  Generated class for the MessageServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MessageServiceProvider {

  private url: string = "http://aysuveda.app/testapi";
  private data: string = "I am using api calling";

  constructor(private http: Http) {
    console.log('Hello MessageServiceProvider Provider');
  }

  postMessages(){
    return this.http.post(this.url, this.data)
        .do(res => console.log(this.data));
  }


}
