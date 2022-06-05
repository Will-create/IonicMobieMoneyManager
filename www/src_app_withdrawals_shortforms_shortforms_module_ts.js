"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_withdrawals_shortforms_shortforms_module_ts"],{

/***/ 80166:
/*!*********************************************************************!*\
  !*** ./src/app/withdrawals/shortforms/shortforms-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShortformsPageRoutingModule": () => (/* binding */ ShortformsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _shortforms_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shortforms.page */ 27934);




const routes = [
    {
        path: '',
        component: _shortforms_page__WEBPACK_IMPORTED_MODULE_0__.ShortformsPage
    }
];
let ShortformsPageRoutingModule = class ShortformsPageRoutingModule {
};
ShortformsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ShortformsPageRoutingModule);



/***/ }),

/***/ 32772:
/*!*************************************************************!*\
  !*** ./src/app/withdrawals/shortforms/shortforms.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShortformsPageModule": () => (/* binding */ ShortformsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shortforms_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shortforms-routing.module */ 80166);
/* harmony import */ var _shortforms_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shortforms.page */ 27934);








let ShortformsPageModule = class ShortformsPageModule {
};
ShortformsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _shortforms_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShortformsPageRoutingModule
        ],
        declarations: [_shortforms_page__WEBPACK_IMPORTED_MODULE_1__.ShortformsPage]
    })
], ShortformsPageModule);



/***/ }),

/***/ 27934:
/*!***********************************************************!*\
  !*** ./src/app/withdrawals/shortforms/shortforms.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShortformsPage": () => (/* binding */ ShortformsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _shortforms_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shortforms.page.html?ngResource */ 97231);
/* harmony import */ var _shortforms_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shortforms.page.scss?ngResource */ 4372);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/helper.models */ 71220);









let ShortformsPage = class ShortformsPage {
    constructor(formBuilder, toastCtrl, router, http) {
        // load base url
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json' })
        };
        if (this.router.getCurrentNavigation().extras.state) {
            this.previous = this.router.getCurrentNavigation().extras.state.number;
            this.agent = this.router.getCurrentNavigation().extras.state.number;
        }
    }
    ngOnInit() {
        this.currentUser = src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__.Helper.getUserProfile();
        this.baseUrl = src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__.Helper.getApiHostname();
        this.shortCode = src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__.Helper.getUssdShortcode();
        this.depositForm = this.formBuilder.group({
            distributor_number: src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__.Helper.getCurrentSim(),
            agent_number: this.previous.number,
            sms: '',
        });
        this.http.get(this.baseUrl + 'api/mobile/distributors/list/', this.httpOptions).subscribe(list => {
            if (list['count'] > 0) {
                this.distributors = list['items'];
            }
        });
    }
    send() {
        let form = {};
        form['dist'] = this.depositForm.get('distributor_number').value;
        form['agent_number'] = this.agent.number;
        form['user'] = this.currentUser;
        form['idsender'] = this.agent.id;
        form['sender'] = this.agent.ownername;
        form['fromnumber'] = this.agent.number;
        form['dist'] = this.depositForm.get('distributor_number').value;
        form['agent_number'] = this.depositForm.get('agent_number').value;
        form['sms'] = this.depositForm.get('sms').value;
        let sms = form['sms'];
        if (!form['dist']) {
            this.presentToast("Le numero distributeur est obligatoire");
            return;
        }
        if (sms.indexOf('Vous avez recu') === -1) {
            this.presentToast("SMS invalid");
            return;
        }
        ;
        let last = sms.substring(sms.length - 1) == '.' ? 1 : 0;
        form['transid'] = sms.substring(sms.length - 20, sms.length - last);
        let firstparts = sms.split('FCFA')[0].split(' ');
        form['amount'] = firstparts[firstparts.length - 2];
        let firstpart = sms.split(',')[0];
        form['number'] = firstpart.substring(firstpart.length - 8, firstpart.length);
        console.log(form);
        var self = this;
        this.checkIftransactionExist('withdrawals', form['transid'], function (exist) {
            if (exist) {
                self.presentToast('La transaction existe deja, verifiez le sms');
                return;
            }
            self.http.post(self.baseUrl + 'api/mobile/withdrawals/post', form, self.httpOptions).subscribe(insertion => {
                console.log(insertion);
                if (insertion['success']) {
                    self.presentToast('Transfert enregistre avec succes');
                    let state = insertion['value'];
                    state['type'] = 'receiving';
                    let extras = {
                        state: insertion['value']
                    };
                    self.router.navigate(['transfered-successfully'], extras);
                }
                else {
                    self.presentToast(insertion[0].error);
                }
            });
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
ShortformsPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
ShortformsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-shortforms',
        template: _shortforms_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_shortforms_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ShortformsPage);



/***/ }),

