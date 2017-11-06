import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'api.html'
})

export class APIPage {
  data:any = {};

  constructor(public navCtrl: NavController, public http: Http, public alertCtrl: AlertController) {
    this.data.input1 = '';
    this.data.input2 = '';
    this.data.response = '';

    this.http = http;
  }

  submit() {
    var input = {
      input1: this.data.input1,
      input2: this.data.input2
    };
    var api_key = '2a9abd3b380c10df6408c3c4024c8523';
    var link = 'https://api.openweathermap.org/data/2.5/weather?lat='+input['input2']+'&lon='+input['input1']+'&appid='+api_key;


    this.http.get(link, input)
        .subscribe(data => {
          this.data.response = JSON.parse(data["_body"]);
            const alert = this.alertCtrl.create({
                title: '該地區為: '+this.data.response['name'],
                subTitle: '該地氣溫為: '+ this.data.response['main'].temp+'℉',
                buttons: ['OK']
            });
            alert.present();
        }, error => {
          console.log("Oooops!");
        });
  }
}