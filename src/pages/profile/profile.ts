import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  id_patient: any;
  no_card: any;
  no_card_patient: any;
  full_name: any;
  phone: any;
  be_allergic: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, private storage: Storage, public restProvider: RestProvider, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.storage.get('data').then((data) => {
      this.id_patient = data.id_patient;
      this.no_card = data.no_card;
      this.no_card_patient = data.no_card_patient;
      this.full_name = data.full_name;
      this.phone = data.phone;
      this.be_allergic = data.be_allergic;
    });
  }

  _logout() {
    localStorage.clear()
    const root = this.app.getRootNav();
    root.popToRoot();
  }

  _save() {
    const data = {
      "id_patient": this.id_patient,
      "full_name": this.full_name,
      "phone": this.phone,
      "be_allergic": this.be_allergic
    }
    this.restProvider.profile(data).then((res: any) => {
      if (res.status == true) {
        this._alert("สำเร็จ", res.message)
        this._GetData()
      } else {
        this._alert("ไม่สำเร็จ", res.message)
      }
    })

  }

  _alert(title, message) {
    this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  _GetData() {
    this.restProvider.appointment(this.id_patient).then((history) => {
      if (history[0]) {
        this.storage.set('data', history[0])
      }
    })
  }


}
