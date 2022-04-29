"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_deposits_shortforms_shortforms_module_ts"],{

/***/ 17545:
/*!******************************************************************!*\
  !*** ./src/app/deposits/shortforms/shortforms-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShortformsPageRoutingModule": () => (/* binding */ ShortformsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _shortforms_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shortforms.page */ 41448);




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

/***/ 66385:
/*!**********************************************************!*\
  !*** ./src/app/deposits/shortforms/shortforms.module.ts ***!
  \**********************************************************/
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
/* harmony import */ var _shortforms_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shortforms-routing.module */ 17545);
/* harmony import */ var _shortforms_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shortforms.page */ 41448);








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

/***/ 41448:
/*!********************************************************!*\
  !*** ./src/app/deposits/shortforms/shortforms.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShortformsPage": () => (/* binding */ ShortformsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _shortforms_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shortforms.page.html?ngResource */ 25584);
/* harmony import */ var _shortforms_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shortforms.page.scss?ngResource */ 41870);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/helper.models */ 71220);
/* harmony import */ var _ionic_native_call_number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/call-number */ 16786);










let ShortformsPage = class ShortformsPage {
    constructor(formBuilder, toastCtrl, router, http) {
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({ 'Content-Type': 'application/json' })
        };
        // load base url
        this.baseUrl = src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__.Helper.getApiHostname();
        this.shortCode = src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__.Helper.getUssdShortcode();
        if (this.router.getCurrentNavigation().extras.state) {
            this.agent = this.router.getCurrentNavigation().extras.state.number;
        }
        ;
        this.http.get(this.baseUrl + 'api/mobile/distributors/list/', this.httpOptions).subscribe(list => {
            if (list['count'] > 0) {
                this.distributors = list['items'];
            }
        });
        this.depositForm = this.formBuilder.group({
            distributor_number: '',
            agent_number: this.agent.number,
            passcode: '',
            amount: 0,
        });
    }
    ngOnInit() {
    }
    send() {
        let dist = this.depositForm.get('distributor_number').value;
        let agent_number = this.depositForm.get('agent_number').value;
        let amount = this.depositForm.get('amount').value;
        let passcode = this.depositForm.get('passcode').value;
        let code = this.shortCode + agent_number + "*" + amount + "*" + passcode + "#";
        console.log(code);
        _ionic_native_call_number__WEBPACK_IMPORTED_MODULE_3__.CallNumber.callNumber(code, false)
            .then(res => {
            this.presentToast(res, 'bottom', 600);
        })
            .catch(err => {
            this.presentToast(err, 'bottom', 600);
        });
    }
    err(err) {
    }
    next(err) {
        let extras = {
            state: {
                dist: this.depositForm.get('distributor_number').value,
                agent_number: this.depositForm.get('agent_number').value,
                amount: this.depositForm.get('amount').value,
            }
        };
        this.router.navigate(['deposits/pending'], extras);
    }
    presentToast(message, position, duration) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: message,
                position: position,
                duration: duration
            });
            toast.present();
        });
    }
};
ShortformsPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
ShortformsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-shortforms',
        template: _shortforms_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_shortforms_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ShortformsPage);



/***/ }),

