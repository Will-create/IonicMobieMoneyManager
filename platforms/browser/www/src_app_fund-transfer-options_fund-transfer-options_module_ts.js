"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_fund-transfer-options_fund-transfer-options_module_ts"],{

/***/ 81172:
/*!*******************************************************************************!*\
  !*** ./src/app/fund-transfer-options/fund-transfer-options-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FundTransferOptionsPageRoutingModule": () => (/* binding */ FundTransferOptionsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _fund_transfer_options_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fund-transfer-options.page */ 35650);




const routes = [
    {
        path: '',
        component: _fund_transfer_options_page__WEBPACK_IMPORTED_MODULE_0__.FundTransferOptionsPage
    }
];
let FundTransferOptionsPageRoutingModule = class FundTransferOptionsPageRoutingModule {
};
FundTransferOptionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FundTransferOptionsPageRoutingModule);



/***/ }),

/***/ 12705:
/*!***********************************************************************!*\
  !*** ./src/app/fund-transfer-options/fund-transfer-options.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FundTransferOptionsPageModule": () => (/* binding */ FundTransferOptionsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _fund_transfer_options_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fund-transfer-options-routing.module */ 81172);
/* harmony import */ var _fund_transfer_options_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fund-transfer-options.page */ 35650);








let FundTransferOptionsPageModule = class FundTransferOptionsPageModule {
};
FundTransferOptionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _fund_transfer_options_routing_module__WEBPACK_IMPORTED_MODULE_0__.FundTransferOptionsPageRoutingModule
        ],
        declarations: [_fund_transfer_options_page__WEBPACK_IMPORTED_MODULE_1__.FundTransferOptionsPage]
    })
], FundTransferOptionsPageModule);



/***/ }),

/***/ 35650:
/*!*********************************************************************!*\
  !*** ./src/app/fund-transfer-options/fund-transfer-options.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FundTransferOptionsPage": () => (/* binding */ FundTransferOptionsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _fund_transfer_options_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fund-transfer-options.page.html?ngResource */ 35366);
/* harmony import */ var _fund_transfer_options_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fund-transfer-options.page.scss?ngResource */ 74226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);





let FundTransferOptionsPage = class FundTransferOptionsPage {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
    fund_transfer() {
        this.route.navigate(['./fund-transfer']);
    }
    imps() {
        this.route.navigate(['./imps']);
    }
};
FundTransferOptionsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
FundTransferOptionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-fund-transfer-options',
        template: _fund_transfer_options_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_fund_transfer_options_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FundTransferOptionsPage);



/***/ }),

