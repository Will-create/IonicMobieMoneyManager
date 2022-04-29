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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _shortforms_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shortforms.page.html?ngResource */ 97231);
/* harmony import */ var _shortforms_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shortforms.page.scss?ngResource */ 4372);
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
        if (this.router.getCurrentNavigation().extras.state) {
            this.agent = this.router.getCurrentNavigation().extras.state.number;
            console.log(this.agent);
        }
        ;
        this.http.get(this.baseUrl + 'api/mobile/distributors/list/', this.httpOptions).subscribe(list => {
            if (list['count'] > 0) {
                this.distributors = list['items'];
            }
        });
        this.shortCode = '*144*4*1*1*';
        this.depositForm = this.formBuilder.group({
            distributor_number: '',
            agent_number: this.agent.number,
            amount: '',
        });
    }
    ngOnInit() {
    }
    send() {
        let dist = this.depositForm.get('distributor_number').value;
        let agent_number = this.depositForm.get('agent_number').value;
        let amount = this.depositForm.get('amount').value;
        let code = this.shortCode + agent_number + "*" + amount + "#";
        _ionic_native_call_number__WEBPACK_IMPORTED_MODULE_3__.CallNumber.callNumber(code, false)
            .then(res => this.presentToast(res))
            .catch(err => this.presentToast(err));
    }
    presentToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: message,
                duration: 2500,
            });
            setTimeout(() => {
                this.router.navigate(['/tabs/home']);
            }, 600);
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

/***/ 4372:
/*!************************************************************************!*\
  !*** ./src/app/withdrawals/shortforms/shortforms.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n\nion-list {\n  width: calc(100% - 37px);\n  margin: 0 auto;\n  margin-top: 20px;\n  padding: 0;\n  background: none;\n}\n\nion-list h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.85rem;\n  font-weight: 500;\n  margin-bottom: 22px;\n}\n\nion-list ion-item {\n  padding: 0;\n  border-bottom: 1px solid #ccc !important;\n  padding-bottom: 10px;\n  margin-bottom: 13px;\n  --background: var(--transparent);\n  background: var(--transparent);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --min-height: unset;\n}\n\nion-list ion-item .item_inner {\n  width: 100%;\n}\n\nion-list ion-item .item_inner h3 {\n  font-size: 1rem;\n  font-weight: 500;\n  margin: 0;\n  padding-bottom: 6px;\n}\n\nion-list ion-item .item_inner h4 {\n  color: var(--text-light);\n  font-size: 0.8rem;\n  font-weight: 400;\n  margin: 0;\n}\n\nion-list ion-item .item_inner h4 span.end {\n  font-size: 0.95rem;\n  font-weight: 700;\n}\n\nion-list ion-item.debited .item_inner h4 span.end {\n  color: var(--red_color);\n}\n\nion-list ion-item.credited .item_inner h4 span.end {\n  color: var(--secondary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0Zm9ybXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksMEJBQUE7RUFDQSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQVI7O0FBSUE7RUFDQyx3QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUREOztBQUdDO0VBQ0MsU0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUM7RUFDQyxVQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0U7RUFDQyxXQUFBO0FBSEg7O0FBS0c7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFNRztFQUNDLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFKSjs7QUFPSztFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7QUFMTjs7QUFZRztFQUNDLHVCQUFBO0FBVko7O0FBZUc7RUFDQyx1QkFBQTtBQWJKIiwiZmlsZSI6InNob3J0Zm9ybXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgICAgICAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgICAgICB0b3A6IC0zcHg7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuXG5pb24tbGlzdCB7XG5cdHdpZHRoOiBjYWxjKDEwMCUgLSAzN3B4KTtcblx0bWFyZ2luOiAwIGF1dG87XG5cdG1hcmdpbi10b3A6IDIwcHg7XG5cdHBhZGRpbmc6IDA7XG5cdGJhY2tncm91bmQ6IG5vbmU7XG5cblx0aDIge1xuXHRcdG1hcmdpbjogMDtcblx0XHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG5cdFx0Zm9udC1zaXplOiAuODVyZW07XG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRtYXJnaW4tYm90dG9tOiAyMnB4O1xuXHR9XG5cblx0aW9uLWl0ZW0ge1xuXHRcdHBhZGRpbmc6IDA7XG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcblx0XHRwYWRkaW5nLWJvdHRvbTogMTBweDtcblx0XHRtYXJnaW4tYm90dG9tOiAxM3B4O1xuXHRcdC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuXHRcdGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcblx0XHQtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG5cdFx0LS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuXHRcdC0tcGFkZGluZy1zdGFydDogMDtcblx0XHQtLW1pbi1oZWlnaHQ6IHVuc2V0O1xuXG5cblx0XHQuaXRlbV9pbm5lciB7XG5cdFx0XHR3aWR0aDogMTAwJTtcblxuXHRcdFx0aDMge1xuXHRcdFx0XHRmb250LXNpemU6IDFyZW07XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0cGFkZGluZy1ib3R0b206IDZweDtcblx0XHRcdH1cblxuXHRcdFx0aDQge1xuXHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG5cdFx0XHRcdGZvbnQtc2l6ZTogLjhyZW07XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHRcdG1hcmdpbjogMDtcblxuXHRcdFx0XHRzcGFuIHtcblx0XHRcdFx0XHQmLmVuZCB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IC45NXJlbTtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ji5kZWJpdGVkIHtcblx0XHRcdC5pdGVtX2lubmVyIGg0IHNwYW4uZW5kIHtcblx0XHRcdFx0Y29sb3I6IHZhcigtLXJlZF9jb2xvcik7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ji5jcmVkaXRlZCB7XG5cdFx0XHQuaXRlbV9pbm5lciBoNCBzcGFuLmVuZCB7XG5cdFx0XHRcdGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIl19 */";

