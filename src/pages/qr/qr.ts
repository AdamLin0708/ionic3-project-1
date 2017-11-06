import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions  } from '@ionic-native/barcode-scanner';
import { InAppBrowser, InAppBrowserOptions  } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-qr',
  templateUrl: 'qr.html',
})
export class QrPage {
    data:any = {};
    scannedCode = null;
    options :BarcodeScannerOptions;

    constructor(public navCtrl: NavController,private barcodeScanner: BarcodeScanner, public alertCtrl: AlertController
    , private inAppBrowser: InAppBrowser) {
        this.data.input = '';
    }

    scanCode() {
        this.options = {
            prompt: "請掃描條碼"
        }

        this.barcodeScanner.scan(this.options).then(barcodeData => {
            if(barcodeData.text != ""){
                this.scannedCode = barcodeData.text;
                let alert = this.alertCtrl.create({
                    title: '打開連結',
                    message: '確定要打開此連結 '+ this.scannedCode + '?',
                    buttons: [
                        {
                            text: 'No',
                            role: 'cancel',
                            handler: () => {
                                console.log('Cancel clicked');
                            }
                        },
                        {
                            text: 'Yes',
                            handler: () => {
                                const url_options: InAppBrowserOptions = {
                                    zoom: 'no',
                                    hidden: 'no'
                                };

                                const browser = this.inAppBrowser.create(this.scannedCode, '_system', url_options);
                                browser.show();
                            }
                        }
                    ]
                });
                alert.present();
            }
        }, (err) => {
            console.log('Error: ', err);
        });
    }

    openUrl(){
        const url_options: InAppBrowserOptions = {
            zoom: 'no'
        };
        if(this.data.input != ""){
            const browser = this.inAppBrowser.create(this.data.input, '_system', url_options);
            browser.show();
        }
        else{
            let alert = this.alertCtrl.create({
                title: '系統通知',
                message: '請輸入網址',
                buttons: [
                    {
                        text: 'OK',
                        role: 'OK',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            alert.present();
        }
    }
}