/***/ 74226:
/*!**********************************************************************************!*\
  !*** ./src/app/fund-transfer-options/fund-transfer-options.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "ion-list {\n  margin: 0;\n  margin-top: 13px;\n  padding: 0;\n  background: none;\n}\nion-list ion-item {\n  width: calc(100% - 20px);\n  margin: 0 auto;\n  border-radius: 8px;\n  margin-bottom: 13px;\n  padding: 15px;\n  box-shadow: 0 5px 4px -6px rgba(0, 0, 0, 0.4);\n  --background: var(--transparent);\n  background: var(--white);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --min-height: unset;\n}\nion-list ion-item .icon_box {\n  margin: 0;\n  width: 45px;\n  margin-right: 20px;\n}\nion-list ion-item .text_box {\n  width: 100%;\n}\nion-list ion-item .text_box h2 {\n  margin: 0;\n  margin-bottom: 5px;\n  font-weight: 700;\n  font-size: 1rem;\n}\nion-list ion-item .text_box h3 {\n  color: var(--text-light);\n  font-size: 0.9rem;\n  font-weight: 400;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bmQtdHJhbnNmZXItb3B0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDQyxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFO0VBQ0Msd0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw2Q0FBQTtFQUNBLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNIO0FBQ0c7RUFDQyxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0o7QUFFRztFQUNDLFdBQUE7QUFBSjtBQUVJO0VBQ0MsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQUw7QUFHSTtFQUNDLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFETCIsImZpbGUiOiJmdW5kLXRyYW5zZmVyLW9wdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHRpb24tbGlzdCB7XG5cdFx0bWFyZ2luOiAwO1xuXHRcdG1hcmdpbi10b3A6IDEzcHg7XG5cdFx0cGFkZGluZzogMDtcblx0XHRiYWNrZ3JvdW5kOiBub25lO1xuXG5cdFx0aW9uLWl0ZW0ge1xuXHRcdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuXHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAxM3B4O1xuXHRcdFx0cGFkZGluZzogMTVweDtcblx0XHRcdGJveC1zaGFkb3c6IDAgNXB4IDRweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC40KTtcblx0XHRcdC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuXHRcdFx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuXHRcdFx0LS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuXHRcdFx0LS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuXHRcdFx0LS1wYWRkaW5nLXN0YXJ0OiAwO1xuXHRcdFx0LS1taW4taGVpZ2h0OiB1bnNldDtcblxuXHRcdFx0Lmljb25fYm94IHtcblx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHR3aWR0aDogNDVweDtcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xuXHRcdFx0fVxuXG5cdFx0XHQudGV4dF9ib3gge1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblxuXHRcdFx0XHRoMiB7XG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDVweDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMXJlbTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGgzIHtcblx0XHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAuOXJlbTtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9Il19 */";

/***/ }),

/***/ 35366:
/*!**********************************************************************************!*\
  !*** ./src/app/fund-transfer-options/fund-transfer-options.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>{{'fund_transfer' | translate}}</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"bg_color\">\n\t<ion-list lines=\"none\">\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"fund_transfer()\">\n\t\t\t<div class=\"icon_box\" slot=\"start\">\n\t\t\t\t<img src=\"assets/imgs/ic_transfer.png\">\n\t\t\t</div>\n\t\t\t<div class=\"text_box\">\n\t\t\t\t<h2>{{'fund_transfer' | translate}}</h2>\n\t\t\t\t<h3>{{'to_other_bank' | translate}}</h3>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"imps()\">\n\t\t\t<div class=\"icon_box\" slot=\"start\">\n\t\t\t\t<img src=\"assets/imgs/ic_transfer.png\">\n\t\t\t</div>\n\t\t\t<div class=\"text_box\">\n\t\t\t\t<h2>{{'imps' | translate}}</h2>\n\t\t\t\t<h3>{{'within_bank' | translate}}</h3>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"fund_transfer()\">\n\t\t\t<div class=\"icon_box\" slot=\"start\">\n\t\t\t\t<img src=\"assets/imgs/ic_transfer.png\">\n\t\t\t</div>\n\t\t\t<div class=\"text_box\">\n\t\t\t\t<h2>{{'neft' | translate}}</h2>\n\t\t\t\t<h3>{{'within_bank' | translate}}</h3>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"fund_transfer()\">\n\t\t\t<div class=\"icon_box\" slot=\"start\">\n\t\t\t\t<img src=\"assets/imgs/ic_transfer.png\">\n\t\t\t</div>\n\t\t\t<div class=\"text_box\">\n\t\t\t\t<h2>{{'pay' | translate}}</h2>\n\t\t\t\t<h3>{{'scan_to_pay' | translate}}</h3>\n\t\t\t</div>\n\t\t</ion-item>\t\n\t\t\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"fund_transfer()\">\n\t\t\t<div class=\"icon_box\" slot=\"start\">\n\t\t\t\t<img src=\"assets/imgs/ic_transfer.png\">\n\t\t\t</div>\n\t\t\t<div class=\"text_box\">\n\t\t\t\t<h2>{{'rigs' | translate}}</h2>\n\t\t\t\t<h3>{{'easiest_mode_of_transfer_money' | translate}}</h3>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t \n\t</ion-list>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_fund-transfer-options_fund-transfer-options_module_ts.js.map