import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

/**
 * Generated class for the AppointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appointment',
  templateUrl: 'appointment.html',
})
export class AppointmentPage {

  name_dentist: String = "";
  due_date: String = "";
  state: String = "";
  id_shifts: String = "";
  id_patient: String = "";
  id_dentist: String = "";
  block: String = "none";
  sliding_date: any;
  sliding_time: any;
  reason: any;
  task: any;
  swap: Boolean;
  swapNO: Boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public restProvider: RestProvider, public alertCtrl: AlertController, public localNotifications: LocalNotifications, public platform: Platform) {
  }

  ionViewDidLoad() {

  }

  setSound() {
    if (this.platform.is('android')) {
      return 'file://assets/sounds/Rooster.mp3'
    } else {
      return 'file://assets/sounds/Rooster.caf'
    }
  }

  _GetData() {
    this.storage.get('data').then((data) => {
      this.restProvider.appointment(data.id_patient).then((history) => {
        if (history[0]) {
          this.name_dentist = history[0].dentist_gender + " " + history[0].fname + " " + history[0].lname;
          this.due_date = this._DateThai(history[0].date) + " " + history[0].time;
          this.state = history[0].state;
          this.id_shifts = history[0].id_shifts;
          this.id_patient = history[0].id_patient;
          this.id_dentist = history[0].ref_dentist;
          this.swap = true
          this.swapNO = false
        } else {
          this.name_dentist = " "
          this.due_date = " "
          this.state = " "
          this.id_shifts = " "
          this.id_patient = " "
          this.id_dentist = " "
          this.swapNO = true
          this.swap = false
        }

      })
    });
  }

  ionViewWillEnter() {
    this._GetData()
    this.storage.get('data').then((data) => {
      let self = this;
      this.task = setInterval(function () {
        self._notofication();
      }, 1000);
    })
  }

  _notofication() {
    function pad(n) {
      return n < 10 ? '0' + n : n;
    }
    var currentDate = new Date();
    var date = currentDate.getDate();
    var month = currentDate.getMonth(); //Be careful! January is 0 not 1
    var year = currentDate.getFullYear();
    var dateString = `${year}-${pad(month + 1)}-${pad(date)}`
    this.restProvider.notification(this.id_patient, dateString).then((res) => {
      if (res) {
        this._checkNotification(res)
      }
    });
  }

  _checkNotification(data) {
    data.forEach(x => {
      if (x.status == "true") {
        this.localNotifications.schedule({
          text: x.text,
          led: 'FF0000',
          sound: this.setSound(),
        })
        this.restProvider.read(x.id)
      }
    })
  }

  _sliding() {
    if (this.state == "Postpone") {
      this._alert("ไม่สำเร็จ", "ยื่นคำร้องไปแล้ว")
      this.block = "none"
    } else {
      this.block = (this.block == "none") ? "block" : "none"
    }
  }

  _svae() {
    const data = {
      "ref_dentist_id": this.id_dentist,
      "ref_patient_id": this.id_patient,
      "date": this.sliding_date,
      "time": this.sliding_time,
      "reason": this.reason,
      "ref_id_shift": this.id_shifts
    }

    this.restProvider.claim_shift(data).then((res: any) => {
      if (res.status == true) {
        this._alert("สำเร็จ", res.message)
        this._GetData()
        this.block = "none"
      } else {
        this._alert("ไม่สำเร็จ", res.message)
        this.block = "none"
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

  _DateThai(strDate){
    var monthArrary = ["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."];
    return `${strDate.split("-")[2]}/${monthArrary[((strDate.split("-")[1]*1)-1)]}/${((strDate.split("-")[0]*1)+543)}`
  }


}
