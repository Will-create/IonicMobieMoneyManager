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
                this.stop();
                this.router.navigate(['transfered-successfully'], extras);
            }
            else {
                this.stop();
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

module.exports = "ion-header ion-toolbar ion-title {\n  text-align: center;\n  display: block;\n  padding: 0 15px !important;\n}\n\nion-list {\n  background: none;\n  padding: 0;\n  position: relative;\n  z-index: 999;\n  padding-top: 20px;\n  padding-bottom: 10px;\n}\n\nion-list::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  width: calc(100% - 25px);\n  height: calc(100% - 40px);\n  background: var(--white);\n  border-radius: 10px;\n  box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.3);\n  z-index: 9;\n}\n\nion-list .list_header {\n  position: relative;\n  z-index: 999;\n}\n\nion-list .list_header ion-icon {\n  color: var(--white);\n  font-size: 2.5rem;\n  border-radius: 50%;\n  background: var(--secondary);\n  width: 80px;\n  height: 80px;\n  line-height: 80px;\n  display: block;\n  margin: 0 auto;\n}\n\nion-list .list_header h1 {\n  font-size: 1.2rem;\n  font-weight: 700;\n  margin: 35px 0 35px 0;\n}\n\nion-list ion-item {\n  margin: 0 auto;\n  padding: 0;\n  width: calc(100% - 70px);\n  margin-bottom: 25px;\n  --background: var(--transparent);\n  background: var(--transparent);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  box-shadow: none !important;\n  --min-height: unset;\n  z-index: 999;\n}\n\nion-list ion-item .item_inner {\n  padding: 0;\n  width: 100%;\n}\n\nion-list ion-item .item_inner ion-row {\n  margin: 0 -5px;\n}\n\nion-list ion-item .item_inner ion-row ion-col {\n  padding: 0 5px;\n}\n\nion-list ion-item .item_inner h3 {\n  color: var(--text-light);\n  font-size: 0.9rem;\n  margin: 0;\n  font-weight: 400;\n  margin-bottom: 6px;\n}\n\nion-list ion-item .item_inner h2 {\n  margin: 0;\n  font-weight: 700;\n  font-size: 0.97rem;\n}\n\nion-list::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 90px;\n}\n\nion-footer {\n  padding: 16px;\n  --animate-duration: .4s !important;\n}\n\nion-footer ion-row {\n  margin: 0 -5px;\n}\n\nion-footer ion-row ion-col .button.btn.send_more {\n  --background: #dfeaf2 !important;\n  color: var(--text-black) !important;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0EsVUFBQTtBQUFSOztBQUdJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBRFI7O0FBR1E7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQURaOztBQUlRO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBRlo7O0FBTUk7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFKUjs7QUFLUTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FBSFo7O0FBSVk7RUFDSSxjQUFBO0FBRmhCOztBQUlnQjtFQUNJLGNBQUE7QUFGcEI7O0FBS1k7RUFDSSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFIaEI7O0FBS1k7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUhoQjs7QUFXSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFUUjs7QUFlQTtFQUNJLGFBQUE7RUFDQSxrQ0FBQTtBQVpKOztBQWNJO0VBQ0ksY0FBQTtBQVpSOztBQWdCZ0I7RUFDSSxnQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7QUFkcEIiLCJmaWxlIjoicGVuZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xufVxuXG5pb24tbGlzdCB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG5cblxuICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjVweCk7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNDBweCk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICAgIHotaW5kZXg6IDk7XG4gICAgfVxuXG4gICAgLmxpc3RfaGVhZGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiA5OTk7XG5cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgbWFyZ2luOiAzNXB4IDAgMzVweCAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDcwcHgpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAgIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tbWluLWhlaWdodDogdW5zZXQ7XG4gICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgLml0ZW1faW5uZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaW9uLXJvdyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIC01cHg7XG5cbiAgICAgICAgICAgICAgICBpb24tY29sIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC45cmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC45N3JlbTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgIFxuICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xuIFxuICAgIH1cbn1cblxuXG5pb24tZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIC0tYW5pbWF0ZS1kdXJhdGlvbjogLjRzICFpbXBvcnRhbnQ7XG5cbiAgICBpb24tcm93IHtcbiAgICAgICAgbWFyZ2luOiAwIC01cHg7XG5cbiAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICAuYnV0dG9uLmJ0biB7XG4gICAgICAgICAgICAgICAgJi5zZW5kX21vcmUge1xuICAgICAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6ICNkZmVhZjIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */";

/***/ }),

/***/ 66929:
/*!***************************************************************!*\
  !*** ./src/app/deposits/pending/pending.page.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-title>{{'pending' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"bg_color\" fullscreen>\n  <ion-list lines=\"none\">\n      <div class=\"list_header ion-text-center animate__animated animate__fadeInUp\">\n          <ion-icon class=\"zmdi zmdi-spinner animate__animated animate__zoomIn\"></ion-icon>\n          <h1>En attente du message</h1>\n      </div>\n      <form class=\"form\" [formGroup]=\"finalForm\" (ngSubmit)=\"send()\">\n\t\t<ion-list class=\"bg_color\" lines=\"none\">\n\t\t\t<ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n\t\t\t\t<ion-textarea rows=\"5\" formControlName=\"sms\" placeholder=\"Coller le sms de transfert que vous avez recu ici\"></ion-textarea>\n\t\t\t</ion-item>\n\t\t</ion-list>\n    <ion-footer class=\"ion-no-border animate__animated animate__fadeInUp\">\n      <ion-button size=\"small\" (click)=\"send()\" shape=\"block\" class=\"btn\" >Envoyer</ion-button>\n      </ion-footer>\n\t</form>\n  </ion-list>\n  <ion-footer class=\"ion-no-border animate__animated animate__fadeInUp\">\n    <ion-row>\n        <ion-col size=\"6\">\n            <ion-button size=\"large\" shape=\"block\" class=\"btn\" (click)=\"tabs()\">Annuler</ion-button>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-button size=\"large\" shape=\"block\" class=\"btn\" (click)=\"later()\">Continuer sans SMS</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-footer>\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_deposits_pending_pending_module_ts.js.map