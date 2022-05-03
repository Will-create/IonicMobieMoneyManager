"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_deposits_pending_pending_module_ts"],{

/***/ 1879:
/*!************************************************************!*\
  !*** ./src/app/deposits/pending/pending-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PendingPageRoutingModule": () => (/* binding */ PendingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _pending_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pending.page */ 6525);




const routes = [
    {
        path: '',
        component: _pending_page__WEBPACK_IMPORTED_MODULE_0__.PendingPage
    }
];
let PendingPageRoutingModule = class PendingPageRoutingModule {
};
PendingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PendingPageRoutingModule);



/***/ }),

/***/ 61304:
/*!****************************************************!*\
  !*** ./src/app/deposits/pending/pending.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PendingPageModule": () => (/* binding */ PendingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _pending_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pending-routing.module */ 1879);
/* harmony import */ var _pending_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pending.page */ 6525);








let PendingPageModule = class PendingPageModule {
};
PendingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _pending_routing_module__WEBPACK_IMPORTED_MODULE_0__.PendingPageRoutingModule
        ],
        declarations: [_pending_page__WEBPACK_IMPORTED_MODULE_1__.PendingPage]
    })
], PendingPageModule);



/***/ }),

/***/ 6525:
/*!**************************************************!*\
  !*** ./src/app/deposits/pending/pending.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PendingPage": () => (/* binding */ PendingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _pending_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pending.page.html?ngResource */ 66929);
/* harmony import */ var _pending_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pending.page.scss?ngResource */ 29895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/helper.models */ 71220);









let PendingPage = class PendingPage {
    constructor(toastCtrl, builder, router, http) {
        this.toastCtrl = toastCtrl;
        this.builder = builder;
        this.router = router;
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json' })
        };
        this.currentUser = src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__.Helper.getUserProfile();
        this.baseUrl = src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__.Helper.getApiHostname();
        if (this.router.getCurrentNavigation().extras.state) {
            this.previous = this.router.getCurrentNavigation().extras.state;
        }
        this.finalForm = this.builder.group({
            sms: ''
        });
        this.start();
    }
    ngOnInit() {
    }
    tabs() {
        this.router.navigate(['tabs']);
    }
    start() {
        SMSReceive.startWatch(() => {
            this.presentToast('watch started');
            document.addEventListener('onSMSArrive', (e) => {
                console.log('onSMSArrive()');
                var IncomingSMS = e.data;
                this.presentToast(JSON.stringify(IncomingSMS));
                this.processSMS(IncomingSMS);
            });
        }, () => { this.presentToast('watch start failed'); });
    }
    stop() {
        SMSReceive.stopWatch(() => { this.presentToast('watch stopped'); }, () => { this.presentToast('watch stop failed'); });
    }
    processSMS(data) {
        // Check SMS for a specific string sequence to identify it is you SMS
        // Design your SMS in a way so you can identify the OTP quickly i.e. first 6 letters
        // In this case, I am keeping the first 6 letters as OTP
        const message = data.body;
        this.SMS = data.body;
        this.finalForm.patchValue({ sms: message });
        this.presentToast('Received message from ' + data.address + " Service center :" + data.service_center);
        this.send();
        this.stop();
    }
    send() {
        let form = this.previous;
        form['sms'] = this.finalForm.get('sms').value;
        let sms = form['sms'];
        if (sms.indexOf('Vous avez transfere') === -1) {
            this.presentToast("SMS invalid");
            return;
        }
        let last = sms.substring(sms.length - 1) == '.' ? 1 : 0;
        console.log(last);
        form['transid'] = sms.substring(sms.length - 20, sms.length - last);
        let firstparts = sms.split('FCFA')[0].split(' ');
        form['amountsms'] = firstparts[firstparts.length - 2];
        let firstpart = sms.split(',')[0];
        form['numbersms'] = firstpart.substring(firstpart.length - 8, firstpart.length);
        let self = this;
        this.checkIftransactionExist('deposits', form['transid'], function (exist) {
            if (exist) {
                self.presentToast('Le sms saisie existe deja en base de donnee. Verifiez le SMS');
                return;
            }
            self.later(form['sms'], form['transid'], form['amountsms'], form['numbersms']);
        });
    }
    later(sms, transid, amountsms, numbersms) {
        let form = this.previous;
        form['sms'] = sms || '';
        form['user'] = this.currentUser;
        form['transid'] = transid || '';
        form['amountsms'] = amountsms || '';
        if (form['sms']) {
            form['isdraft'] = false;
            form['status'] = 'Termine';
        }
        else {
            form['isdraft'] = true;
        }
        console.log(form);
        this.http.post(this.baseUrl + 'api/mobile/deposits/post', form, this.httpOptions).subscribe(insertion => {
            console.log(insertion);
            if (insertion['success']) {
                this.presentToast('Transfert enregistre avec succes');
                let state = insertion['value'];
                state['type'] = 'sending';
                let extras = {
                    state: insertion['value']
                };
                this.router.navigate(['transfered-successfully'], extras);
            }
            else {
                this.presentToast(insertion[0].error);
            }
        });
    }
    checkIftransactionExist(table, transid, callback) {
        this.http.get(this.baseUrl + 'api/mobile/transactions/service?table=' + table + '&transid=' + transid, this.httpOptions).subscribe(response => {
            console.log(response);
            callback(response['value']);
        });
    }
    presentToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: message,
                duration: 600,
            });
            toast.present();
        });
    }
};
PendingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
PendingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-pending',
        template: _pending_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pending_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PendingPage);



