import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HistoryPage } from '../history/history';
import { ProfilePage } from '../profile/profile';
import { AppointmentPage } from '../appointment/appointment';
/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1:any;
  tab2:any;
  tab3:any;
  constructor(public navCtrl: NavController) {
    this.tab1 = AppointmentPage;
    this.tab2 = HistoryPage;
    this.tab3 = ProfilePage;
  }
  
}
