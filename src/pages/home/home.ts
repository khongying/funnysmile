import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  no_card: String = ""
  no_card_patient: String = ""
  // no_card: String = "2147483647"
  // no_card_patient: String = "28-05"
  loading: boolean = true

  constructor(public navCtrl: NavController, public restProvider: RestProvider, private storage: Storage, public alertCtrl: AlertController) {

    storage.get('data').then((data) => {
      if (data.length != 0) {
        this.navCtrl.push("TabsPage")
      }
    });

  }


  ionViewWillEnter() {
    setTimeout(() => {
      this.loading = false
    }, 4000);
  }



  login() {
    if (this.no_card != "" && this.no_card_patient != "") {
      const data = {
        "no_card": this.no_card,
        "no_card_patient": this.no_card_patient
      }
      this.restProvider.authLogin(data).then((result: any) => {
        if (result.status) {
          this.storage.set("data", result.data).then((status) => {
            this.navCtrl.push("TabsPage")
          })
        } else {
          this.alertCtrl.create({
            title: "เข้าสู่ระบบไม่สำเร็จ",
            subTitle: "กรุณากรอกข้อมูลให้ถูกต้อง",
            buttons: ['OK']
          }).present();
        }
      }, (err) => {
        console.log(err);
      });
    } else {
      this.alertCtrl.create({
        title: "เข้าสู่ระบบไม่สำเร็จ",
        subTitle: "กรุณากรอกข้อมูล",
        buttons: ['OK']
      }).present();
    }

  }

}