/***/ 41870:
/*!*********************************************************************!*\
  !*** ./src/app/deposits/shortforms/shortforms.page.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title h2 {\n  font-size: 1.1rem;\n  font-weight: 500;\n  margin: 0;\n  padding: 17px 0;\n}\nion-header ion-toolbar ion-title h2 small {\n  display: block;\n  margin-top: 4px;\n  font-weight: 400;\n  font-size: 0.85rem;\n}\n.form {\n  width: calc(100% - 32px);\n  margin-top: 30px;\n}\n.form ion-list h2 {\n  color: var(--text-black) !important;\n  font-size: 1.1rem !important;\n  letter-spacing: 0px;\n  font-weight: 600 !important;\n  margin: 0;\n  margin-bottom: 7px;\n}\n.form ion-list h2 span {\n  color: var(--primary);\n  font-size: 0.9rem;\n}\n.form ion-list ion-item {\n  background: var(--white);\n  border-radius: 0px;\n  padding: 0;\n  margin-bottom: 35px;\n}\n.form ion-list ion-item.item-select ion-select {\n  --placeholder-color: var(--text-light) !important;\n  --placeholder-opacity: 1;\n  color: var(--text-light);\n  font-size: 0.8rem !important;\n  font-weight: 500 !important;\n  letter-spacing: 0px;\n  padding: 0 18px !important;\n  min-height: 40px;\n  border-radius: 7px;\n  border: 1px solid #ccc !important;\n}\n.form ion-list ion-item.item-input ion-input {\n  color: var(--text-light) !important;\n  font-size: 0.8rem !important;\n  font-weight: 500 !important;\n  letter-spacing: 0px;\n  padding: 0 18px !important;\n  min-height: 40px;\n  border-radius: 7px;\n  border: 1px solid #ccc !important;\n}\nion-footer {\n  padding: 16px;\n  --animate-duration: .4s !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0Zm9ybXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBQVI7QUFDUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNaO0FBSUE7RUFDSSx3QkFBQTtFQUNBLGdCQUFBO0FBREo7QUFHUTtFQUNJLG1DQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBRFo7QUFFWTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7QUFBaEI7QUFHUTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFEWjtBQUdnQjtFQUNJLGlEQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBRHBCO0FBS2dCO0VBQ0ksbUNBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQUhwQjtBQVVBO0VBQ0ksYUFBQTtFQUNBLGtDQUFBO0FBUEoiLCJmaWxlIjoic2hvcnRmb3Jtcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAxN3B4IDA7XG4gICAgICAgIHNtYWxsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjg1cmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZm9ybSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgaW9uLWxpc3Qge1xuICAgICAgICBoMiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjaykgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gICAgICAgICAgICAmLml0ZW0tc2VsZWN0IHtcbiAgICAgICAgICAgICAgICBpb24tc2VsZWN0IHtcbiAgICAgICAgICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0tdGV4dC1saWdodCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYuaXRlbS1pbnB1dCB7XG4gICAgICAgICAgICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW0gIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMThweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1mb290ZXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgLS1hbmltYXRlLWR1cmF0aW9uOiAuNHMgIWltcG9ydGFudDtcbn0iXX0= */";

/***/ }),

/***/ 25584:
/*!*********************************************************************!*\
  !*** ./src/app/deposits/shortforms/shortforms.page.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>\n\t\t\t<h2>\n\t\t\t\t{{'send' | translate}}\n\t\t\t\t<small>{{'send_liquidity' | translate}}</small>\n\t\t\t</h2>\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n  <form class=\"form\" [formGroup]=\"depositForm\" (ngSubmit)=\"send()\">\n\t\t<ion-list lines=\"none\">\n\t\t\t<h2 class=\"animate__animated animate__fadeInUp\">{{'send_from' | translate}}</h2>\n\t\t\t<ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n\t\t\t\t<ion-select mode=\"md\" formControlName=\"distributor_number\" interface=\"action-sheet\">\n\t\t\t\t\t\t<ion-select-option disabled value=\"\">{{'distributor_number' | translate }}</ion-select-option>\n\t\t\t\t\t<ion-select-option *ngFor=\"let distributor of distributors\" value=\"{{distributor.number}}\">\n           {{distributor.number}} ({{distributor.balance}} XOF)\n          </ion-select-option>\n\t\t\t\t</ion-select>\n\t\t\t</ion-item>\n\t\t\t<h2 class=\"d-flex animate__animated animate__fadeInUp\">{{'send_to' | translate}}</h2>\n\t\t\t<ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n\t\t\t\t<ion-input type=\"text\" formControlName=\"agent_number\" placeholder=\"{{'agent_number' | translate}}\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<h2 class=\"d-flex animate__animated animate__fadeInUp\">{{'enter_amount' | translate}} <span class=\"end\">EX 30000</span></h2>\n\t\t\t<ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n\t\t\t\t<ion-input type=\"number\" formControlName=\"amount\" placeholder=\"0.00\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<h2 class=\"d-flex animate__animated animate__fadeInUp\">{{'passcode' | translate}} <span class=\"end\">EX 30000</span></h2>\n\t\t\t<ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n\t\t\t\t<ion-input type=\"number\" formControlName=\"passcode\"></ion-input>\n\t\t\t</ion-item>\n\t\t</ion-list>\n\t</form><ion-footer class=\"ion-no-border animate__animated animate__fadeInUp\">\n\t\t<ion-button size=\"small\" (click)=\"send()\" shape=\"block\" class=\"btn\" >{{'send' | translate}}</ion-button>\n\t  </ion-footer>\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_deposits_shortforms_shortforms_module_ts.js.map