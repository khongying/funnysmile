import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  // apiUrl = 'http://127.0.0.1/funny_smile/index.php';
  apiUrl = 'http://www.funnysmilebsru.tk/index.php';    
    
  authLogin(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/auth/patient_login', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  appointment(id_patient) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/shifts/appointment/' + id_patient).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  check_shift(id_patient, date) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/shifts/check/' + id_patient + '/' + date).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  notification(id_patient, date){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/shifts/notification/' + id_patient + '/' + date).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  read(id){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/shifts/notificationread/' + id).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  historyPatient(id_patient) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/shifts/history_patient/' + id_patient).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  claim_shift(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/shifts/claim_shift', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  profile(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/patient/updatemobile', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

}
