"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_fund-transfer_fund-transfer_module_ts"],{

/***/ 31208:
/*!***************************************************************!*\
  !*** ./src/app/fund-transfer/fund-transfer-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FundTransferPageRoutingModule": () => (/* binding */ FundTransferPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _fund_transfer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fund-transfer.page */ 41975);




const routes = [
    {
        path: '',
        component: _fund_transfer_page__WEBPACK_IMPORTED_MODULE_0__.FundTransferPage
    }
];
let FundTransferPageRoutingModule = class FundTransferPageRoutingModule {
};
FundTransferPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FundTransferPageRoutingModule);



/***/ }),

/***/ 38550:
/*!*******************************************************!*\
  !*** ./src/app/fund-transfer/fund-transfer.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FundTransferPageModule": () => (/* binding */ FundTransferPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _fund_transfer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fund-transfer-routing.module */ 31208);
/* harmony import */ var _fund_transfer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fund-transfer.page */ 41975);








let FundTransferPageModule = class FundTransferPageModule {
};
FundTransferPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _fund_transfer_routing_module__WEBPACK_IMPORTED_MODULE_0__.FundTransferPageRoutingModule
        ],
        declarations: [_fund_transfer_page__WEBPACK_IMPORTED_MODULE_1__.FundTransferPage]
    })
], FundTransferPageModule);



/***/ }),

/***/ 41975:
/*!*****************************************************!*\
  !*** ./src/app/fund-transfer/fund-transfer.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FundTransferPage": () => (/* binding */ FundTransferPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _fund_transfer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fund-transfer.page.html?ngResource */ 41787);
/* harmony import */ var _fund_transfer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fund-transfer.page.scss?ngResource */ 88359);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);





let FundTransferPage = class FundTransferPage {
    constructor(route) {
        this.route = route;
        this.from_account = "1";
    }
    ngOnInit() {
    }
    add_beneficiary() {
        this.route.navigate(['./add-beneficiary']);
    }
    transfered_successfully() {
        this.route.navigate(['./transfered-successfully']);
    }
};
FundTransferPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
FundTransferPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-fund-transfer',
        template: _fund_transfer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_fund_transfer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FundTransferPage);



/***/ }),

/***/ 88359:
/*!******************************************************************!*\
  !*** ./src/app/fund-transfer/fund-transfer.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title h2 {\n  font-size: 1.1rem;\n  font-weight: 500;\n  margin: 0;\n  padding: 17px 0;\n}\nion-header ion-toolbar ion-title h2 small {\n  display: block;\n  margin-top: 4px;\n  font-weight: 400;\n  font-size: 0.85rem;\n}\n.form {\n  width: calc(100% - 32px);\n  margin-top: 30px;\n}\n.form ion-list h2 {\n  color: var(--text-black) !important;\n  font-size: 1.1rem !important;\n  letter-spacing: 0px;\n  font-weight: 600 !important;\n  margin: 0;\n  margin-bottom: 7px;\n}\n.form ion-list h2 span {\n  color: var(--primary);\n  font-size: 0.9rem;\n}\n.form ion-list ion-item {\n  background: var(--white);\n  border-radius: 0px;\n  padding: 0;\n  margin-bottom: 35px;\n}\n.form ion-list ion-item.item-select ion-select {\n  --placeholder-color: var(--text-light) !important;\n  --placeholder-opacity: 1;\n  color: var(--text-light);\n  font-size: 0.8rem !important;\n  font-weight: 500 !important;\n  letter-spacing: 0px;\n  padding: 0 18px !important;\n  min-height: 40px;\n  border-radius: 7px;\n  border: 1px solid #ccc !important;\n}\n.form ion-list ion-item.item-input ion-input {\n  color: var(--text-light) !important;\n  font-size: 0.8rem !important;\n  font-weight: 500 !important;\n  letter-spacing: 0px;\n  padding: 0 18px !important;\n  min-height: 40px;\n  border-radius: 7px;\n  border: 1px solid #ccc !important;\n}\nion-footer {\n  padding: 16px;\n  --animate-duration: .4s !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bmQtdHJhbnNmZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBQVI7QUFDUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNaO0FBSUE7RUFDSSx3QkFBQTtFQUNBLGdCQUFBO0FBREo7QUFHUTtFQUNJLG1DQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBRFo7QUFFWTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7QUFBaEI7QUFHUTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFEWjtBQUdnQjtFQUNJLGlEQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBRHBCO0FBS2dCO0VBQ0ksbUNBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQUhwQjtBQVVBO0VBQ0ksYUFBQTtFQUNBLGtDQUFBO0FBUEoiLCJmaWxlIjoiZnVuZC10cmFuc2Zlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAxN3B4IDA7XG4gICAgICAgIHNtYWxsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjg1cmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZm9ybSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgaW9uLWxpc3Qge1xuICAgICAgICBoMiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjaykgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gICAgICAgICAgICAmLml0ZW0tc2VsZWN0IHtcbiAgICAgICAgICAgICAgICBpb24tc2VsZWN0IHtcbiAgICAgICAgICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0tdGV4dC1saWdodCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYuaXRlbS1pbnB1dCB7XG4gICAgICAgICAgICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW0gIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMThweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1mb290ZXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgLS1hbmltYXRlLWR1cmF0aW9uOiAuNHMgIWltcG9ydGFudDtcbn0iXX0= */";