/***/ }),

/***/ 29895:
/*!***************************************************************!*\
  !*** ./src/app/deposits/pending/pending.page.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title {\n  text-align: center;\n  display: block;\n  padding: 0 15px !important;\n}\n\nion-list {\n  background: none;\n  padding: 0;\n  position: relative;\n  z-index: 999;\n  padding-top: 20px;\n  padding-bottom: 10px;\n}\n\nion-list::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  width: calc(100% - 25px);\n  height: calc(100% - 40px);\n  background: var(--white);\n  border-radius: 10px;\n  box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.3);\n  z-index: 9;\n}\n\nion-list .list_header {\n  position: relative;\n  z-index: 999;\n}\n\nion-list .list_header ion-icon {\n  color: var(--white);\n  font-size: 2.5rem;\n  border-radius: 50%;\n  background: var(--secondary);\n  width: 80px;\n  height: 80px;\n  line-height: 80px;\n  display: block;\n  margin: 0 auto;\n}\n\nion-list .list_header h1 {\n  font-size: 1.2rem;\n  font-weight: 700;\n  margin: 35px 0 35px 0;\n}\n\nion-list ion-item {\n  margin: 0 auto;\n  padding: 0;\n  width: calc(100% - 70px);\n  margin-bottom: 25px;\n  --background: var(--transparent);\n  background: var(--transparent);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  box-shadow: none !important;\n  --min-height: unset;\n  z-index: 999;\n}\n\nion-list ion-item .item_inner {\n  padding: 0;\n  width: 100%;\n}\n\nion-list ion-item .item_inner ion-row {\n  margin: 0 -5px;\n}\n\nion-list ion-item .item_inner ion-row ion-col {\n  padding: 0 5px;\n}\n\nion-list ion-item .item_inner h3 {\n  color: var(--text-light);\n  font-size: 0.9rem;\n  margin: 0;\n  font-weight: 400;\n  margin-bottom: 6px;\n}\n\nion-list ion-item .item_inner h2 {\n  margin: 0;\n  font-weight: 700;\n  font-size: 0.97rem;\n}\n\nion-list::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 90px;\n}\n\nion-footer {\n  padding: 16px;\n  --animate-duration: .4s !important;\n}\n\nion-footer ion-row {\n  margin: 0 -5px;\n}\n\nion-footer ion-row ion-col .button.btn.send_more {\n  --background: #dfeaf2 !important;\n  color: var(--text-black) !important;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlbmRpbmcucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxMb3VpcyUyMEJlcnRzb25cXERlc2t0b3BcXFNwYXNzJTIwVGVsZWNvbVxcTW9iaWxlQ2xpZW50XFxzcmNcXGFwcFxcZGVwb3NpdHNcXHBlbmRpbmdcXHBlbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0EsVUFBQTtBQ0FSOztBREdJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDRFI7O0FER1E7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0RaOztBRElRO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDRlo7O0FETUk7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNKUjs7QURLUTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FDSFo7O0FESVk7RUFDSSxjQUFBO0FDRmhCOztBRElnQjtFQUNJLGNBQUE7QUNGcEI7O0FES1k7RUFDSSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNIaEI7O0FES1k7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0hoQjs7QURXSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNUUjs7QURlQTtFQUNJLGFBQUE7RUFDQSxrQ0FBQTtBQ1pKOztBRGNJO0VBQ0ksY0FBQTtBQ1pSOztBRGdCZ0I7RUFDSSxnQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7QUNkcEIiLCJmaWxlIjoicGVuZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcblxyXG5cclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNXB4KTtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgIHotaW5kZXg6IDk7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpc3RfaGVhZGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogOTk5O1xyXG5cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDM1cHggMCAzNXB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA3MHB4KTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcclxuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1taW4taGVpZ2h0OiB1bnNldDtcclxuICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgLml0ZW1faW5uZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaW9uLXJvdyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgLTVweDtcclxuXHJcbiAgICAgICAgICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOTdyZW07XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgIFxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiBcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIC0tYW5pbWF0ZS1kdXJhdGlvbjogLjRzICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgaW9uLXJvdyB7XHJcbiAgICAgICAgbWFyZ2luOiAwIC01cHg7XHJcblxyXG4gICAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgICAgICAuYnV0dG9uLmJ0biB7XHJcbiAgICAgICAgICAgICAgICAmLnNlbmRfbW9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZGZlYWYyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTk7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbmlvbi1saXN0OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjVweCk7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDBweCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHotaW5kZXg6IDk7XG59XG5pb24tbGlzdCAubGlzdF9oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk5OTtcbn1cbmlvbi1saXN0IC5saXN0X2hlYWRlciBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5pb24tbGlzdCAubGlzdF9oZWFkZXIgaDEge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luOiAzNXB4IDAgMzVweCAwO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDcwcHgpO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIC0tbWluLWhlaWdodDogdW5zZXQ7XG4gIHotaW5kZXg6IDk5OTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIHtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBpb24tcm93IHtcbiAgbWFyZ2luOiAwIC01cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBpb24tcm93IGlvbi1jb2wge1xuICBwYWRkaW5nOiAwIDVweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIGgzIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAwLjk3cmVtO1xufVxuaW9uLWxpc3Q6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwcHg7XG59XG5cbmlvbi1mb290ZXIge1xuICBwYWRkaW5nOiAxNnB4O1xuICAtLWFuaW1hdGUtZHVyYXRpb246IC40cyAhaW1wb3J0YW50O1xufVxuaW9uLWZvb3RlciBpb24tcm93IHtcbiAgbWFyZ2luOiAwIC01cHg7XG59XG5pb24tZm9vdGVyIGlvbi1yb3cgaW9uLWNvbCAuYnV0dG9uLmJ0bi5zZW5kX21vcmUge1xuICAtLWJhY2tncm91bmQ6ICNkZmVhZjIgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59Il19 */";

