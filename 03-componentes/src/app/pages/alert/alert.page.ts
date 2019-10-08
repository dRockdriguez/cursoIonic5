import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  public title: string = 'Alert Page'
  constructor(
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  async showAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Alert Header',
      subHeader: 'Alert Subtitle',
      message: 'Alert Message.',
      inputs: [
        {
          name: 'txtTitle',
          type: 'text',
          placeholder: 'Inserte titulo aquí...'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'OK',
          handler: (data: any) => {
            this.title = data.txtTitle;
          }
        }
      ]
    });
    await alert.present();
  }

}
