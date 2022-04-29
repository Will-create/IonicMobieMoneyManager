"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_settings_server_server_module_ts"],{

/***/ 51127:
/*!**********************************************************!*\
  !*** ./src/app/settings/server/server-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerPageRoutingModule": () => (/* binding */ ServerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _server_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server.page */ 56845);




const routes = [
    {
        path: '',
        component: _server_page__WEBPACK_IMPORTED_MODULE_0__.ServerPage
    }
];
let ServerPageRoutingModule = class ServerPageRoutingModule {
};
ServerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ServerPageRoutingModule);



/***/ }),

/***/ 66132:
/*!**************************************************!*\
  !*** ./src/app/settings/server/server.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerPageModule": () => (/* binding */ ServerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _server_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server-routing.module */ 51127);
/* harmony import */ var _server_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server.page */ 56845);








let ServerPageModule = class ServerPageModule {
};
ServerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _server_routing_module__WEBPACK_IMPORTED_MODULE_0__.ServerPageRoutingModule
        ],
        declarations: [_server_page__WEBPACK_IMPORTED_MODULE_1__.ServerPage]
    })
], ServerPageModule);



/***/ }),

/***/ 56845:
/*!************************************************!*\
  !*** ./src/app/settings/server/server.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerPage": () => (/* binding */ ServerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _server_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server.page.html?ngResource */ 20178);
/* harmony import */ var _server_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server.page.scss?ngResource */ 51096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/helper.models */ 71220);








let ServerPage = class ServerPage {
    constructor(formBuilder, toastCtrl, router) {
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.serverForm = this.formBuilder.group({
            hostname: src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__.Helper.getApiHostname()
        });
    }
    ngOnInit() {
    }
    save() {
        src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__.Helper.setApiHostname(this.serverForm.get('hostname').value);
        this.presentToast();
    }
    presentToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                header: 'S.PASS TELECOM',
                message: 'Enregistre avec succes',
                duration: 2500,
                icon: 'checkmark-done-outline',
                position: 'top',
            });
            setTimeout(() => {
                this.router.navigate(['/tabs/home']);
            }, 600);
            toast.present();
        });
    }
};
ServerPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
ServerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-server',
        template: _server_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_server_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ServerPage);



/***/ }),

/***/ 71220:
/*!*************************************!*\
  !*** ./src/models/helper.models.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Helper": () => (/* binding */ Helper)
/* harmony export */ });
/* harmony import */ var _contants_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contants.models */ 64879);

class Helper {
    static seThemeMode(status) {
        window.localStorage.setItem(_contants_models__WEBPACK_IMPORTED_MODULE_0__.Constants.KEY_DARK_MODE, status);
    }
    static getThemeMode(defaultTheme) {
        let toReturn = window.localStorage.getItem(_contants_models__WEBPACK_IMPORTED_MODULE_0__.Constants.KEY_DARK_MODE);
        if (!toReturn)
            toReturn = defaultTheme;
        return toReturn;
    }
    // SET API BASE URL OR HOSTNAME
    static setApiHostname(hostname) {
        window.localStorage.setItem(_contants_models__WEBPACK_IMPORTED_MODULE_0__.Constants.API_HOSTNAME_KEY, hostname);
    }
    // GET API BASE URL OR HOSTNAME
    static getApiHostname() {
        var hostname = window.localStorage.getItem(_contants_models__WEBPACK_IMPORTED_MODULE_0__.Constants.API_HOSTNAME_KEY);
        if (!hostname)
            hostname = _contants_models__WEBPACK_IMPORTED_MODULE_0__.Constants.DEFAULT_API_HOSTNAME;
        return hostname;
    }
    // USSD USSD SHORT CODE
    static setUssdShortcode(shortcode) {
        window.localStorage.setItem(_contants_models__WEBPACK_IMPORTED_MODULE_0__.Constants.USSD_SHORTCODE_KEY, shortcode);
    }
    // GET USSD SHORT CODE
    static getUssdShortcode() {
        var shortcode = window.localStorage.getItem(_contants_models__WEBPACK_IMPORTED_MODULE_0__.Constants.USSD_SHORTCODE_KEY);
        if (!shortcode)
            shortcode = _contants_models__WEBPACK_IMPORTED_MODULE_0__.Constants.DEFAULT_USSD_SHORTCODE;
        return shortcode;
    }
}