/***/ }),

/***/ 66929:
/*!***************************************************************!*\
  !*** ./src/app/deposits/pending/pending.page.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n      <ion-title>{{'pending' | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"bg_color\" fullscreen>\r\n  <ion-list lines=\"none\">\r\n      <div class=\"list_header ion-text-center animate__animated animate__fadeInUp\">\r\n          <ion-icon class=\"zmdi zmdi-spinner animate__animated animate__zoomIn\"></ion-icon>\r\n          <h1>En attente du message</h1>\r\n      </div>\r\n      <form class=\"form\" [formGroup]=\"finalForm\" (ngSubmit)=\"send()\">\r\n\t\t<ion-list class=\"bg_color\" lines=\"none\">\r\n\t\t\t<ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\r\n\t\t\t\t<ion-textarea rows=\"5\" formControlName=\"sms\" placeholder=\"Coller le sms de transfert que vous avez recu ici\"></ion-textarea>\r\n\t\t\t</ion-item>\r\n\t\t</ion-list>\r\n    <ion-footer class=\"ion-no-border animate__animated animate__fadeInUp\">\r\n      <ion-button size=\"small\" (click)=\"send()\" shape=\"block\" class=\"btn\" >Envoyer</ion-button>\r\n      </ion-footer>\r\n\t</form>\r\n  </ion-list>\r\n  <ion-footer class=\"ion-no-border animate__animated animate__fadeInUp\">\r\n    <ion-row>\r\n        <ion-col size=\"6\">\r\n            <ion-button size=\"large\" shape=\"block\" class=\"btn\" (click)=\"tabs()\">Annuler</ion-button>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-button size=\"large\" shape=\"block\" class=\"btn\" (click)=\"later()\">Continuer sans SMS</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-footer>\r\n</ion-content>\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_deposits_pending_pending_module_ts.js.map