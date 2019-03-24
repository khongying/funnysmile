webpackJsonp([4],{

/***/ 201:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 201;

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/appointment/appointment.module": [
		515,
		3
	],
	"../pages/history/history.module": [
		516,
		2
	],
	"../pages/profile/profile.module": [
		518,
		1
	],
	"../pages/tabs/tabs.module": [
		517,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 242;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, restProvider, storage, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.restProvider = restProvider;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.no_card = "";
        this.no_card_patient = "";
        // no_card: String = "2147483647"
        // no_card_patient: String = "28-05"
        this.loading = true;
        storage.get('data').then(function (data) {
            if (data.length != 0) {
                _this.navCtrl.push("TabsPage");
            }
        });
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.loading = false;
        }, 4000);
    };
    HomePage.prototype.login = function () {
        var _this = this;
        if (this.no_card != "" && this.no_card_patient != "") {
            var data = {
                "no_card": this.no_card,
                "no_card_patient": this.no_card_patient
            };
            this.restProvider.authLogin(data).then(function (result) {
                if (result.status) {
                    _this.storage.set("data", result.data).then(function (status) {
                        _this.navCtrl.push("TabsPage");
                    });
                }
                else {
                    _this.alertCtrl.create({
                        title: "เข้าสู่ระบบไม่สำเร็จ",
                        subTitle: "กรุณากรอกข้อมูลให้ถูกต้อง",
                        buttons: ['OK']
                    }).present();
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.alertCtrl.create({
                title: "เข้าสู่ระบบไม่สำเร็จ",
                subTitle: "กรุณากรอกข้อมูล",
                buttons: ['OK']
            }).present();
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/khongyingkhunkhet/Documents/funny_smile/src/pages/home/home.html"*/'<ion-content  style="background-image: url(assets/imgs/bg.jpg);background-position: center;background-repeat: no-repeat;background-size: cover;">\n  <div id="custom-overlay" *ngIf="loading">\n      <div class="flb">\n        <div class="Aligner-item Aligner-item--top"></div>\n        <img src="assets/imgs/login.png" style="height: 22%;"/>\n        <!-- <h1 style="font-size: 35px;color:beige">FunnySmile</h1> -->\n        <div class="Aligner-item Aligner-item--bottom"></div>\n      </div>\n    </div>\n  <div style="text-align: center">\n    <img src="assets/imgs/login.png" width="50%" height="40%" style="margin-top: 100px" />\n  </div>\n  <div style="padding: 5px;border-radius: 2px;">\n\n\n    <ion-item class="box-login">\n      <ion-label>\n        <ion-icon style="color: aliceblue" ios="ios-person" md="md-person"></ion-icon>\n      </ion-label>\n      <ion-input type="text" id="no_card" [(ngModel)]="no_card" class="text-login"></ion-input>\n    </ion-item>\n    <ion-item class="box-login" style="margin-top: 5px">\n      <ion-label>\n        <ion-icon style="color: aliceblue" ios="ios-card" md="md-card"></ion-icon>\n      </ion-label>\n      <ion-input type="text" id="no_card_patient"  [(ngModel)]="no_card_patient" class="text-login"></ion-input>\n    </ion-item>\n\n\n    <button ion-button full style="border-radius: 50px" (click)="login()">เข้าสู่ระบบ</button>\n  </div>\n  \n\n\n\n  \n</ion-content>'/*ion-inline-end:"/Users/khongyingkhunkhet/Documents/funny_smile/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__ = __webpack_require__(244);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AppointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AppointmentPage = /** @class */ (function () {
    function AppointmentPage(navCtrl, navParams, storage, restProvider, alertCtrl, localNotifications, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.restProvider = restProvider;
        this.alertCtrl = alertCtrl;
        this.localNotifications = localNotifications;
        this.platform = platform;
        this.name_dentist = "";
        this.due_date = "";
        this.state = "";
        this.id_shifts = "";
        this.id_patient = "";
        this.id_dentist = "";
        this.block = "none";
    }
    AppointmentPage.prototype.ionViewDidLoad = function () {
    };
    AppointmentPage.prototype.setSound = function () {
        if (this.platform.is('android')) {
            return 'file://assets/sounds/Rooster.mp3';
        }
        else {
            return 'file://assets/sounds/Rooster.caf';
        }
    };
    AppointmentPage.prototype._GetData = function () {
        var _this = this;
        this.storage.get('data').then(function (data) {
            _this.restProvider.appointment(data.id_patient).then(function (history) {
                if (history[0]) {
                    _this.name_dentist = history[0].dentist_gender + " " + history[0].fname + " " + history[0].lname;
                    _this.due_date = _this._DateThai(history[0].date) + " " + history[0].time;
                    _this.state = history[0].state;
                    _this.id_shifts = history[0].id_shifts;
                    _this.id_patient = history[0].id_patient;
                    _this.id_dentist = history[0].ref_dentist;
                    _this.swap = true;
                    _this.swapNO = false;
                }
                else {
                    _this.name_dentist = " ";
                    _this.due_date = " ";
                    _this.state = " ";
                    _this.id_shifts = " ";
                    _this.id_patient = " ";
                    _this.id_dentist = " ";
                    _this.swapNO = true;
                    _this.swap = false;
                }
            });
        });
    };
    AppointmentPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this._GetData();
        this.storage.get('data').then(function (data) {
            var self = _this;
            _this.task = setInterval(function () {
                self._notofication();
            }, 1000);
        });
    };
    AppointmentPage.prototype._notofication = function () {
        var _this = this;
        function pad(n) {
            return n < 10 ? '0' + n : n;
        }
        var currentDate = new Date();
        var date = currentDate.getDate();
        var month = currentDate.getMonth(); //Be careful! January is 0 not 1
        var year = currentDate.getFullYear();
        var dateString = year + "-" + pad(month + 1) + "-" + pad(date);
        this.restProvider.notification(this.id_patient, dateString).then(function (res) {
            if (res) {
                _this._checkNotification(res);
            }
        });
    };
    AppointmentPage.prototype._checkNotification = function (data) {
        var _this = this;
        data.forEach(function (x) {
            if (x.status == "true") {
                _this.localNotifications.schedule({
                    text: x.text,
                    led: 'FF0000',
                    sound: _this.setSound(),
                });
                _this.restProvider.read(x.id);
            }
        });
    };
    AppointmentPage.prototype._sliding = function () {
        if (this.state == "Postpone") {
            this._alert("ไม่สำเร็จ", "ยื่นคำร้องไปแล้ว");
            this.block = "none";
        }
        else {
            this.block = (this.block == "none") ? "block" : "none";
        }
    };
    AppointmentPage.prototype._svae = function () {
        var _this = this;
        var data = {
            "ref_dentist_id": this.id_dentist,
            "ref_patient_id": this.id_patient,
            "date": this.sliding_date,
            "time": this.sliding_time,
            "reason": this.reason,
            "ref_id_shift": this.id_shifts
        };
        this.restProvider.claim_shift(data).then(function (res) {
            if (res.status == true) {
                _this._alert("สำเร็จ", res.message);
                _this._GetData();
                _this.block = "none";
            }
            else {
                _this._alert("ไม่สำเร็จ", res.message);
                _this.block = "none";
            }
        });
    };
    AppointmentPage.prototype._alert = function (title, message) {
        this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    AppointmentPage.prototype._DateThai = function (strDate) {
        var monthArrary = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
        return strDate.split("-")[2] + "/" + monthArrary[((strDate.split("-")[1] * 1) - 1)] + "/" + ((strDate.split("-")[0] * 1) + 543);
    };
    AppointmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-appointment',template:/*ion-inline-start:"/Users/khongyingkhunkhet/Documents/funny_smile/src/pages/appointment/appointment.html"*/'<!--\n  Generated template for the AppointmentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title  id="main">Funny Smile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding style="background-image: url(assets/imgs/bg.jpg);background-position: center;background-repeat: no-repeat;background-size: cover;">\n  <ion-card *ngIf="swapNO">\n      <ion-item>\n          <span style="font-size: 30px;  color: #0066ff;"> ไม่การมีนัดรักษา</span>\n      </ion-item>\n  </ion-card>\n  <ion-card *ngIf="swap">\n    <ion-item>\n        <ion-label class="head_title">\n          <span style="font-size: 30px;  color: #0066ff;"> ใบนัดการรักษา</span>\n        </ion-label>\n    </ion-item>\n\n    <ion-item class="sub_title">\n      <ion-icon name="md-calendar" item-start large></ion-icon>\n      <h3>{{due_date}}</h3>\n    </ion-item>\n  \n    <ion-item class="sub_title">\n      <ion-icon name="ios-person" item-start large ></ion-icon>\n      <h3>{{name_dentist}}</h3>\n    </ion-item>\n\n    <ion-item class="sub_title"> \n      <ion-icon name="md-stats" item-start large></ion-icon> \n      <h3>{{state}}</h3>\n    </ion-item>\n  \n    <ion-item>\n      <button (click)="_sliding()" class="button"  item-end ion-button round>\n        <ion-icon name="md-swap"></ion-icon>\n        &nbsp;เลื่อนนัด\n      </button>\n    </ion-item>\n  \n  </ion-card>\n  \n  <div [ngStyle]="{\'display\': block}">\n    <ion-card>\n        <ion-item>\n            <ion-label class="head_title">\n                <span style="font-size: 30px;  color: #0066ff;"> เลื่อนนัด</span>\n              </ion-label>\n        </ion-item>\n      \n        <ion-item class="sub_title">\n          <ion-icon name="md-calendar" item-start large ></ion-icon>\n          <ion-datetime displayFormat="DD/MMM/YYYY" [(ngModel)]="sliding_date" placeholder="Select Date"></ion-datetime>\n        </ion-item>\n    \n        <ion-item class="sub_title">\n          <ion-label>Time</ion-label>\n          <ion-select [(ngModel)]="sliding_time" style="width: 500px;">\n            <ion-option disabled="true" selected="true" value=" ">กรุณาเลือก</ion-option>\n            <ion-option value="10.00-10.30">10.00-10.30</ion-option>\n            <ion-option value="10.30-11.00">10.30-11.00</ion-option>\n            <ion-option value="11.00-11.30">11.00-11.30</ion-option>\n            <ion-option value="11.30-12.00">11.30-12.00</ion-option>\n            <ion-option value="12.00-12.30">12.00-12.30</ion-option>\n            <ion-option value="12.30-13.00">12.30-13.00</ion-option> \n            <ion-option value="13.00-13.30">13.00-13.30</ion-option>\n            <ion-option value="13.30-14.00">13.30-14.00</ion-option>\n            <ion-option value="14.00-14.30">14.00-14.30</ion-option>\n            <ion-option value="14.30-15.00">14.30-15.00</ion-option>\n            <ion-option value="15.00-15.30">15.00-15.30</ion-option>\n            <ion-option value="15.30-16.00">15.30-16.00</ion-option>\n            <ion-option value="16.00-16.30">16.00-16.30</ion-option>\n            <ion-option value="16.30-17.00">16.30-17.00</ion-option>\n            <ion-option value="17.00-17.30">17.00-17.30</ion-option>\n            <ion-option value="17.30-18.00">17.30-18.00</ion-option>\n            <ion-option value="18.00-18.30">18.00-18.30</ion-option>\n            <ion-option value="18.30-19.00">18.30-19.00</ion-option>\n            <ion-option value="19.00-19.30">19.00-19.30</ion-option>\n            <ion-option value="19.30-20.00">19.30-20.00</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item class="sub_title">\n            <ion-label>เหตุผล</ion-label>\n            <ion-textarea [(ngModel)]="reason" placeholder="Please enter"></ion-textarea>\n        </ion-item>\n      \n        <ion-item>\n            <button (click)="_svae()" class="button"  item-end ion-button round color="secondary">\n              <ion-icon name="md-checkmark-circle"></ion-icon>&nbsp;ยืนยัน\n            </button>\n        </ion-item>\n      \n      </ion-card>\n  </div>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/khongyingkhunkhet/Documents/funny_smile/src/pages/appointment/appointment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], AppointmentPage);
    return AppointmentPage;
}());

//# sourceMappingURL=appointment.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoryPage = /** @class */ (function () {
    function HistoryPage(navCtrl, navParams, storage, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.restProvider = restProvider;
    }
    HistoryPage.prototype.ionViewDidLoad = function () { };
    HistoryPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('data').then(function (data) {
            _this.restProvider.historyPatient(data.id_patient).then(function (history) {
                _this._History(history);
            });
        });
    };
    HistoryPage.prototype._History = function (history) {
        var _this = this;
        history.forEach(function (x) {
            x.date = _this._DateThai(x.date);
        });
        this.historyData = history;
    };
    HistoryPage.prototype._DateThai = function (strDate) {
        var monthArrary = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
        return strDate.split("-")[2] + "/" + monthArrary[((strDate.split("-")[1] * 1) - 1)] + "/" + ((strDate.split("-")[0] * 1) + 543);
    };
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"/Users/khongyingkhunkhet/Documents/funny_smile/src/pages/history/history.html"*/'<!--\n  Generated template for the HistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n        <ion-title  id="main">Funny Smile</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="page" padding style="background-image: url(assets/imgs/bg.jpg);background-position: center;background-repeat: no-repeat;background-size: cover;">\n  <span style="font-size: 30px;  color: #0066ff;"> ประวัติการรักษา</span>\n  <ion-card *ngFor="let item of historyData">\n    <ion-card-header>\n        <ion-icon name="md-medkit" class="medkit"></ion-icon> : {{item.reason}}\n        <p> <ion-icon name="md-alarm" class="alarm"></ion-icon> : {{item.date}} {{item.time}}</p>\n        <p><ion-icon name="ios-person"></ion-icon> : {{item.dentist_gender}} {{item.fname}} {{item.lname}}</p>\n        <p class="{{item.state}}"><ion-icon name="md-stats"></ion-icon> : {{item.state}}</p>      \n    </ion-card-header>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/khongyingkhunkhet/Documents/funny_smile/src/pages/history/history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, app, storage, restProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.storage = storage;
        this.restProvider = restProvider;
        this.alertCtrl = alertCtrl;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('data').then(function (data) {
            _this.id_patient = data.id_patient;
            _this.no_card = data.no_card;
            _this.no_card_patient = data.no_card_patient;
            _this.full_name = data.full_name;
            _this.phone = data.phone;
            _this.be_allergic = data.be_allergic;
        });
    };
    ProfilePage.prototype._logout = function () {
        localStorage.clear();
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    ProfilePage.prototype._save = function () {
        var _this = this;
        var data = {
            "id_patient": this.id_patient,
            "full_name": this.full_name,
            "phone": this.phone,
            "be_allergic": this.be_allergic
        };
        this.restProvider.profile(data).then(function (res) {
            if (res.status == true) {
                _this._alert("สำเร็จ", res.message);
                _this._GetData();
            }
            else {
                _this._alert("ไม่สำเร็จ", res.message);
            }
        });
    };
    ProfilePage.prototype._alert = function (title, message) {
        this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    ProfilePage.prototype._GetData = function () {
        var _this = this;
        this.restProvider.appointment(this.id_patient).then(function (history) {
            if (history[0]) {
                _this.storage.set('data', history[0]);
            }
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/khongyingkhunkhet/Documents/funny_smile/src/pages/profile/profile.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title  id="main">Funny Smile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="page" padding\n  style="background-image: url(assets/imgs/bg.jpg);background-position: center;background-repeat: no-repeat;background-size: cover;">\n  <span style="font-size: 30px;  color: #0066ff;"> โปรไฟล์</span>\n\n  <ion-item>\n    <ion-label>ID</ion-label>\n    <ion-input type="text" [(ngModel)]="no_card" readonly></ion-input>\n  </ion-item>\n  <br />\n  <ion-item>\n    <ion-label>\n      <ion-icon name="card"></ion-icon>\n    </ion-label>\n    <ion-input type="text" [(ngModel)]="no_card_patient" readonly></ion-input>\n  </ion-item>\n  <br />\n  <ion-item>\n    <ion-label>\n      <ion-icon name="person"></ion-icon>\n    </ion-label>\n    <ion-input type="text" [(ngModel)]="full_name"></ion-input>\n  </ion-item>\n  <br />\n  <ion-item>\n    <ion-label>\n      <ion-icon name="call"></ion-icon>\n    </ion-label>\n    <ion-input type="text" [(ngModel)]="phone"></ion-input>\n  </ion-item>\n  <br />\n  <ion-item>\n    <ion-label>\n      <ion-icon name="medkit"></ion-icon>\n    </ion-label>\n    <ion-textarea [(ngModel)]="be_allergic"></ion-textarea>\n  </ion-item>\n  <br />\n  <button (click)="_save()" ion-button full favourite>\n    <ion-icon name="checkmark-circle"></ion-icon>&nbsp; Update\n  </button>\n  <br />\n  <button (click)="_logout()" ion-button full favourite color="danger">\n    <ion-icon name="power"></ion-icon>&nbsp; Log out\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/khongyingkhunkhet/Documents/funny_smile/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(468);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_rest_rest__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_history_history__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_appointment_appointment__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_local_notifications__ = __webpack_require__(244);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_appointment_appointment__["a" /* AppointmentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/appointment/appointment.module#AppointmentPageModule', name: 'AppointmentPage', segment: 'appointment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/history/history.module#HistoryPageModule', name: 'HistoryPage', segment: 'history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_appointment_appointment__["a" /* AppointmentPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_local_notifications__["a" /* LocalNotifications */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/khongyingkhunkhet/Documents/funny_smile/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/khongyingkhunkhet/Documents/funny_smile/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = /** @class */ (function () {
    function RestProvider(http) {
        this.http = http;
        // apiUrl = 'http://127.0.0.1/funny_smile/index.php';
        this.apiUrl = 'http://www.funnysmilebsru.tk/index.php';
        console.log('Hello RestProvider Provider');
    }
    RestProvider.prototype.authLogin = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/auth/patient_login', JSON.stringify(data))
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.appointment = function (id_patient) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/shifts/appointment/' + id_patient).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.check_shift = function (id_patient, date) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/shifts/check/' + id_patient + '/' + date).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.notification = function (id_patient, date) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/shifts/notification/' + id_patient + '/' + date).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.read = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/shifts/notificationread/' + id).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.historyPatient = function (id_patient) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/shifts/history_patient/' + id_patient).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.claim_shift = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/shifts/claim_shift', JSON.stringify(data))
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.profile = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/patient/updatemobile', JSON.stringify(data))
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], RestProvider);
    return RestProvider;
    var _a;
}());

//# sourceMappingURL=rest.js.map

/***/ })

},[291]);
//# sourceMappingURL=main.js.map