/***/ 4372:
/*!************************************************************************!*\
  !*** ./src/app/withdrawals/shortforms/shortforms.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title h2 {\n  font-size: 1.1rem;\n  font-weight: 500;\n  margin: 0;\n  padding: 17px 0;\n}\nion-header ion-toolbar ion-title h2 small {\n  display: block;\n  margin-top: 4px;\n  font-weight: 400;\n  font-size: 0.85rem;\n}\n.form {\n  width: calc(100% - 32px);\n  margin-top: 30px;\n}\n.form ion-list h2 {\n  color: var(--text-black) !important;\n  font-size: 1.1rem !important;\n  letter-spacing: 0px;\n  font-weight: 600 !important;\n  margin: 0;\n  margin-bottom: 7px;\n}\n.form ion-list h2 span {\n  color: var(--primary);\n  font-size: 0.9rem;\n}\n.form ion-list ion-item {\n  background: var(--white);\n  border-radius: 0px;\n  padding: 0;\n  margin-bottom: 35px;\n}\n.form ion-list ion-item.item-select ion-select {\n  --placeholder-color: var(--text-light) !important;\n  --placeholder-opacity: 1;\n  color: var(--text-light);\n  font-size: 0.8rem !important;\n  font-weight: 500 !important;\n  letter-spacing: 0px;\n  padding: 0 18px !important;\n  min-height: 40px;\n  border-radius: 7px;\n  border: 1px solid #ccc !important;\n}\n.form ion-list ion-item.item-input ion-input {\n  color: var(--text-light) !important;\n  font-size: 0.8rem !important;\n  font-weight: 500 !important;\n  letter-spacing: 0px;\n  padding: 0 18px !important;\n  min-height: 40px;\n  border-radius: 7px;\n  border: 1px solid #ccc !important;\n}\n.form ion-list ion-item.item-input ion-textarea {\n  color: var(--text-light) !important;\n  font-size: 0.8rem !important;\n  font-weight: 500 !important;\n  letter-spacing: 0px;\n  padding: 0 18px !important;\n  min-height: 40px;\n  border-radius: 7px;\n  border: 1px solid #ccc !important;\n}\nion-footer {\n  padding: 16px;\n  --animate-duration: .4s !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0Zm9ybXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBQVI7QUFDUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNaO0FBSUE7RUFDSSx3QkFBQTtFQUNBLGdCQUFBO0FBREo7QUFHUTtFQUNJLG1DQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBRFo7QUFFWTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7QUFBaEI7QUFHUTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFEWjtBQUdnQjtFQUNJLGlEQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBRHBCO0FBS2dCO0VBQ0ksbUNBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQUhwQjtBQUtJO0VBQ2dCLG1DQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QUFIcEI7QUFVQTtFQUNJLGFBQUE7RUFDQSxrQ0FBQTtBQVBKIiwiZmlsZSI6InNob3J0Zm9ybXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMTdweCAwO1xuICAgICAgICBzbWFsbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IC44NXJlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmZvcm0ge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIGlvbi1saXN0IHtcbiAgICAgICAgaDIge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC45cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICAgICAgICAgICAgJi5pdGVtLXNlbGVjdCB7XG4gICAgICAgICAgICAgICAgaW9uLXNlbGVjdCB7XG4gICAgICAgICAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLXRleHQtbGlnaHQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMThweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLml0ZW0taW5wdXQge1xuICAgICAgICAgICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC44cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE4cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuXHRcdFx0XHRpb24tdGV4dGFyZWEge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLWZvb3RlciB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICAtLWFuaW1hdGUtZHVyYXRpb246IC40cyAhaW1wb3J0YW50O1xufSJdfQ== */";

/***/ }),

/***/ 97231:
/*!************************************************************************!*\
  !*** ./src/app/withdrawals/shortforms/shortforms.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>\n\t\t\t<h2>\n\t\t\t\tReception du numero {{ agent.number}}\n\t\t\t\t<small>Envoyer du virtuel</small>\n\t\t\t</h2>\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n  <form class=\"form\" [formGroup]=\"depositForm\" (ngSubmit)=\"send()\">\n\t\t<ion-list lines=\"none\">\n\t\t\t<ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n\t\t\t\t<ion-select mode=\"md\" formControlName=\"distributor_number\" interface=\"action-sheet\">\n\t\t\t\t\t\t<ion-select-option disabled value=\"\">Numero distributeur</ion-select-option>\n\t\t\t\t\t<ion-select-option *ngFor=\"let distributor of distributors\" value=\"{{distributor.number}}\" >\n           {{distributor.number}} | Solde : {{distributor.balance}} FCFA\n          \t</ion-select-option>\n\t\t\t\t</ion-select>\n\t\t\t</ion-item>\n\t\t\t<ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n\t\t\t\t<ion-textarea rows=\"5\" formControlName=\"sms\" placeholder=\"Coller le sms de transfert que vous avez recu ici\"></ion-textarea>\n\t\t\t</ion-item>\n\t\t</ion-list>\n\t</form>\n\t<ion-footer class=\"ion-no-border animate__animated animate__fadeInUp\">\n\t\t<ion-button size=\"small\" (click)=\"send()\" shape=\"block\" class=\"btn\" >Envoyer</ion-button>\n\t  </ion-footer>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_withdrawals_shortforms_shortforms_module_ts.js.map