/***/ }),

/***/ 51096:
/*!*************************************************************!*\
  !*** ./src/app/settings/server/server.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title h2 {\n  font-size: 1.1rem;\n  font-weight: 500;\n  margin: 0;\n  padding: 17px 0;\n}\nion-header ion-toolbar ion-title h2 small {\n  display: block;\n  margin-top: 4px;\n  font-weight: 400;\n  font-size: 0.85rem;\n}\n.form {\n  width: calc(100% - 32px);\n  margin-top: 30px;\n}\n.form ion-list h2 {\n  color: var(--text-black) !important;\n  font-size: 1.1rem !important;\n  letter-spacing: 0px;\n  font-weight: 600 !important;\n  margin: 0;\n  margin-bottom: 7px;\n}\n.form ion-list h2 span {\n  color: var(--primary);\n  font-size: 0.9rem;\n}\n.form ion-list ion-item {\n  background: var(--white);\n  border-radius: 0px;\n  padding: 0;\n  margin-bottom: 35px;\n}\n.form ion-list ion-item.item-select ion-select {\n  --placeholder-color: var(--text-light) !important;\n  --placeholder-opacity: 1;\n  color: var(--text-light);\n  font-size: 0.8rem !important;\n  font-weight: 500 !important;\n  letter-spacing: 0px;\n  padding: 0 18px !important;\n  min-height: 40px;\n  border-radius: 7px;\n  border: 1px solid #ccc !important;\n}\n.form ion-list ion-item.item-input ion-input {\n  color: var(--text-light) !important;\n  font-size: 0.8rem !important;\n  font-weight: 500 !important;\n  letter-spacing: 0px;\n  padding: 0 18px !important;\n  min-height: 40px;\n  border-radius: 7px;\n  border: 1px solid #ccc !important;\n}\nion-footer {\n  padding: 16px;\n  --animate-duration: .4s !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFBUjtBQUNRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ1o7QUFJQTtFQUNJLHdCQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUdRO0VBQ0ksbUNBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFEWjtBQUVZO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtBQUFoQjtBQUdRO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQURaO0FBR2dCO0VBQ0ksaURBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QUFEcEI7QUFLZ0I7RUFDSSxtQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBSHBCO0FBVUE7RUFDSSxhQUFBO0VBQ0Esa0NBQUE7QUFQSiIsImZpbGUiOiJzZXJ2ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMTdweCAwO1xuICAgICAgICBzbWFsbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IC44NXJlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmZvcm0ge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIGlvbi1saXN0IHtcbiAgICAgICAgaDIge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC45cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICAgICAgICAgICAgJi5pdGVtLXNlbGVjdCB7XG4gICAgICAgICAgICAgICAgaW9uLXNlbGVjdCB7XG4gICAgICAgICAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLXRleHQtbGlnaHQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMThweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLml0ZW0taW5wdXQge1xuICAgICAgICAgICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC44cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE4cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIC0tYW5pbWF0ZS1kdXJhdGlvbjogLjRzICFpbXBvcnRhbnQ7XG59Il19 */";

/***/ }),

/***/ 20178:
/*!*************************************************************!*\
  !*** ./src/app/settings/server/server.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>\n\t\t\t<h2>\n\t\t\t\t{{'server_settings' | translate }}\n\t\t\t\n\t\t\t</h2>\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n<ion-content fullscreen class=\"bg_color\">\n\t<form [formGroup]=\"serverForm\" (ngSubmit)=\"save()\" class=\"form\">\n\t\t<ion-list lines=\"none\">\n\t\t\t<h2 class=\"d-flex animate__animated animate__fadeInUp\">{{'server_address' | translate }}</h2>\n\t\t\t<ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n\t\t\t\t<ion-input type=\"text\" formControlName=\"hostname\" placeholder=\"{{'server_address' | translate}}\"></ion-input>\n\t\t\t</ion-item>\n\t\t</ion-list>\n\t</form>\n\t<ion-footer class=\"ion-no-border animate__animated animate__fadeInUp\">\n\t\t<ion-button size=\"large\" shape=\"block\" class=\"btn\" (click)=\"save()\">{{'save' | translate}}</ion-button>\n\t</ion-footer>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_settings_server_server_module_ts.js.map