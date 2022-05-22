"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_imps_imps_module_ts"],{

/***/ 9968:
/*!*********************************************!*\
  !*** ./src/app/imps/imps-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImpsPageRoutingModule": () => (/* binding */ ImpsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _imps_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imps.page */ 4630);




const routes = [
    {
        path: '',
        component: _imps_page__WEBPACK_IMPORTED_MODULE_0__.ImpsPage
    }
];
let ImpsPageRoutingModule = class ImpsPageRoutingModule {
};
ImpsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ImpsPageRoutingModule);



/***/ }),

/***/ 95329:
/*!*************************************!*\
  !*** ./src/app/imps/imps.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImpsPageModule": () => (/* binding */ ImpsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _imps_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imps-routing.module */ 9968);
/* harmony import */ var _imps_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imps.page */ 4630);








let ImpsPageModule = class ImpsPageModule {
};
ImpsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _imps_routing_module__WEBPACK_IMPORTED_MODULE_0__.ImpsPageRoutingModule
        ],
        declarations: [_imps_page__WEBPACK_IMPORTED_MODULE_1__.ImpsPage]
    })
], ImpsPageModule);



/***/ }),

/***/ 4630:
/*!***********************************!*\
  !*** ./src/app/imps/imps.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImpsPage": () => (/* binding */ ImpsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _imps_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imps.page.html?ngResource */ 87490);
/* harmony import */ var _imps_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imps.page.scss?ngResource */ 24227);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);





let ImpsPage = class ImpsPage {
    constructor(route) {
        this.route = route;
        this.from_account = "1";
        this.account_holder_name = "1";
    }
    ngOnInit() {
    }
    transfered_successfully() {
        this.route.navigate(['./transfered-successfully']);
    }
};
ImpsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ImpsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-imps',
        template: _imps_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_imps_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ImpsPage);



/***/ }),

/***/ 24227:
/*!************************************************!*\
  !*** ./src/app/imps/imps.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title h2 {\n  font-size: 1.1rem;\n  font-weight: 500;\n  margin: 0;\n  padding: 17px 0;\n}\nion-header ion-toolbar ion-title h2 small {\n  display: block;\n  margin-top: 4px;\n  font-weight: 400;\n  font-size: 0.85rem;\n}\n.form {\n  width: calc(100% - 32px);\n  margin-top: 30px;\n}\n.form ion-list h2 {\n  color: var(--text-black) !important;\n  font-size: 1.1rem !important;\n  letter-spacing: 0px;\n  font-weight: 600 !important;\n  margin: 0;\n  margin-bottom: 7px;\n}\n.form ion-list h2 span {\n  color: var(--primary);\n  font-size: 0.9rem;\n}\n.form ion-list ion-item {\n  background: var(--white);\n  border-radius: 0px;\n  padding: 0;\n  margin-bottom: 35px;\n}\n.form ion-list ion-item.item-select ion-select {\n  --placeholder-color: var(--text-light) !important;\n  --placeholder-opacity: 1;\n  color: var(--text-light);\n  font-size: 0.8rem !important;\n  font-weight: 500 !important;\n  letter-spacing: 0px;\n  padding: 0 18px !important;\n  min-height: 40px;\n  border-radius: 7px;\n  border: 1px solid #ccc !important;\n}\n.form ion-list ion-item.item-input ion-input {\n  color: var(--text-light) !important;\n  font-size: 0.8rem !important;\n  font-weight: 500 !important;\n  letter-spacing: 0px;\n  padding: 0 18px !important;\n  min-height: 40px;\n  border-radius: 7px;\n  border: 1px solid #ccc !important;\n}\nion-footer {\n  padding: 16px;\n  --animate-duration: .4s !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltcHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBQVI7QUFDUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNaO0FBSUE7RUFDSSx3QkFBQTtFQUNBLGdCQUFBO0FBREo7QUFHUTtFQUNJLG1DQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBRFo7QUFFWTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7QUFBaEI7QUFHUTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFEWjtBQUdnQjtFQUNJLGlEQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBRHBCO0FBS2dCO0VBQ0ksbUNBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQUhwQjtBQVVBO0VBQ0ksYUFBQTtFQUNBLGtDQUFBO0FBUEoiLCJmaWxlIjoiaW1wcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAxN3B4IDA7XG4gICAgICAgIHNtYWxsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjg1cmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZm9ybSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgaW9uLWxpc3Qge1xuICAgICAgICBoMiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjaykgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gICAgICAgICAgICAmLml0ZW0tc2VsZWN0IHtcbiAgICAgICAgICAgICAgICBpb24tc2VsZWN0IHtcbiAgICAgICAgICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0tdGV4dC1saWdodCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYuaXRlbS1pbnB1dCB7XG4gICAgICAgICAgICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW0gIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMThweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1mb290ZXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgLS1hbmltYXRlLWR1cmF0aW9uOiAuNHMgIWltcG9ydGFudDtcbn0iXX0= */";

/***/ }),

/***/ 87490:
/*!************************************************!*\
  !*** ./src/app/imps/imps.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            <h2>\n                {{'imps' | translate}}\n                <small>{{'quick_transfer_mode' | translate}}</small>\n            </h2>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n    <div class=\"form\">\n        <ion-list lines=\"none\">\n            <h2 class=\"animate__animated animate__fadeInUp\">{{'from_account' | translate}}</h2>\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n                <ion-select mode=\"md\" [(ngModel)]=\"from_account\" interface=\"action-sheet\">\n                    <ion-select-option value=\"1\">SB 1144 2254 2478 2145</ion-select-option>\n                    <ion-select-option value=\"2\">SB 2244 1154 6778 7745</ion-select-option>\n                    <ion-select-option value=\"3\">SB 8844 5654 3278 1045</ion-select-option>\n                </ion-select>\n            </ion-item>\n\n            <h2 class=\"animate__animated animate__fadeInUp\">{{'account_holder_name' | translate}}</h2>\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n                <ion-select [(ngModel)]=\"account_holder_name\" interface=\"action-sheet\" mode=\"md\">\n                    <ion-select-option value=\"1\">ABC PVT.LTD</ion-select-option>\n                    <ion-select-option value=\"2\">Sam Smith</ion-select-option>\n                </ion-select>\n            </ion-item>\n\n            <h2 class=\"d-flex animate__animated animate__fadeInUp\">{{'account_number' | translate}}</h2>\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n                <ion-input type=\"text\" placeholder=\"1245 8547 9654 1241\"></ion-input>\n            </ion-item>\n\n            <h2 class=\"d-flex animate__animated animate__fadeInUp\">{{'bank_name' | translate}}</h2>\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n                <ion-input type=\"text\" placeholder=\"HXDC Bank Of India\"></ion-input>\n            </ion-item>\n\n            <h2 class=\"d-flex animate__animated animate__fadeInUp\">{{'ifsc_code' | translate}}</h2>\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n                <ion-input type=\"text\" placeholder=\"HXDC000012121\"></ion-input>\n            </ion-item>\n\n            <h2 class=\"d-flex animate__animated animate__fadeInUp\">{{'enter_amount' | translate}} <span class=\"end\">100 500 1000 2000</span></h2>\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n                <ion-input type=\"number\" placeholder=\"0.00\"></ion-input>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border animate__animated animate__fadeInUp\">\n    <ion-button size=\"large\" shape=\"block\" class=\"btn\" (click)=\"transfered_successfully()\">{{'transfer_now' | translate}}</ion-button>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_imps_imps_module_ts.js.map