/***/ }),

/***/ 97231:
/*!************************************************************************!*\
  !*** ./src/app/withdrawals/shortforms/shortforms.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>\n\t\t\t<h2>\n\t\t\t\t{{'send' | translate}}\n\t\t\t\t<small>{{'send_liquidity' | translate}}</small>\n\t\t\t</h2>\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n  <form class=\"form\" [formGroup]=\"depositForm\" (ngSubmit)=\"send()\">\n\t\t<ion-list lines=\"none\">\n\t\t\t<h2 class=\"animate__animated animate__fadeInUp\">{{'send_from' | translate}}</h2>\n\t\t\t<ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n\t\t\t\t<ion-select mode=\"md\" formControlName=\"distributor_number\" interface=\"action-sheet\">\n\t\t\t\t\t\t<ion-select-option disabled value=\"\">{{'distributor_number' | translate }}</ion-select-option>\n\t\t\t\t\t<ion-select-option *ngFor=\"let distributor of distributors\" value=\"{{distributor.number}}\">\n           {{distributor.number}} ({{distributor.balance}} XOF)\n          </ion-select-option>\n\t\t\t\t</ion-select>\n\t\t\t</ion-item>\n\t\t\t<h2 class=\"d-flex animate__animated animate__fadeInUp\">{{'send_to' | translate}}</h2>\n\t\t\t<ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n\t\t\t\t<ion-input type=\"text\" formControlName=\"agent_number\" placeholder=\"{{'agent_number' | translate}}\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<h2 class=\"d-flex animate__animated animate__fadeInUp\">{{'enter_amount' | translate}} <span class=\"end\">EX 30000</span></h2>\n\t\t\t<ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n\t\t\t\t<ion-input type=\"number\" formControlName=\"amount\" placeholder=\"0.00\"></ion-input>\n\t\t\t</ion-item>\n\t\t</ion-list>\n\t</form>\n</ion-content>\n<ion-footer class=\"ion-no-border animate__animated animate__fadeInUp\">\n  <ion-button size=\"small\" (click)=\"send()\" shape=\"block\" class=\"btn\" >{{'send' | translate}}</ion-button>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_withdrawals_shortforms_shortforms_module_ts.js.map