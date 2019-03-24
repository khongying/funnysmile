import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  historyData:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public restProvider: RestProvider) {
  }

  ionViewDidLoad() {}

  ionViewWillEnter(){
    this.storage.get('data').then((data)=>{
        this.restProvider.historyPatient(data.id_patient).then((history) => {
          this._History(history)
        })
    });
  }
  _History(history){
    history.forEach(x => {
      x.date = this._DateThai(x.date)      
    })
    this.historyData = history;

  }
  

  _DateThai(strDate){
    var monthArrary = ["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."];
    return `${strDate.split("-")[2]}/${monthArrary[((strDate.split("-")[1]*1)-1)]}/${((strDate.split("-")[0]*1)+543)}`
  }

}