/***/ }),

/***/ 41787:
/*!******************************************************************!*\
  !*** ./src/app/fund-transfer/fund-transfer.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>\n\t\t\t<h2>\n\t\t\t\t{{'fund_transfer' | translate}}\n\t\t\t\t<small>{{'within_bank' | translate}}</small>\n\t\t\t</h2>\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n\t<div class=\"form\">\n\t\t<ion-list lines=\"none\">\n\t\t\t<h2 class=\"animate__animated animate__fadeInUp\">{{'from_account' | translate}}</h2>\n\t\t\t<ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n\t\t\t\t<ion-select mode=\"md\" [(ngModel)]=\"from_account\" interface=\"action-sheet\">\n\t\t\t\t\t<ion-select-option value=\"1\">SB 1144 2254 2478 2145</ion-select-option>\n\t\t\t\t\t<ion-select-option value=\"2\">SB 2244 1154 6778 7745</ion-select-option>\n\t\t\t\t\t<ion-select-option value=\"3\">SB 8844 5654 3278 1045</ion-select-option>\n\t\t\t\t</ion-select>\n\t\t\t</ion-item>\n\n\t\t\t<h2 class=\"d-flex animate__animated animate__fadeInUp\">{{'to_account' | translate}}\n\t\t\t\t<span class=\"end\" (click)=\"add_beneficiary()\">{{'add_beneficiary' | translate}}</span>\n\t\t\t</h2>\n\t\t\t<ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n\t\t\t\t<ion-select interface=\"action-sheet\" mode=\"md\" placeholder=\"{{'choose_beneficiary' | translate}}\">\n\t\t\t\t\t<ion-select-option value=\"1\">SB 1144 2254 2478 2145</ion-select-option>\n\t\t\t\t\t<ion-select-option value=\"2\">SB 2244 1154 6778 7745</ion-select-option>\n\t\t\t\t\t<ion-select-option value=\"3\">SB 8844 5654 3278 1045</ion-select-option>\n\t\t\t\t</ion-select>\n\t\t\t</ion-item>\n\n\t\t\t<h2 class=\"d-flex animate__animated animate__fadeInUp\">{{'enter_amount' | translate}} <span class=\"end\">100 500 1000 2000</span></h2>\n\t\t\t<ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n\t\t\t\t<ion-input type=\"number\" placeholder=\"0.00\"></ion-input>\n\t\t\t</ion-item>\n\n\t\t\t<h2 class=\"d-flex animate__animated animate__fadeInUp\">{{'remark' | translate}}</h2>\n\t\t\t<ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n\t\t\t\t<ion-input type=\"text\" placeholder=\"{{'enter_remark' | translate}}\"></ion-input>\n\t\t\t</ion-item>\n\t\t</ion-list>\n\t</div>\n</ion-content>\n<ion-footer class=\"ion-no-border animate__animated animate__fadeInUp\">\n\t<ion-button size=\"large\" shape=\"block\" class=\"btn\" (click)=\"transfered_successfully()\">{{'transfer_now' | translate}}</ion-button>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_fund-transfer_fund-transfer_module_ts.js.map